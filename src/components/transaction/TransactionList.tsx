import React from 'react';
import { useDispatch } from 'react-redux';
import { ThunkActionDispatch } from 'redux-thunk';
import {  deleteTransaction, handleDeleteTransaction } from '../../Store/action';
import classes from './Transaction.module.css';

const TransactionList = ({transaction}: {transaction: Transaction}) => {

  const dispatch: any = useDispatch();
  const {_id,type,title,amount} = transaction;


  return (
    <li aria-label="transaction" className={classes['list-item']} >
        <div className={classes['expense-title']}>{title}</div>
        <div className={classes['expense']}>
          <span className={`${classes['amount']} ${type === 'Expense' ? classes['expense-type'] : classes['income-type']}`}>Rs {amount}</span>
          <span aria-label="delete" className={classes['cancel']} onClick={ ()=> dispatch(deleteTransaction(_id)) }>x</span>
        </div>
    </li>
  )
}

export default TransactionList;
