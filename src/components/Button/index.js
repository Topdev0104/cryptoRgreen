import React from "react";

import styled from "styled-components";

const StyledButton = styled.div`
  margin-top: 20px;
  border: 2px #4e6f8e solid;
  font-size: 20px;
  padding: 3px 15px;
  cursor: pointer;
  width: fit-content;
`;
export const Button = (props) => {
  return (
    <StyledButton onClick={() => props.onClick()}>
      {props.children}
    </StyledButton>
  );
};
