import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const { id, onClickButton, category, description, value, type, day } = props;

  const handleClickButton = (type) => {
    onClickButton(type, id);
  };

  let bg = type === "+" ? "blue" : "red";

  return (
    <CardContainer style={{ backgroundColor: `${bg}` }}>
      <Day>{day}</Day>
      <Infos>
        <Title>{category}</Title>
        <Description>{description}</Description>
      </Infos>
      <Money>R$ {value}</Money>
      <Actions>
        <Icon
          onClick={() => handleClickButton("edit")}
          name="edit"
          className="material-icons"
        >
          edit
        </Icon>
        <Icon
          onClick={() => handleClickButton("delete")}
          className="material-icons"
        >
          delete
        </Icon>
      </Actions>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 15px;
  padding: 12px 15px;
  border-radius: 3px;
  box-shadow: 1px 1px 2px 0px #0006;
`;

const Day = styled.div`
  font-weight: 600;
  font-size: 1.3rem;
  margin-right: 20px;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 1.3rem;
`;

const Description = styled.div`
  color: #0007;
  font-weight: 500;
`;

const Money = styled.span`
  font-weight: 600;
  font-size: 1.3rem;
`;

const Actions = styled.div`
  display: flex;
  margin-left: 25px;
`;

const Icon = styled.i`
  margin: 0px 3px;
  font-size: 1.8rem;
  cursor: pointer;
`;

export default Card;
