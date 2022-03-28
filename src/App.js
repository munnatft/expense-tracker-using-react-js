import BalanceBox from './components/Balance/BalanceBox';
import ExpenseForm from './components/ExpenseForm';
import Transaction from './components/transaction/Transaction';
import './index.css';

const App = () => {

  return (
    <div >
      <h1 className="heading">My Budget Tracker</h1>
      <BalanceBox />
      <ExpenseForm />
      <Transaction />
    </div>
  );
}

export default App;
