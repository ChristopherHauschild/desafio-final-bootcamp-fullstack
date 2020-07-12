import React from "react";
import styled from "styled-components";

import Add from "./Add";
import Filter from "./Filter";

const AddAndFilter = (props) => {
  const { toggleModal } = props;

  return (
    <AddAndFilterContainer>
      <Add onNewLaunch={toggleModal} />
      <Filter />
    </AddAndFilterContainer>
  );
};

const AddAndFilterContainer = styled.div`
  display: flex;
  align-items: center;

  margin-top: 30px;
`;

export default AddAndFilter;
