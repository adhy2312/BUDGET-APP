import { useState, useEffect } from 'react';
import './App.css';
import BudgetForm from './components/BudgetForm';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import BudgetSummary from './components/BudgetSummary';

function App() {
  const [budget, setBudget] = useState(() => {
    const savedBudget = localStorage.getItem('budget');
    return savedBudget ? parseFloat(savedBudget) : 0;
  });
  
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });
  
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [remainingBudget, setRemainingBudget] = useState(0);
  
  useEffect(() => {
    
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    setTotalExpenses(total);
    
    // Calculate remaining budget
    setRemainingBudget(budget - total);
    
    // Save to localStorage
    localStorage.setItem('budget', budget);
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses, budget]);
  
  const addExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
  };
  
  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };
  
  return (
    <div className="App">
      <header>
        <h1>Budget Management App</h1>
      </header>
      
      <main>
        <div className="budget-container">
          <BudgetForm budget={budget} setBudget={setBudget} />
          <BudgetSummary budget={budget} totalExpenses={totalExpenses} remainingBudget={remainingBudget} />
        </div>
        
        <div className="expense-container">
          <ExpenseForm addExpense={addExpense} />
          <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
        </div>
      </main>
      
     
    </div>
  );
}

export default App;