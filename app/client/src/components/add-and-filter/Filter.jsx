import React from "react";
import styled from "styled-components";

const Filter = () => {
  return (
    <FilterContainer>
      <label>Busque seus lançamentos</label>
      <Input type="text" placeholder="Filtrar..." />
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  flex: 1;
  margin-left: 20px;
`;

const Input = styled.input`
  padding: 3px;
`;

export default Filter;
