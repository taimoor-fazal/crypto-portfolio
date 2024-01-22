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
                {coinData.averageBuyCost.toFixed(2)}
              </td>
              <td style={tableCellStyle}>
                {coinData.cumulativeBuyCost.toFixed(2)}
              </td>
              <td style={tableCellStyle}>
                {coinData.averageSellCost.toFixed(2)}
              </td>
              <td style={tableCellStyle}>
                {coinData.cumulativeSellCost.toFixed(2)}
              </td>
              <td style={tableCellStyle}>{coinData.profitLoss.toFixed(2)}</td>
              <td style={tableCellStyle}>{coinData.currentValue.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioDisplay;
