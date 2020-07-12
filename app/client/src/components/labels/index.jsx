import React from "react";
import styled from "styled-components";

const Labels = ({ transactions }) => {
  const expenses = transactions
    .filter((t) => t.type === "-")
    .map((t) => t.value)
    .reduce(function (acc, curr) {
      return acc + curr;
    }, 0);

  const revenue = transactions
    .filter((t) => t.type === "+")
    .map((t) => t.value)
    .reduce(function (acc, curr) {
      return acc + curr;
    }, 0);

  return (
    <LabelsContainer>
      <span>
        Lançamentos: <LabelData>{transactions.length}</LabelData>
      </span>
      <span>
        Receitas: <LabelData>{revenue}</LabelData>
      </span>
      <span>
        Despesas: <LabelData>{expenses}</LabelData>
      </span>
      <span>
        Saldo: <LabelData>{revenue - expenses}</LabelData>
      </span>
    </LabelsContainer>
  );
};

const LabelsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 40px;
  font-size: 1.1rem;
  padding-bottom: 14px;
  border-bottom: 1px solid #0002;
`;

const LabelData = styled.span`
  color: #008;
`;

export default Labels;
