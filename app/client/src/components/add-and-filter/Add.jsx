import React from "react";
import styled from "styled-components";

const Add = (props) => {
  const { onNewLaunch } = props;

  const handleButtonClick = (type) => {
    onNewLaunch(type);
  };

  return (
    <AddButton
      onClick={() => handleButtonClick("add")}
      className="waves-effect waves-light btn"
    >
      <i className="material-icons left">add</i> Novo Lançamento
    </AddButton>
  );
};

const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 22px 10px;
  font-weight: semi-bold;

  background: #20232a;
  border-radius: 3px;
  z-index: 0;

  &:hover {
    background: black;
  }
`;

export default Add;
