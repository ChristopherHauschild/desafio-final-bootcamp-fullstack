import React from "react";
import styled from "styled-components";

const Radios = () => {
  return (
    <ContainerRadio>
      <Label>
        <input name="type" type="radio" defaultChecked />
        <span style={{ fontSize: "1.5rem", color: "#8B0000" }}>Despesa</span>
      </Label>
      <Label>
        <input name="type" type="radio" />
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
