import { ToastContainer } from 'react-toastify';
import BalanceBox from './components/Balance/BalanceBox';
import ErrorBoundary from './components/error/ErrorBoundary';
import ExpenseForm from './components/ExpenseForm';
import Transaction from './components/transaction/Transaction';
import expenseTrackerLogo from "./assets/expense-tracker.png";
import './index.css';

const App = () => {

  return (
    <ErrorBoundary>
      <div >
        <header>

        <img src={expenseTrackerLogo} alt="expense-tracker" />
        <h1 className="heading">My Budget Tracker</h1>
        </header>
        <BalanceBox />
        <ExpenseForm />
        <Transaction />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme = 'colored'
        />
      </div>  
    </ErrorBoundary>
  );
}

export default App;
