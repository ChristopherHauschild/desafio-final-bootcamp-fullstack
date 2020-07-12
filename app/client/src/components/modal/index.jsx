import React from "react";
import styled from "styled-components";

import Modal from "react-modal";
import ButtonClose from "./ButtonClose";
import ButtonSave from "./ButtonSave";
import Radios from "./Radio";

import "./modal.css";

Modal.setAppElement("#root");

const ContainerModal = (props) => {
  const { handleModalClose } = props;

  const setModalClose = () => {
    handleModalClose(true);
  };

  return (
    <div>
      <Modal isOpen={true} className="Modal">
        <Header>
          <Title>Inclusão de Lançamento</Title>
          <ButtonClose setModalClose={setModalClose} icon="close" />
        </Header>
        <Content>
          <Radios />

          <InputField>
            <label>Descrição</label>
            <Input type="text" placeholder="Informe uma descrição..." />
          </InputField>

          <InputField>
            <label>Categoria</label>
            <Input type="text" placeholder="Informe uma categoria..." />
          </InputField>

          <RowInput>
            <InputFieldRow>
              <label>Valor</label>
              <Input type="number" min={0} step={10} />
            </InputFieldRow>

            <InputFieldRow>
              <label>Período</label>
              <Input type="date" />
            </InputFieldRow>
          </RowInput>
        </Content>
        <ButtonSave />
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
  height: 100%;
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

export default ContainerModal;
