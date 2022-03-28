import { createContext, useContext, useEffect, useState } from "react";

const initialState = {
    income : 0,
    remainingIncome : 0,
    spentAmount : 0,
    listOfExpenses : [],
    addToTransactionHistory : (type,title,cost) => {},
    deleteTransaction : (id) => {}
}
const ExpenseContext = createContext(initialState);

export const useExpense = () => useContext(ExpenseContext);

export const ExpenseProvider = (props) => {

    const [transactions, setTransactions] = useState([]);
    const [income , setIncome] = useState(0);
    const [remainingIncome , setRemainingIncome] = useState(0);
    const [spentAmount , setSpentAmount] = useState(0);

    useEffect(() => {
        const expenseAmount = transactions
                                .filter((transaction)=>transaction.type=== 'Expense')
                                .reduce((totalAmount,transaction)=>{       
                                    return totalAmount + Number(transaction.amount)
                
                                },0)
        const earntAmount = transactions
                                .filter((transaction)=>transaction.type=== 'Income')
                                .reduce((totalAmount,transaction)=>{       
                                    return totalAmount + Number(transaction.amount)
                
                                },0)

        setIncome(earntAmount)
        setSpentAmount(expenseAmount)
        setRemainingIncome(income-spentAmount)
    },[transactions , spentAmount , income])

    const addToTransactionHistoryHandler = (type,title,cost) => {
        setTransactions([
            ...transactions , {
                _id : Math.ceil(Math.random()*100000000).toString(),
                type : type,
                title : title,
                amount : cost
            }
        ]);
    }

    const deleteTransactionHandler = (id) => {
        const transactionHistory = transactions.filter((transaction) => transaction.id !== id);
        setTransactions(transactionHistory);
    }

    const expenseStore = {
        listOfExpenses : transactions,
        spentAmount,
        income,
        remainingIncome,
        addToTransactionHistory : addToTransactionHistoryHandler,
        deleteTransaction : deleteTransactionHandler
    }

    return (
        <ExpenseContext.Provider value={expenseStore}>{props.children}</ExpenseContext.Provider>
    );
}