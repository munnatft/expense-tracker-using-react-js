import React from 'react';
import classes from './Budget.module.css';

const Savings: React.FC<{savings: number}> = ({savings}) => {

  const savingsClassName = `${classes['budget']} ${savings < 0 ? classes['savings'] : ''}`
  return (
    <div className={savingsClassName}>
      <span><strong>{savings < 0 ? 'Loss' : 'Savings'} - </strong>Rs. {Math.abs(savings).toFixed(2)}</span>
    </div>
  )
}

export default Savings;
