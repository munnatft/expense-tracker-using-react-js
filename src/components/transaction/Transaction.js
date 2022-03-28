import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { handleFetchTransaction } from '../../Store/action';
import classes from './Transaction.module.css';
import TransactionList from './TransactionList';

const Transaction = () => {
    const {transactions,error} = useSelector(state => state.expense)
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(handleFetchTransaction())
    },[dispatch])


    return (
        <div className={classes['card']}>
            
            <div className={classes['card-title']}>
              History of transactions
            </div>
            <div className={classes['card-body']}>
              {
                transactions.length > 0 && 
                transactions.map((transaction)=>{
                  return <TransactionList 
                            key={transaction._id} 
                            transaction = {transaction}
                          />
                })
              }

              {
                transactions.length === 0 && <p className={classes['no-transaction']}>No transaction found !</p>
              }
              
            </div>
        </div>
    )
}

export default Transaction
