import { useDispatch } from 'react-redux';
import Income from './Income';
import classes from './Budget.module.css';
import Expense from './Expense';
import Savings from './Savings';
import { useEffect } from 'react';
import { calculateExpense, calculateIncome } from 'Store/action';
import { useTypedSelector } from 'Store';
import { Dispatch } from 'redux';

const BalanceBox = () => {

    const {transactions , income , expense} = useTypedSelector((state) => state.details);
    const dispatch: Dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateIncome())
        dispatch(calculateExpense())
    },[transactions, dispatch])

    
    return (
        <div className={classes.box}>
            <Income incomeBalance = {income} />
            <Savings savings={income-expense} />
            <Expense spentAmount = {expense} />
        </div>
    )
}

export default BalanceBox;
