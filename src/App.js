import React, { useEffect, useState } from "react";
import Expenses from "./components/Expences/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import axios from "axios";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isDataChange, setIsDataChange] = useState(true);

  useEffect(() => {
    const response = axios.get("http://localhost:3001/expenses");
    response
      .then((result) => {
        setExpenses(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isDataChange]);

  const addExpense = (newValues) => {
    const response = axios.post("http://localhost:3001/expense", {
      ...newValues,
    });
    response
      .then((data) => {
        console.log("Saved");
        setIsDataChange((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteExpense = (Id) => {
    const response = axios.delete(`http://localhost:3001/expense/${Id}`);
    response
      .then((data) => {
        console.log("deleted");
        setIsDataChange((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <NewExpense addExpense={addExpense} />
      <Expenses expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
