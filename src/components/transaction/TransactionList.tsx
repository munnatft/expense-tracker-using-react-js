import React from 'react';
import { useDispatch } from 'react-redux';
import { ThunkActionDispatch } from 'redux-thunk';
import {  handleDeleteTransaction } from 'Store/action';
import classes from './Transaction.module.css';

const TransactionList = ({transaction, ariaLabel="transaction"}: {transaction: Transaction, ariaLabel?: string}) => {

  const dispatch: ThunkActionDispatch<any> = useDispatch();
  const {_id,type,title,amount} = transaction;


  return (
    <li aria-labelledby={ariaLabel} className={classes['list-item']} >
        <div className={classes['expense-title']}>{title}</div>
        <div className={classes['expense']}>
          <span className={`${classes['amount']} ${type === 'Expense' ? classes['expense-type'] : classes['income-type']}`}>Rs {amount}</span>
          <span aria-label={`delete-${ariaLabel}`} className={classes['cancel']} onClick={ ()=> dispatch(handleDeleteTransaction(_id)) }>x</span>
        </div>
    </li>
  )
}

export default TransactionList;
