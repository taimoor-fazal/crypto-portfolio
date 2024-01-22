import React from "react";
import { TransactionsViewProps } from "./App";
import { tableCellStyle, tableRowStyle, tableStyle } from "./common-styles";

export const TransactionsTable = ({ transactions }: TransactionsViewProps) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2 style={{ textAlign: "center" }}>All Transactions</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableCellStyle}>Date</th>
            <th style={tableCellStyle}>Coin Name</th>
            <th style={tableCellStyle}>Type</th>
            <th style={tableCellStyle}>Quantity</th>
            <th style={tableCellStyle}>Price Per Coin</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} style={tableRowStyle}>
              <td style={tableCellStyle}>{transaction.date ?? ""}</td>
              <td style={tableCellStyle}>{transaction.coinName}</td>
              <td style={tableCellStyle}>{transaction.transactionType}</td>
              <td style={tableCellStyle}>{transaction.quantity}</td>
              <td style={tableCellStyle}>{transaction.pricePerCoin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
