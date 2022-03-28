import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import { ExpenseProvider } from './Store/ExpenseProvider';
import { ExpenseReducer } from './Store/reducer';
import 'react-toastify/dist/ReactToastify.css';

const rootReducer = combineReducers({
  expense : ExpenseReducer
})

const store = createStore(rootReducer , applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ExpenseProvider>
        <App />
      </ExpenseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
