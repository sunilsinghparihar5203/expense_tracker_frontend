import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.ExpenseItems.length === 0) {
    return <h2 className="expenses-list__fallback">Found No expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.ExpenseItems.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            id={item.id}
            deleteExpense={props.deleteExpense}
          />
        );
      })}
    </ul>
  );
}

export default ExpensesList;
