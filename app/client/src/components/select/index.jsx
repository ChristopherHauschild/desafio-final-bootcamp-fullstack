import React from "react";
import styled from "styled-components";

import Button from "./Button";
import periods from "./periods";

const Select = ({ changePeriod }) => {
  const handleChangePeriod = (event) => {
    changePeriod(event.target.value);
  };

  return (
    <SelectContainer>
      <Button icon="chevron_left" />

      <div>
        <SelectField onChange={handleChangePeriod} name="selectPeriod">
          {periods.map((period) => {
            return (
              <option key={period.id} value={period.id}>
                {period.value}
              </option>
            );
          })}
        </SelectField>
      </div>

      <Button icon="chevron_right" />
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const SelectField = styled.select`
  display: flex;
  margin-top: 10px;
  width: 250px;
  box-shadow: 1px 1px 2px 0px #0005;
`;

export default Select;
