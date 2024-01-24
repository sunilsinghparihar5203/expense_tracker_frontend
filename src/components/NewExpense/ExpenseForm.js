import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTilte, setEnteredTilte] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(0.01);
  const [enteredDate, setEnteredDate] = useState();

  const [isFormVisible, setIsFormVisible] = useState(false);

  // const [userInput, setUserInput] = useState({
  //   enteredTilte: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const TitleChangeHandler = (e) => {
    setEnteredTilte(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTilte: e.target.value,
    // });
    // setUserInput((prevState) => {
    //   return {...prevState,enteredTilte: e.target.value}
    // })
  };
  const AmountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // });
    // setUserInput((prevState) => {
    //   return {...prevState,enteredAmount: e.target.value}
    // })
  };
  const DateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // });
    // setUserInput((prevState) => {
    //   return {...prevState,enteredDate: e.target.value}
    // })
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTilte,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.addExpense(expenseData);
    console.log(expenseData);
    setEnteredTilte("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const fromToggler =() =>{
    setIsFormVisible(prev => !prev)
  }

  return (
    <form onSubmit={submitHandler}>
      {isFormVisible && (
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={TitleChangeHandler}
              value={enteredTilte}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="text"
              min="0.01"
              step="0.01"
              onChange={AmountChangeHandler}
              value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="Date"
              min="2020-01-01"
              max="2028-01-01"
              onChange={DateChangeHandler}
              value={enteredDate}
            />
          </div>
        </div>
      )}
      <div className="new-expense__actions">
        <button type="submit" onClick={fromToggler}>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
