// PortfolioDisplay.tsx
import React from "react";
import {
  headingStyle,
  tableCellStyle,
  tableContainerStyle,
  tableHeaderStyle,
  tableRowStyle,
  tableStyle,
} from "./common-styles";
import { formatNumber } from "./App";

interface PortfolioDisplayProps {
  coinPortfolio: Record<string, CoinData>;
}

interface CoinData {
  totalQuantity: number;
  cumulativeBuyCost: number;
  cumulativeSellCost: number;
  averageBuyCost: number;
  averageSellCost: number;
  totalQuantityOwned: number;
  cumulativeCost: number;
  averageCostPerCoin: number;
  currentValue: number;
  profitLoss: number;
}

const PortfolioDisplay: React.FC<PortfolioDisplayProps> = ({
  coinPortfolio,
}) => {
  return (
    <div style={tableContainerStyle}>
      <h2
        style={{
          ...headingStyle,
          background: "#007bff",
          color: "#fff",
          padding: "10px 15px",
        }}
      >
        Portfolio Summary
      </h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Coin Name</th>
            <th style={tableHeaderStyle}>Total Quantity Owned</th>
            <th style={tableHeaderStyle}>Average Buying Price</th>
            <th style={tableHeaderStyle}>Total Cost of Buying</th>
            <th style={tableHeaderStyle}>Average Selling Price</th>
            <th style={tableHeaderStyle}>Total Cost of Selling</th>
            <th style={tableHeaderStyle}>Profit/Loss</th>
            <th style={tableHeaderStyle}>Total Worth at Last Transaction</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(coinPortfolio).map(([coinName, coinData]) => (
            <tr key={coinName} style={tableRowStyle}>
              <td style={tableCellStyle}>{coinName}</td>
              <td style={tableCellStyle}>{coinData.totalQuantityOwned}</td>
              <td style={tableCellStyle}>
                {formatNumber(coinData.averageBuyCost)}
              </td>
              <td style={tableCellStyle}>
                {formatNumber(coinData.cumulativeBuyCost)}
              </td>
              <td style={tableCellStyle}>
                {formatNumber(coinData.averageSellCost)}
              </td>
              <td style={tableCellStyle}>
                {formatNumber(coinData.cumulativeSellCost)}
              </td>
              <td style={tableCellStyle}>
                {formatNumber(coinData.profitLoss)}
              </td>
              <td style={tableCellStyle}>
                {formatNumber(coinData.currentValue)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioDisplay;
