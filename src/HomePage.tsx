import React from "react";
import PortfolioDisplay from "./PortfolioDisplay";
import { Link } from "react-router-dom";

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
      <PortfolioDisplay coinPortfolio={coinPortfolio} />
      <div>
        <p>Total Money Spent: {totalSpent.toFixed(2)}</p>
        <p>Total Money Earned: {totalEarned.toFixed(2)}</p>
        <p>Total Profit: {totalProfit.toFixed(2)}</p>
      </div>
      <Link to="/transactions">View All Transactions</Link>
    </div>
  );
};
