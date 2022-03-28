import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useExpense } from '../Store/ExpenseProvider';
import classes from './ExpenseForm.module.css';
import { handleAddTransaction } from '../Store/action';

const ExpenseForm = () => {
  const dispatch = useDispatch();
  // const {addToTransactionHistory} = useExpense();
  const [title , setTitle] = useState('');
  const [amount , setAmount] = useState('');
  const [type,setType] = useState('Income');
  const [error , setError] = useState({
    title : false,
    amount : false
  })

  const numberExpression = /^[0-9]+$/;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const titleIsValid = title.trim().length !== 0 ;
    const amountIsValid = numberExpression.test(amount);
    const formIsValid = titleIsValid && amountIsValid ;
    setError({
      title : !titleIsValid ,
      amount: !amountIsValid
    })
    if(!formIsValid) {
      return ;
    }
    const transaction = {
      type : type,
      title : title,
      amount : amount
    }
    // dispatch(addTransaction(transaction))
    dispatch(handleAddTransaction(transaction));

    // addToTransactionHistory(type,title,amount);
    setTitle('');
    setAmount('');
  }

  const titleClass = `${classes['form-control']} ${error.title ? classes['invalid'] : ''}`;
  const amountClass = `${classes['form-control']} ${error.amount ? classes['invalid'] : ''}`;

  return (
    <div className={classes['expense-form']}>
        <h2>Add Income/Expense</h2>
        <form className={classes.form} onSubmit={formSubmitHandler}>
            <div className={classes['form-control']}>
                <label>Select</label>
                <select value={type} onChange={(e)=>setType(e.target.value)}>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </select>
            </div>
            <div className={titleClass}>
              <label>Title</label>
              <input 
                type="text"
                value={title} 
                onChange={(e)=>setTitle(e.target.value)} 
              />
              {error.title && <p>Title field is required.</p>}
            </div>
            <div className={amountClass}>
                <label>Amount</label>
                <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)} />
                {error.amount && <p>Amount should be numbers i.e., [0-9].</p>}
            </div>
            <button className={classes.btn}>Add</button>
        </form>
    </div>
  )
}

export default ExpenseForm;
