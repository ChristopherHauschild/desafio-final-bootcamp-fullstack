import React, { useState } from "react";
import styled from "styled-components";

import Select from "../select";
import Labels from "../labels";
import AddAndFilter from "../add-and-filter";
import Table from "../table";

import Modal from "../modal";

const Main = ({ allTransactions }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ContainerMain>
      <Select />
      <Labels />
      <AddAndFilter toggleModal={handleModalOpen} />
      <Table allTransactions={allTransactions} toggleModal={handleModalOpen} />

      {isModalOpen && <Modal handleModalClose={handleModalClose} />}
    </ContainerMain>
  );
};

const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
  width: 100%;
`;

export default Main;
