function BudgetSummary({ budget, totalExpenses, remainingBudget }) {
    // Calculate percentage spent
    const percentageSpent = budget > 0 ? (totalExpenses / budget) * 100 : 0;
    
    // Determine status class
    const getStatusClass = () => {
      if (percentageSpent >= 100) return 'danger';
      if (percentageSpent >= 75) return 'warning';
      return 'good';
    };
    
    return (
      <div className="budget-summary">
        <h2>Budget Summary</h2>
        
        <div className="summary-cards">
          <div className="summary-card total-budget">
            <h3>Total Budget</h3>
            <p className="amount">${budget.toFixed(2)}</p>
          </div>
          
          <div className="summary-card expenses">
            <h3>Total Expenses</h3>
            <p className="amount">${totalExpenses.toFixed(2)}</p>
          </div>
          
          <div className={`summary-card remaining ${getStatusClass()}`}>
            <h3>Remaining</h3>
            <p className="amount">${remainingBudget.toFixed(2)}</p>
          </div>
        </div>
        
        <div className="progress-container">
          <div className="progress-label">
            <span>Budget Used</span>
            <span>{percentageSpent.toFixed(1)}%</span>
          </div>
          <div className="progress-bar">
            <div 
              className={`progress ${getStatusClass()}`}
              style={{ width: `${Math.min(percentageSpent, 100)}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
  
  export default BudgetSummary;