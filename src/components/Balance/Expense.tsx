import React from "react";
import classes from './Budget.module.css';

const Expense: React.FC<{spentAmount: number}> = ({spentAmount}) => {
  return (
    <div className={`${classes['budget']} ${classes['expense']}`}>
      <span><strong>Expense - </strong>Rs. {spentAmount.toFixed(2)}</span>
    </div>
  )
}

export default Expense;
