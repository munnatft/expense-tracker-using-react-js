// import { useExpense } from '../../Store/ExpenseProvider';
import classes from './Budget.module.css';

const Expense = ({spentAmount}) => {
  // const {spentAmount} = useExpense();
  return (
    <div className={`${classes['budget']} ${classes['expense']}`}>
      <span><strong>Expense - </strong>Rs. {spentAmount.toFixed(2)}</span>
    </div>
  )
}

export default Expense;
