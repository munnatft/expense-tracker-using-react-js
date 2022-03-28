import { ADD_TRANSACTION, CALCULATE_EXPENSE, CALCULATE_INCOME, DELETE_TRANSACTION, FETCH_TRANSACTION, SHOW_ERROR } from "./action";

const initialState = {
    transactions : [],
    income : 0,
    expense : 0,
    error : ''
}

const findFilteredSum = (transactions , givenType) => {
    return transactions
            .filter((transaction) => transaction.type === givenType)
            .reduce((totalSum,currrentTransaction)=>{
              return totalSum + Number(currrentTransaction.amount)  
            },0)
}

export const ExpenseReducer = (state=initialState , action) => {
    switch (action.type) {
        case FETCH_TRANSACTION : 
            return {
                ...state,
                transactions : action.payload
            }
            
        case ADD_TRANSACTION:
            const newTransactions = [...state.transactions , action.payload];
            return {
                ...state,
                transactions : newTransactions,
            }
        
        case DELETE_TRANSACTION : 
            const filteredTransaction = state.transactions.filter((transaction) => transaction._id !== action.payload);
            return {
                ...state,
                transactions : filteredTransaction,
            }

        case CALCULATE_INCOME : 
            const newIncome = findFilteredSum(state.transactions , 'Income')
            return {
                ...state,
                income : newIncome
            }

        case CALCULATE_EXPENSE :
            const newExpense = findFilteredSum(state.transactions , 'Expense')
            return {
                ...state,
                expense : newExpense
            }
        
        case SHOW_ERROR : 
            return {
                ...state,
                error : action.payload
            }
    
        default:
            return state;
    }
}