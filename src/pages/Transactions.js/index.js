import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { getAllPayments } from "../../api/payment";
import FiltersCard from "./components/filtersCard/FiltersCard";
import TransactionsTable from "./components/TransactionsTable";

const TransactionsContainer = styled.div`
  background: #f5f5f5;
  overflow: hidden;
  height: 100vh;
  margin: auto;
  display: flex;
  padding: 1rem 0.3rem;
  flex-direction: column;
  align-items: center;
`;

// const FilterContainer = styled.div`
//   width: 95%;
//   height: auto;
//   display: flex;
//   margin-bottom: 2rem;
//   justify-content: end;
//   @media (max-width: 768px) {
//     margin-bottom: 1rem;
//   }
//   @media (min-width: 1400px) {
//     width: 1200px;
//   }
// `;

const TopWrapper = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-bottom: 2rem;
  justify-content: center;
  & > h1 {
    align-self: start;
    padding: 0;
    margin: 0;
    margin-bottom: 2rem;
  }
  @media (max-width: 1024px) {
    align-items: center;
    margin-bottom: 0.1rem;
    & > h1 {
      margin-bottom: 1rem;
    }
  }
  @media (min-width: 1400px) {
    width: 1200px;
  }
`;

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPayments = async () => {
    const { data: transactions } = await getAllPayments();
    setTransactions(transactions);
    setIsLoading(false);
  };

  useEffect(() => {
    getPayments();
  }, []);

  return (
    <TransactionsContainer>
      <TopWrapper>
        <h1>Transactions</h1>
        <FiltersCard
          setTransactions={setTransactions}
          setIsLoading={setIsLoading}
        />
      </TopWrapper>
      {!isLoading ? (
        <TransactionsTable transactions={transactions} />
      ) : (
        <div>Loading...</div>
      )}
    </TransactionsContainer>
  );
}

export default Transactions;
