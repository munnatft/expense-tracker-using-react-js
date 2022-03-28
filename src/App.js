import { ToastContainer } from 'react-toastify';
import BalanceBox from './components/Balance/BalanceBox';
import ErrorBoundary from './components/error/ErrorBoundary';
import ExpenseForm from './components/ExpenseForm';
import Transaction from './components/transaction/Transaction';
import './index.css';

const App = () => {

  return (
    <ErrorBoundary >
      <h1 className="heading">My Budget Tracker</h1>
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
    </ErrorBoundary>
  );
}

export default App;
