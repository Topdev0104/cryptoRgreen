import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardImg = styled.img`
  width: 200px;
  height: 200px;
`;
const CardDesc = styled.div`
  margin-top: 20px;
  border: 2px #4e6f8e solid;
  max-width: 200px;
  font-size: 20px;
  padding: 0 15px;
`;

export const Card = ({ src, description }) => {
  return (
    <CardWrapper>
      <CardImg src={src} />
      <CardDesc>{description}</CardDesc>
    </CardWrapper>
  );
};
