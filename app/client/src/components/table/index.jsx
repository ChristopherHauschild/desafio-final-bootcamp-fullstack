import React from "react";
import styled from "styled-components";

import Card from "./Card";

const Table = (props) => {
  const { toggleModal, filteredTransactions } = props;
  const handleButtonClick = (type, id) => {
    toggleModal(type, id);
  };
  return (
    <TableContainer>
      {filteredTransactions.map((transaction) => {
        return (
          <Card
            key={transaction._id}
            id={transaction._id}
            day={transaction.day}
            type={transaction.type}
            onClickButton={handleButtonClick}
            description={transaction.description}
            category={transaction.category}
            value={transaction.value}
          />
        );
      })}
    </TableContainer>
  );
};

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 40px;
`;

export default Table;
