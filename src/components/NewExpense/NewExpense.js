import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (eneteredExpenseData) => {
    const expensedata = {
      ...eneteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expensedata);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
