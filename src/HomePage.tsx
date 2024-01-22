import React from "react";
import PortfolioDisplay from "./PortfolioDisplay";
import { Link } from "react-router-dom";
import {
  summaryContainerStyle,
  summaryItemStyle,
  summaryValueStyle,
} from "./common-styles";

type CoinData = {
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
};

type HomePageProps = {
  coinPortfolio: Record<string, CoinData>;
};

export const HomePage = ({ coinPortfolio }: HomePageProps) => {
  let totalSpent = 0;
  let totalEarned = 0;
  let totalProfit = 0;

  Object.values(coinPortfolio).forEach((coin) => {
    totalSpent += coin.cumulativeBuyCost;
    totalEarned += coin.cumulativeSellCost;
    totalProfit +=
      (coin.averageSellCost - coin.averageBuyCost) * coin.totalQuantity;
  });

  return (
    <div>
      <div style={summaryContainerStyle}>
        <div style={summaryItemStyle}>
          Total Money Spent:{" "}
          <span style={summaryValueStyle}>{totalSpent.toFixed(2)}</span>
        </div>
        <div style={summaryItemStyle}>
          Total Money Earned:{" "}
          <span style={summaryValueStyle}>{totalEarned.toFixed(2)}</span>
        </div>
        <div style={summaryItemStyle}>
          Total Profit:{" "}
          <span style={summaryValueStyle}>{totalProfit.toFixed(2)}</span>
        </div>
      </div>
      <PortfolioDisplay coinPortfolio={coinPortfolio} />

      <Link to="/transactions">View All Transactions</Link>
    </div>
  );
};
