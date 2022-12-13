import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ThunkActionDispatch } from "redux-thunk";
import { useTypedSelector } from "../../Store";
import { handleFetchTransaction } from "../../Store/action";
import classes from "./Transaction.module.css";
import TransactionList from "./TransactionList";

const Transaction = () => {

  const { transactions } = useTypedSelector((state) => state.details);
  const dispatch: ThunkActionDispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(handleFetchTransaction());
  }, [dispatch]);

  return (
    <div className={classes["card"]}>
      <div className={classes["card-title"]}>History of transactions</div>
      <ul className={classes["card-body"]}>
        {transactions.length > 0 &&
          transactions.map((transaction) => {
            return (
              <TransactionList
                key={transaction._id}
                transaction={transaction}
              />
            );
          })}

        {transactions.length === 0 && (
          <p className={classes["no-transaction"]}>No transaction found !</p>
        )}
      </ul>
    </div>
  );
};

export default Transaction;
