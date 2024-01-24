import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Cart from "../UI/Cart";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [id,setId] = useState(props.id);

  const DeleteHandler = () => {
    console.log(id);
    props.deleteExpense(id);
  };

  return (
    <li>
      <Cart className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">$ {props.amount}</div>
        </div>
        <button className="expense-item__btn" onClick={DeleteHandler}>
          Delete
        </button>
      </Cart>
    </li>
  );
}

export default ExpenseItem;
