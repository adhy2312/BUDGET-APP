import { useState } from 'react';

function ExpenseForm({ addExpense }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('general');
  
  const categories = [
    'general',
    'groceries',
    'housing',
    'transportation',
    'utilities',
    'entertainment',
    'healthcare',
    'education',
    'personal'
  ];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const amountFloat = parseFloat(amount);
    
    if (name.trim() && !isNaN(amountFloat) && amountFloat > 0) {
      addExpense({
        name: name.trim(),
        amount: amountFloat,
        category,
        date: new Date().toISOString()
      });
      
      // Reset form
      setName('');
      setAmount('');
      setCategory('general');
    }
  };
  
  return (
    <div className="expense-form">
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="form-control">
          <label htmlFor="amount">Amount ($)</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="0.01"
            step="0.01"
            required
          />
        </div>
        
        <div className="form-control">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
            ))}
          </select>
        </div>
        
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;