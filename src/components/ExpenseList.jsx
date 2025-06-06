function ExpenseList({ expenses, deleteExpense }) {
    // Format date function
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }).format(date);
    };
    
    // Get category icon
    const getCategoryIcon = (category) => {
      switch (category) {
        case 'groceries': return '🛒';
        case 'housing': return '🏠';
        case 'transportation': return '🚗';
        case 'utilities': return '💡';
        case 'entertainment': return '🎬';
        case 'healthcare': return '🏥';
        case 'education': return '📚';
        case 'personal': return '👤';
        default: return '💰';
      }
    };
    
    if (expenses.length === 0) {
      return (
        <div className="expense-list empty">
          <h2>Your Expenses</h2>
          <p>No expenses added yet. Add your first expense above!</p>
        </div>
      );
    }
    
    return (
      <div className="expense-list">
        <h2>Your Expenses</h2>
        <ul>
          {expenses.map(expense => (
            <li key={expense.id} className={`expense-item ${expense.category}`}>
              <div className="expense-icon">{getCategoryIcon(expense.category)}</div>
              <div className="expense-details">
                <h3>{expense.name}</h3>
                <div className="expense-meta">
                  <span className="category">{expense.category}</span>
                  <span className="date">{formatDate(expense.date)}</span>
                </div>
              </div>
              <div className="expense-amount">${expense.amount.toFixed(2)}</div>
              <button 
                className="delete-btn" 
                onClick={() => deleteExpense(expense.id)}
                aria-label="Delete expense"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ExpenseList;