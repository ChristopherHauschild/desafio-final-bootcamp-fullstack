import React, { useState, useEffect } from "react";
import styled from "styled-components";

import * as api from "../../api/apiService";

import Select from "../select";
import Labels from "../labels";
import AddAndFilter from "../add-and-filter";
import Table from "../table";

import Modal from "../modal";

const Main = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allTransactions, setAllTransactions] = useState([]);
  const [typeAction, setTypeAction] = useState("");
  const [idAction, setIdAction] = useState("");
  const [period, setPeriod] = useState("2019-01");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getTransactions = async () => {
      const transactions = await api.getAll();

      const filteredTransactions = transactions.filter(
        (t) => t.yearMonth === period && t.description.includes(description)
      );

      setAllTransactions(filteredTransactions);
    };

    getTransactions();
  }, [description, period]);

  const handleChangePeriod = (newValue) => {
    setPeriod(newValue);
  };

  const handleChangeDescription = (newValue) => {
    setDescription(newValue);
  };

  const handleModalOpen = (type, id) => {
    setIdAction(id);

    setTypeAction(type);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ContainerMain>
      <Select changePeriod={handleChangePeriod} />
      <Labels transactions={allTransactions} />
      <AddAndFilter
        description={description}
        changeDescription={handleChangeDescription}
        toggleModal={handleModalOpen}
      />
      <Table
        filteredTransactions={allTransactions}
        toggleModal={handleModalOpen}
      />

      {isModalOpen && (
        <Modal
          transactions={allTransactions}
          type={typeAction}
          id={idAction}
          handleModalClose={handleModalClose}
        />
      )}
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
