export const FETCH_TRANSACTION = 'FETCH_TRANSACTION';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
export const CALCULATE_INCOME = 'CALCULATE_INCOME';
export const CALCULATE_EXPENSE = 'CALCULATE_EXPENSE';
export const SHOW_ERROR = 'SHOW_ERROR';

export const fetchTransaction = (transaction) => {
    return {
        type : FETCH_TRANSACTION,
        payload : transaction
    }
}

export const addTransaction = (transaction) => {
    return {
        type : ADD_TRANSACTION,
        payload : transaction
    }
}

export const calculateIncome = () => {
    return {
        type : CALCULATE_INCOME
    }
}

export const calculateExpense = () => {
    return {
        type : CALCULATE_EXPENSE
    }
}

export const deleteTransaction = (id) => {
    return {
        type : DELETE_TRANSACTION,
        payload : id
    }
}

export const showError = (error) => {
    return {
        type : SHOW_ERROR,
        payload : error
    }
}


// asynchronous code

export const handleFetchTransaction = () => {
    return async(dispatch) => {

        try {
            const res = await fetch('https://auth-app-81dfd-default-rtdb.firebaseio.com/transactions.json');
            if(!res.ok) {
                throw new Error("Failed to fetch the data.")
            }
            const data = await res.json();
            const transactions = [];
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
            
            dispatch(showError(error.message))
        }
        
    }
}

export const handleAddTransaction = (transaction) => {
    return async(dispatch) => {
        const res = await fetch('https://auth-app-81dfd-default-rtdb.firebaseio.com/transactions.json',{
            method : 'POST',
            body : JSON.stringify(transaction)
        })
        const data = await res.json();
        const newTransaction = {_id : data.name , ...transaction}
        dispatch(addTransaction(newTransaction))
    }
}

export const handleDeleteTransaction = (id) => {
    return async (dispatch) => {
        const res = await fetch(`https://auth-app-81dfd-default-rtdb.firebaseio.com/transactions/${id}.json`,{
            method : 'DELETE'
        })
        dispatch(deleteTransaction(id))
    }
}