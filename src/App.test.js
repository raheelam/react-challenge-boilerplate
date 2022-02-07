import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import { testData } from "./testData";
import Transactions from "./pages/Transactions.js";
import TransactionsTable from "./pages/Transactions.js/components/TransactionsTable";
import PaymentDetail, { TransactionInfo } from "./pages/paymentDetail";
import DetailCard from "./pages/paymentDetail/components/DetailCard";

// test("renders Primer welcome", () => {
//   render(<App />);
//   const primerElement = screen.getByText(/Primer React Challenge Boilerplate/i);
//   expect(primerElement).toBeInTheDocument();
// });

test("renders transactions", () => {
  render(<Transactions />);
  const heading = screen.getByText(/transactions/i);
  expect(heading).toBeInTheDocument();
});

test("renders filter options", () => {
  const { container } = render(<Transactions />);
  const heading = screen.getByText(/transactions/i);
  const filterGroups = container.querySelectorAll(".form-group").length;
  expect(heading).toBeInTheDocument();
  expect(filterGroups).toBe(5);
});

test("renders table correctly with one transaction", () => {
  const { container } = render(
    <Router>
      <TransactionsTable transactions={testData} />
    </Router>
  );
  const rows = container.querySelectorAll("tr").length;
  const cols = container.querySelectorAll("td").length;
  expect(rows).toBe(1);
  expect(cols).toBe(7);
});

test("no transactions", () => {
  const { container } = render(
    <Router>
      <TransactionsTable transactions={[]} />
    </Router>
  );
  const rows = container.querySelectorAll("tr").length;
  const cols = container.querySelectorAll("td").length;
  const noTransactionsMessage = screen.getByText(/No transactions found./i);

  expect(rows).toBe(0);
  expect(cols).toBe(0);
  expect(noTransactionsMessage).toBeInTheDocument();
});

test("show transactions button in payment detail page", () => {
  render(
    <Router>
      <PaymentDetail />
    </Router>
  );
  const transactionsButton = screen.getByText(/transactions/i);
  expect(transactionsButton).toBeInTheDocument();
});

test("show payment detail", () => {
  const { container } = render(
    <Router>
      <DetailCard paymentDetail={testData[0]} />
    </Router>
  );
  const titles = container.querySelectorAll(".title").length;
  const currency = screen.getByText(/Currency/i);
  const processor = screen.getByText(/stripe/i);
  const amex = screen.getByText(/Amex/i);
  const dollar = screen.getByText(/USD/i);

  expect(currency).toBeInTheDocument();
  expect(dollar).toBeInTheDocument();
  expect(amex).toBeInTheDocument();
  expect(processor).toBeInTheDocument();
  expect(titles).toBe(5);
});

test("show card detail", () => {
  render(
    <Router>
      <TransactionInfo paymentDetail={testData[0]} />
    </Router>
  );

  const cardholderName = screen.getByText(/F. B. BAZ ESQ/i);
  const last4Digits = screen.getByText(/0005/i);
  const merchantId = screen.getByText(/acct_1GORcsGZqNWFwi8c/i);

  expect(cardholderName).toBeInTheDocument();
  expect(last4Digits).toBeInTheDocument();
  expect(merchantId).toBeInTheDocument();
});
