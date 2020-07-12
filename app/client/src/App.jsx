import React, { useState, useEffect } from "react";
import styled from "styled-components";

import * as api from "./api/apiService";

import Main from "./components/main";

const App = () => {
  const [allTransactions, setAllTransactions] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      const transactions = await api.getAll();
      const transactionPeriod = await api.getByDescription(
        "Compras em padaria"
      );
      const transactionPP = await api.getByYearMonth("2019-01");
      console.log(transactionPeriod);
      console.log(transactionPP);
      setAllTransactions(transactions);
    };

    getTransactions();
  }, []);

  return (
    <Container>
      <Title>Bootcamp Full Stack - Desafio Final</Title>
      <Subtitle>Controle Financeiro Pessoal</Subtitle>

      <Main allTransactions={allTransactions} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  margin: 0px 300px;
  width: auto;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

const Subtitle = styled.h2`
  margin-top: 15px;
  font-size: 1.5rem;
  color: #0008;
  text-align: center;
`;

export default App;
