import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { icon, setModalClose } = props;

  return (
    <ButtonPeriod
      onClick={setModalClose}
      className="waves-effect waves-light btn"
    >
      <i className="material-icons center">{icon}</i>
    </ButtonPeriod>
  );
};

const ButtonPeriod = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 17px 10px;
  text-align: center;

  background: red;
  z-index: 0;

  &:hover {
    background: #961e1a;
  }
`;

export default Button;
