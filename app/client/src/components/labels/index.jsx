import React from "react";
import styled from "styled-components";

const Labels = () => {
  return (
    <LabelsContainer>
      <span>
        Lançamentos: <LabelData>100</LabelData>
      </span>
      <span>
        Receitas: <LabelData>100</LabelData>
      </span>
      <span>
        Despesas: <LabelData>100</LabelData>
      </span>
      <span>
        Saldo: <LabelData>100</LabelData>
      </span>
    </LabelsContainer>
  );
};

const LabelsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 40px;
  font-size: 1.1rem;
  padding-bottom: 14px;
  border-bottom: 1px solid #0002;
`;

const LabelData = styled.span`
  color: #008;
`;

export default Labels;
