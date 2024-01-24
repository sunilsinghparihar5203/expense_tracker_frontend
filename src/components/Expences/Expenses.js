import React, { useState } from "react";
import "./Expenses.css";
import Cart from "../UI/Cart";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpensesFilter.css";
import ExpensesList from "./ExpensesList";
import ExpencesChart from "./ExpencesChart";

function Expense(props) {
  const [filterYear, setFilterYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };


  const FilteredExpenses = props.expenses.filter(
    (expense) => new Date(expense.date).getFullYear() === +filterYear
  );

  return (
    <Cart className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpencesChart expenses={FilteredExpenses} />
      <ExpensesList ExpenseItems={FilteredExpenses} deleteExpense={props.deleteExpense}/>
    </Cart>
  );
}

export default Expense;
