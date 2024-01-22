// TransactionForm.tsx
import React, { ChangeEvent, useState } from "react";
import { TransactionType } from "./App";
import {
  buttonStyle,
  formStyle,
  inputStyle,
  labelStyle,
} from "./common-styles";

type TransactionFormProps = {
  onAddTransaction: (transaction: TransactionType) => void;
};

const TransactionForm: React.FC<TransactionFormProps> = ({
  onAddTransaction,
}: TransactionFormProps) => {
  const [formData, setFormData] = useState<TransactionType>({
    coinName: "",
    transactionType: "Buy",
    quantity: 0,
    pricePerCoin: 0,
    date: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        name === "quantity" || name === "pricePerCoin"
          ? parseFloat(value)
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTransaction({ ...formData });
    setFormData({
      coinName: "",
      transactionType: "Buy",
      quantity: 0,
      pricePerCoin: 0,
      date: "",
    });
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <label style={labelStyle}>
        Coin Name:
        <input
          style={inputStyle}
          type="text"
          name="coinName"
          value={formData.coinName}
          onChange={handleInputChange}
        />
      </label>
      <label style={labelStyle}>
        Transaction Type:
        <select
          style={inputStyle}
          name="transactionType"
          value={formData.transactionType}
          onChange={handleInputChange}
        >
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
        </select>
      </label>
      <label style={labelStyle}>
        Quantity:
        <input
          style={inputStyle}
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleInputChange}
        />
      </label>
      <label style={labelStyle}>
        Price Per Coin:
        <input
          style={inputStyle}
          type="number"
          name="pricePerCoin"
          value={formData.pricePerCoin}
          onChange={handleInputChange}
        />
      </label>
      <label style={labelStyle}>
        Date:
        <input
          style={inputStyle}
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        />
      </label>
      <button style={buttonStyle} type="submit">
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
