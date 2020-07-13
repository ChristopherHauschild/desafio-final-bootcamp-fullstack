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

  const balance = revenue - expenses;
  return (
    <LabelsContainer>
      <span>
        Lançamentos: <LabelData>{transactions.length}</LabelData>
      </span>
      <span>
        Receitas:{" "}
        <LabelData style={{ color: "#1f1c57" }}>
          {revenue.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </LabelData>
      </span>
      <span>
        Despesas:{" "}
        <LabelData style={{ color: "#961209" }}>
          {expenses.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </LabelData>
      </span>
      <span>
        Saldo:{" "}
        <LabelData
          style={{
            color: `${
              balance < 0 ? "#961209" : balance === 0 ? "black" : "#1f1c57"
            }`,
          }}
        >
          {(revenue - expenses).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </LabelData>
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

const LabelData = styled.span``;

export default Labels;
