import React from "react";
import { TransactionsTable } from "./TransactionsTable";
import { TransactionsViewProps } from "./App";
import { Link } from "react-router-dom";
export const TransactionsView = ({ transactions }: TransactionsViewProps) => {
  return (
    <div>
      <TransactionsTable transactions={transactions} />
      <Link to="/">Back to Summary</Link>
    </div>
  );
};
