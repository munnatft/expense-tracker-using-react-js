import { TypedUseSelectorHook, useSelector } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { ExpenseReducer } from "./reducer";

const rootReducer = combineReducers({
    details : ExpenseReducer
})

export const store = createStore(rootReducer , applyMiddleware(thunk));

export type RootState = {
    details: TransactionState
}


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;