import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';


function App() {
  return (
    <div className="App">
      <Header/>
      <Balance/>
      <IncomeExpense/>
      <TransactionList/>
      <AddTransaction/>
    </div>
  );
}

export default App;
