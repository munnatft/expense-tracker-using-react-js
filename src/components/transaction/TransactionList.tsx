import React from 'react';
import { useDispatch } from 'react-redux';
import { ThunkActionDispatch } from 'redux-thunk';
import {  handleDeleteTransaction } from '../../Store/action';
import classes from './Transaction.module.css';

const TransactionList = ({transaction}: {transaction: Transaction}) => {

  const dispatch: ThunkActionDispatch<any> = useDispatch();
  const {_id,type,title,amount} = transaction;


  return (
    <div className={classes['list-item']} >
        <div className={classes['expense-title']}>{title}</div>
        <div className={classes['expense']}>
          <span className={`${classes['amount']} ${type === 'Expense' ? classes['expense-type'] : classes['income-type']}`}>Rs {amount}</span>
          <span className={classes['cancel']} onClick={ ()=> dispatch(handleDeleteTransaction(_id)) }>x</span>
        </div>
    </div>
  )
}

export default TransactionList;