import React from "react";
import classes from './Budget.module.css';

const Income: React.FC<{incomeBalance: number}> = ({incomeBalance}) => {

    return (
      <div className={classes.budget}>
        <span><strong>Income - </strong>Rs. {incomeBalance.toFixed(2)}</span>
      </div>
    )
}

export default Income;
