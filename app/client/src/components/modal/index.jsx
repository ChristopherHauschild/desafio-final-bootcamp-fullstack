import React, { useState } from "react";
import styled from "styled-components";
import { useAlert } from "react-alert";

import Modal from "react-modal";
import ButtonClose from "./ButtonClose";
import Radios from "./Radio";

import * as api from "../../api/apiService";

import "./modal.css";

Modal.setAppElement("#root");

const ContainerModal = (props) => {
  const [typeRadio, setTypeRadio] = useState("");
  const alert = useAlert();

  const { handleModalClose, transactions, id, type, reload } = props;
  const transaction = transactions.filter((t) => t._id === id);

  const [description, setDescription] = useState(
    transaction.map((t) => t.description)
  );
  const [category, setCategory] = useState(transaction.map((t) => t.category));
  const [value, setValue] = useState(transaction.map((t) => t.value));
  const [date, setDate] = useState(transaction.map((t) => t.yearMonthDay));

  const setModalClose = () => {
    handleModalClose(true);
  };

  const block = type === "delete" ? true : false;
  const isActionDelete = type === "delete" ? true : false;

  const modalTitle =
    type === "add" ? "Inclusão" : type === "edit" ? "Alteração" : "Exclusão";

  const handleChange = (event) => {
    if (event.target.name === "description") {
      setDescription(event.target.value);
    }
    if (event.target.name === "category") {
      setCategory(event.target.value);
    }
    if (event.target.name === "value") {
      setValue(event.target.value);
    }
    if (event.target.name === "date") {
      setDate(event.target.value);
    }
  };

  const handleChangeType = (type) => {
    setTypeRadio(type);
  };

  const handleFormSubmit = async (event) => {
    const dateArr = date.toString().split("-");

    const yearMonth = `${dateArr[0]}-${dateArr[1]}`;
    const yearMonthDay = `${dateArr[0]}-${dateArr[1]}-${dateArr[2]}`;

    if (type === "add") {
      const transaction = {
        description: description.toString(),
        category: category.toString(),
        value,
        year: dateArr[0],
        day: dateArr[2],
        month: dateArr[1].toString(),
        yearMonth: yearMonth.toString(),
        yearMonthDay: yearMonthDay.toString(),
        type: typeRadio,
      };
      await api.insertTransaction(transaction);
      alert.show("Inclusão realizada com sucesso =)");
      return;
    } else if (type === "edit") {
      const transaction = {
        description: description.toString(),
        category: category.toString(),
        value: Number(value.toString()),
        year: dateArr[0],
        day: dateArr[2],
        month: dateArr[1].toString(),
        yearMonth: yearMonth.toString(),
        yearMonthDay: yearMonthDay.toString(),
        type: typeRadio,
      };
      reload("");
      await api.updateTransaction(transaction, id);
      alert.show("Edição realizada com sucesso =)");
      return;
    } else if (type === "delete") {
      await api.deleteTransaction(id);
      alert.show("Exclusão realizada com sucesso =)");
      return;
    }
  };

  return (
    <div>
      <Modal isOpen={true} className="Modal">
        <Header>
          <Title>{modalTitle} de Lançamento</Title>
          <ButtonClose setModalClose={setModalClose} icon="close" />
        </Header>
        <form onSubmit={handleFormSubmit}>
          <Content>
            <Radios
              block={block}
              type={transaction.map((t) => t.type)}
              setTypeRadio={handleChangeType}
            />

            <InputField>
              <label>Descrição</label>
              <Input
                type="text"
                readOnly={block}
                name="description"
                required
                style={{ color: `${block ? "#0007" : "black"}` }}
                onChange={handleChange}
                value={description}
              />
            </InputField>

            <InputField>
              <label>Categoria</label>
              <Input
                type="text"
                readOnly={block}
                name="category"
                required
                style={{ color: `${block ? "#0007" : "black"}` }}
                onChange={handleChange}
                value={category}
              />
            </InputField>

            <RowInput>
              <InputFieldRow>
                <label>Valor</label>
                <Input
                  type="number"
                  min={0}
                  name="value"
                  style={{ color: `${block ? "#0007" : "black"}` }}
                  readOnly={block}
                  required
                  onChange={handleChange}
                  value={value}
                />
              </InputFieldRow>

              <InputFieldRow>
                <label>Período</label>
                <Input
                  type="date"
                  name="date"
                  min="2019-01-01"
                  max="2021-12-31"
                  onChange={handleChange}
                  style={{ color: `${block ? "#0007" : "black"}` }}
                  readOnly={block}
                  required
                  value={date}
                />
              </InputFieldRow>
            </RowInput>
          </Content>
          <ButtonPeriod
            type="submit"
            style={{ backgroundColor: `${isActionDelete ? "red" : "green"}` }}
            className="waves-effect waves-light btn"
          >
            {isActionDelete ? "EXCLUIR" : "SALVAR"}
          </ButtonPeriod>
        </form>
      </Modal>
    </div>
  );
};

const Title = styled.h1`
  font-size: 1.9rem;

  margin-top: 30px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: auto;
  height: 90%;
  margin-top: 3px;
  padding: 30px 10px;
  margin-bottom: 25px;
  border: 1px solid #0004;
  border-radius: 2px;
`;

const InputField = styled.div`
  margin-bottom: 12px;
  width: 90%;
`;

const InputFieldRow = styled.div`
  margin-top: 18px;
  width: 47%;
`;

const Input = styled.input`
  padding: 3px;
`;

const RowInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonPeriod = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 140px;
  margin-top: 5px;
  margin-bottom: 30px;
  margin-left: 5px;
  padding: 17px 30px;
  text-align: center;

  z-index: 0;
`;

export default ContainerModal;
