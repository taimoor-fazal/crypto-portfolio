// PortfolioDisplay.tsx
import React from 'react';

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

const PortfolioDisplay: React.FC<PortfolioDisplayProps> = ({ coinPortfolio }) => {
  return (
    <div>
      <h2>Portfolio Summary</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
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
              <td style={tableCellStyle}>{coinData.averageBuyCost.toFixed(2)}</td>
              <td style={tableCellStyle}>{coinData.cumulativeBuyCost.toFixed(2)}</td>
              <td style={tableCellStyle}>{coinData.averageSellCost.toFixed(2)}</td>
              <td style={tableCellStyle}>{coinData.cumulativeSellCost.toFixed(2)}</td>
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

// Styles
const tableHeaderStyle: React.CSSProperties = {
  background: '#f2f2f2',
  padding: '10px',
  border: '1px solid #ddd',
};

const tableRowStyle: React.CSSProperties = {
  border: '1px solid #ddd',
};

const tableCellStyle: React.CSSProperties = {
  padding: '10px',
  border: '1px solid #ddd',
};
