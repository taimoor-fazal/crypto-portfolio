// App.tsx
import React, { useState } from "react";
import TransactionForm from "./TransactionForm";
import { containerStyle, headingStyle } from "./common-styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { TransactionsView } from "./TransactionView";

export type TransactionType = {
  coinName: string;
  transactionType: "Buy" | "Sell";
  quantity: number;
  pricePerCoin: number;
  date: string;
};

export type TransactionsViewProps = {
  transactions: TransactionType[];
};

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

function calculatePortfolioAttributes(
  transactions: TransactionType[]
): Record<string, CoinData> {
  const coinPortfolio: Record<string, CoinData> = {};

  transactions.forEach((transaction) => {
    const { coinName, transactionType, quantity, pricePerCoin } = transaction;

    if (!coinPortfolio[coinName]) {
      coinPortfolio[coinName] = {
        totalQuantity: 0,
        cumulativeBuyCost: 0,
        cumulativeSellCost: 0,
        averageBuyCost: 0,
        averageSellCost: 0,
        totalQuantityOwned: 0,
        cumulativeCost: 0,
        averageCostPerCoin: 0,
        currentValue: 0,
        profitLoss: 0,
      };
    }

    const coinData = coinPortfolio[coinName];

    if (transactionType === "Buy") {
      const newTotalQuantity = coinData.totalQuantity + quantity;
      coinData.cumulativeBuyCost += quantity * pricePerCoin;
      coinData.averageBuyCost = coinData.cumulativeBuyCost / newTotalQuantity;
      coinData.totalQuantity = newTotalQuantity;
    } else if (transactionType === "Sell") {
      const sellableQuantity = Math.min(quantity, coinData.totalQuantity);
      coinData.cumulativeSellCost += sellableQuantity * pricePerCoin;
      coinData.averageSellCost =
        sellableQuantity > 0
          ? coinData.cumulativeSellCost / sellableQuantity
          : 0;
      coinData.totalQuantity -= sellableQuantity;
    }

    coinData.totalQuantityOwned = coinData.totalQuantity;
    coinData.cumulativeCost =
      coinData.cumulativeBuyCost - coinData.cumulativeSellCost;
    coinData.currentValue = coinData.totalQuantityOwned * pricePerCoin;
    coinData.profitLoss = coinData.currentValue - coinData.cumulativeCost;
  });

  return coinPortfolio;
}

function App() {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  const addTransaction = (transaction: TransactionType) => {
    setTransactions([...transactions, transaction]);
  };

  const coinPortfolio = calculatePortfolioAttributes(transactions);

  return (
    <Router>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Crypto Portfolio Manager</h1>
        <TransactionForm onAddTransaction={addTransaction} />

        <Routes>
          <Route
            path="/"
            element={<HomePage coinPortfolio={coinPortfolio} />}
          />
          <Route
            path="/transactions"
            element={<TransactionsView transactions={transactions} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
