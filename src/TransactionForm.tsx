// TransactionForm.tsx
import React, { ChangeEvent, useState } from 'react';
import { TransactionType } from './App';

interface TransactionFormProps {
  onAddTransaction: (transaction: TransactionType) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onAddTransaction }) => {
  const [formData, setFormData] = useState<TransactionType>({
    coinName: '',
    transactionType: 'Buy',
    quantity: 0,
    pricePerCoin: 0,
    date: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'quantity' || name === 'pricePerCoin' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTransaction({ ...formData });
    setFormData({
      coinName: '',
      transactionType: 'Buy',
      quantity: 0,
      pricePerCoin: 0,
      date: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Coin Name:
        <input type="text" name="coinName" value={formData.coinName} onChange={handleInputChange} />
      </label>
      <label>
        Transaction Type:
        <select name="transactionType" value={formData.transactionType} onChange={handleInputChange}>
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
        </select>
      </label>
      <label>
        Quantity:
        <input type="number" name="quantity" value={formData.quantity} onChange={handleInputChange} />
      </label>
      <label>
        Price Per Coin:
        <input type="number" name="pricePerCoin" value={formData.pricePerCoin} onChange={handleInputChange} />
      </label>
      <label>
        Date:
        <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
      </label>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
