import React from "react";
import styled from "styled-components";

const Button = ({ icon }) => {
  return (
    <ButtonPeriod className="waves-effect waves-light btn">Salvar</ButtonPeriod>
  );
};

const ButtonPeriod = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 140px;
  margin-top: 5px;
  margin-bottom: 30px;
  padding: 17px 30px;
  text-align: center;

  z-index: 0;
`;

export default Button;
