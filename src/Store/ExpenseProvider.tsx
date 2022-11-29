import { createContext, useContext, useEffect, useState } from "react";

type ContextInitialState = {
    income: number,
    expense: number,
    transactions: Transaction[],
    addToTransactionHistory: (Transaction: AddTransaction) => void,
    deleteTransaction: (_id: string) =>void
}

const initialState: ContextInitialState = {
  income: 0,
  expense: 0,
  transactions: [],
  addToTransactionHistory: ({type, title, amount}: AddTransaction) => {},
  deleteTransaction: (_id: string) => {},
};
const ExpenseContext = createContext(initialState);

export const useExpense = () => useContext(ExpenseContext);

export const ExpenseProvider = ({children}: {children: React.ReactNode}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [income, setIncome] = useState(0);
  const [spentAmount, setSpentAmount] = useState(0);

  useEffect(() => {
    const expenseAmount = transactions
      .filter((transaction) => transaction.type === "Expense")
      .reduce((totalAmount, transaction) => {
        return totalAmount + Number(transaction.amount);
      }, 0);
    const earntAmount = transactions
      .filter((transaction) => transaction.type === "Income")
      .reduce((totalAmount, transaction) => {
        return totalAmount + Number(transaction.amount);
      }, 0);

    setIncome(earntAmount);
    setSpentAmount(expenseAmount);
  }, [transactions, spentAmount, income]);

  const addToTransactionHistoryHandler = ({type, title, amount}: AddTransaction) => {
    setTransactions([
      ...transactions,
      {
        _id: Math.ceil(Math.random() * 100000000).toString(),
        type: type,
        title: title,
        amount: amount,
      },
    ]);
  };

  const deleteTransactionHandler = (_id: string) => {
    const transactionHistory = transactions.filter(
      (transaction) => transaction._id !== _id
    );
    setTransactions(transactionHistory);
  };

  const expenseStore = {
    transactions,
    expense: spentAmount,
    income,
    addToTransactionHistory: addToTransactionHistoryHandler,
    deleteTransaction: deleteTransactionHandler,
  };

  return (
    <ExpenseContext.Provider value={expenseStore}>
      {children}
    </ExpenseContext.Provider>
  );
};
