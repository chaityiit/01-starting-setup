import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (eneteredExpenseData) => {
    setIsEditing(false);
    const expensedata = {
      ...eneteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expensedata);
  };

  const addNewExpenseHandler = () => {
    setIsEditing(true);
  };
  const stopNewExpenseHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopNewExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
