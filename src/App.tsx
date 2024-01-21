// App.tsx
import React, { useState } from 'react';
import TransactionForm from './TransactionForm';
import PortfolioDisplay from './PortfolioDisplay';

export type TransactionType = {
  coinName: string;
  transactionType: 'Buy' | 'Sell';
  quantity: number;
  pricePerCoin: number;
  date: string;
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

function calculatePortfolioAttributes(transactions: TransactionType[]): Record<string, CoinData> {
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

    if (transactionType === 'Buy') {
      coinData.totalQuantity += quantity;
      coinData.cumulativeBuyCost += quantity * pricePerCoin;
      coinData.averageBuyCost = coinData.totalQuantity === 0 ? 0 : coinData.cumulativeBuyCost / coinData.totalQuantity;
    } else if (transactionType === 'Sell') {
      const sellQuantity = Math.min(quantity, coinData.totalQuantity);
      coinData.cumulativeSellCost += sellQuantity * pricePerCoin;
      coinData.totalQuantity -= sellQuantity;

      // Calculate the average selling price based on the sold quantity
      coinData.averageSellCost =
        coinData.totalQuantityOwned === 0 ? 0 : coinData.cumulativeSellCost / coinData.totalQuantityOwned;
    }

    coinData.totalQuantityOwned = coinData.totalQuantity;
    coinData.cumulativeCost = coinData.cumulativeBuyCost - coinData.cumulativeSellCost;
    coinData.averageCostPerCoin = coinData.totalQuantityOwned === 0 ? 0 : coinData.cumulativeCost / coinData.totalQuantityOwned;
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
    <div>
      <h1>Crypto Portfolio Manager</h1>
      <TransactionForm onAddTransaction={addTransaction} />
      <PortfolioDisplay coinPortfolio={coinPortfolio} />
    </div>
  );
}

export default App;
