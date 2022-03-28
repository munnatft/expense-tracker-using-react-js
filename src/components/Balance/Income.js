// import { useExpense } from '../../Store/ExpenseProvider';
import classes from './Budget.module.css';

const Income = ({incomeBalance}) => {
  // const {income} = useExpense();


    return (
      <div className={classes.budget}>
        <span><strong>Income - </strong>Rs. {incomeBalance.toFixed(2)}</span>
      </div>
    )
}

export default Income;
