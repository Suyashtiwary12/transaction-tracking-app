import React, { useState } from 'react';

export function Form({ onAddTransaction }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !date || !amount || !description) {
      setIsValid(false);
      return;
    }

    const transaction = { name, date, amount: parseFloat(amount), description };
    onAddTransaction(transaction);
    setName("");
    setDate("");
    setAmount("");
    setDescription("");
    setIsValid(true);
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <div className="container text-center">
        <div className="row align-items-start content">
          <div className="col-4">
            <input
              type="text"
              placeholder="Enter the Transaction"
              className={`form-control ${isValid ? '' : 'is-invalid'}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-4">
            <input
              type="number"
              placeholder="Enter the Amount with (+, -)"
              className={`form-control ${isValid ? '' : 'is-invalid'}`}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row align-items-start content">
          <div className="col-4">
            <input
              type="date"
              placeholder="Enter the Date"
              className={`form-control ${isValid ? '' : 'is-invalid'}`}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="col-4">
            <input
              type="text"
              placeholder="Enter the Description"
              className={`form-control ${isValid ? '' : 'is-invalid'}`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row align-items-start content">
          <div className="col d-grid col-8">
            <button className="btn btn-light" type="submit">Add new transaction</button>
          </div>
        </div>
      </div>
    </form>
  );
}
