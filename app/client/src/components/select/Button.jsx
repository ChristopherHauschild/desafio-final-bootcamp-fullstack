import React from "react";
import styled from "styled-components";

const Button = ({ icon }) => {
  return (
    <ButtonPeriod className="waves-effect waves-light btn">
      <i className="material-icons center">{icon}</i>
    </ButtonPeriod>
  );
};

const ButtonPeriod = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0px 25px;
  padding: 22px 15px;
  text-align: center;

  background: #20232a;
  z-index: 0;

  &:hover {
    background: black;
  }
`;

export default Button;
