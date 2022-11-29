import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

export const FETCH_TRANSACTION = 'FETCH_TRANSACTION';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
export const CALCULATE_INCOME = 'CALCULATE_INCOME';
export const CALCULATE_EXPENSE = 'CALCULATE_EXPENSE';
export const SHOW_ERROR = 'SHOW_ERROR';

export const fetchTransaction = (transactions: Transaction[]): TransactionAction => {
    return {
        type : FETCH_TRANSACTION,
        payload : transactions
    }
}

export const addTransaction = (transaction: Transaction): TransactionAction => {
    return {
        type : ADD_TRANSACTION,
        payload : transaction
    }
}

export const calculateIncome = (): TransactionAction => {
    return {
        type : CALCULATE_INCOME
    }
}

export const calculateExpense = (): TransactionAction => {
    return {
        type : CALCULATE_EXPENSE
    }
}

export const deleteTransaction = (id: string): TransactionAction => {
    return {
        type : DELETE_TRANSACTION,
        payload : id
    }
}

export const showError = (error: string): TransactionAction => {
    return {
        type : SHOW_ERROR,
        payload : error
    }
}


// asynchronous code

export const handleFetchTransaction: ActionCreator<ThunkAction<Promise<void>, {}, {}, AnyAction>> = () => {
    return async(dispatch: Dispatch) => {

        try {
            const res = await fetch('https://auth-app-81dfd-default-rtdb.firebaseio.com/transactions.json');
            if(!res.ok) {
                throw new Error("Failed to fetch the data.")
            }
            const data = await res.json();
            const transactions: Transaction[] = [];
            for(const key in data) {
                transactions.push({
                    _id : key,
                    title : data[key].title,
                    type : data[key].type,
                    amount : data[key].amount
                })
            }
            dispatch(fetchTransaction(transactions));

        } catch (error) {
            if( error instanceof Error ) {
                dispatch(showError(error.message))
            }
        }
        
    }
}

export const handleAddTransaction: ActionCreator<ThunkAction<Promise<void>, {}, {}, AnyAction>> = (transaction: AddTransaction) => {
    return async(dispatch: Dispatch) => {
        try {
            const res = await fetch('https://auth-app-81dfd-default-rtdb.firebaseio.com/transactions.json',{
                method : 'POST',
                body : JSON.stringify(transaction)
            })
            if(!res.ok) {
                throw new Error("Failed to add the transaction into the server.")
            }
            const data = await res.json();
            const newTransaction: Transaction = {_id : data.name , ...transaction}
            dispatch(addTransaction(newTransaction))
        } catch (error) {
            if( error instanceof Error ) {
                dispatch(showError(error.message))
            }
        }
        
    }
}

export const handleDeleteTransaction: ActionCreator<ThunkAction<Promise<void>, {}, {}, AnyAction>> = (id: string) => {
    
    return async (dispatch: Dispatch) => {
        try {
            const res = await fetch(`https://auth-app-81dfd-default-rtdb.firebaseio.com/transactions/${id}.json`,{
                method : 'DELETE'
            })
            if(!res.ok) {
                throw new Error("Failed to delete the transaction.")
            }
            dispatch(deleteTransaction(id))
        } catch (error) {
            if( error instanceof Error ) {
                dispatch(showError(error.message))
            }
        }
        
    }
}