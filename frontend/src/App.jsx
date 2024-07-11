import React, { useState, useEffect } from 'react';
import { Form } from './components/form';
import { Transactionlist } from './components/transactionList';
import {TransactionChart} from './components/transactionChart';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchTransactions();
  }, []);
  
  const fetchTransactions = async () => {
    const response = await fetch("https://moneymonitor.onrender.com/tranasction");
    const data = await response.json();
    setTransactions(data);
    calculateTotal(data);
  };

  const calculateTotal = (transactions) => {
    const totalAmount = transactions.reduce((acc, curr) => acc + Number(curr.amount), 0);
    setTotal(totalAmount);
  };

  const handleAddTransaction = async (transaction) => {
    const response = await fetch("https://moneymonitor.onrender.com/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transaction),
    });

    if (response.ok) {
      fetchTransactions();
    }
  };

  return (
    <>
      <h1 className="heading">Rs. {total}</h1>
      <Form onAddTransaction={handleAddTransaction} />
      <TransactionChart transactions={transactions} />
      <Transactionlist transactions={transactions} />
    </>
  );
}

export default App;
