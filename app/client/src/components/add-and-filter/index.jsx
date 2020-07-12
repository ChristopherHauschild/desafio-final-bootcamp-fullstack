import React from "react";
import styled from "styled-components";

import Add from "./Add";
import Filter from "./Filter";

const AddAndFilter = (props) => {
  const { toggleModal, changeDescription, description } = props;

  const handleButtonClick = (type) => {
    toggleModal(type);
  };

  return (
    <AddAndFilterContainer>
      <Add onNewLaunch={handleButtonClick} />
      <Filter description={description} changeDescription={changeDescription} />
    </AddAndFilterContainer>
  );
};

const AddAndFilterContainer = styled.div`
  display: flex;
  align-items: center;

  margin-top: 30px;
`;

export default AddAndFilter;
