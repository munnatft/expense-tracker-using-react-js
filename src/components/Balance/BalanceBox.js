import { useDispatch, useSelector } from 'react-redux';
import Income from './Income';
import classes from './Budget.module.css';
import Expense from './Expense';
import Savings from './Savings';
import { useEffect } from 'react';
import { calculateExpense, calculateIncome } from '../../Store/action';

const BalanceBox = () => {

    const {transactions , income , expense} = useSelector(state => state.expense);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateIncome())
        dispatch(calculateExpense())
    },[transactions])

    
    return (
        <div className={classes.box}>
            <Income incomeBalance = {income} />
            <Savings savings={income-expense} />
            <Expense spentAmount = {expense} />
        </div>
    )
}

export default BalanceBox;
