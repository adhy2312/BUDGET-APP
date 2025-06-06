import { useState } from 'react';

function BudgetForm({ budget, setBudget }) {
  const [budgetInput, setBudgetInput] = useState(budget.toString());
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBudget = parseFloat(budgetInput);
    if (!isNaN(newBudget) && newBudget >= 0) {
      setBudget(newBudget);
    }
  };
  
  return (
    <div className="budget-form">
      <h2>Set Your Budget</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="budget">Budget Amount ($)</label>
          <input
            type="number"
            id="budget"
            value={budgetInput}
            onChange={(e) => setBudgetInput(e.target.value)}
            min="0"
            step="0.01"
            required
          />
        </div>
        <button type="submit">Set Budget</button>
      </form>
    </div>
  );
}

export default BudgetForm;