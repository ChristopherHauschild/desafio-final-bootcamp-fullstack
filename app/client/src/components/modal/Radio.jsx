import React, { useState } from "react";
import styled from "styled-components";

const Radios = (props) => {
  const { type, block, setTypeRadio } = props;

  const expenses = type.toString() === "-" ? true : false;
  const revenue = type.toString() === "+" ? true : false;

  const [isExpensesChecked, setIsExpensesChecked] = useState(expenses);
  const [isRevenueChecked, setIsRevenueChecked] = useState(revenue);

  const handleChange = (event) => {
    if (event.target.id === "expenses") {
      setTypeRadio("-");
      setIsExpensesChecked(true);
      setIsRevenueChecked(false);
    }
    if (event.target.id === "revenue") {
      setTypeRadio("+");
      setIsExpensesChecked(false);
      setIsRevenueChecked(true);
    }
  };

  return (
    <ContainerRadio>
      <Label>
        <input
          id="expenses"
          checked={isExpensesChecked}
          onChange={handleChange}
          disabled={block}
          name="type"
          type="radio"
        />
        <span style={{ fontSize: "1.5rem", color: "#8B0000" }}>Despesa</span>
      </Label>
      <Label>
        <input
          onChange={handleChange}
          disabled={block}
          checked={isRevenueChecked}
          name="type"
          id="revenue"
          type="radio"
        />
        <span style={{ fontSize: "1.5rem", color: "green" }}>Receita</span>
      </Label>
    </ContainerRadio>
  );
};

const ContainerRadio = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  margin-bottom: 40px;
`;

const Label = styled.label`
  margin: 0px 40px;
  align-items: center;
`;

export default Radios;
