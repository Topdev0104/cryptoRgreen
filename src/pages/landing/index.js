import React from "react";
import { Card } from "../../components/Card";
import { ContentWrapper, ContentGrid } from "../../style/landing/styled";
import { data } from "./data";
const Landing = () => {
  return (
    <ContentWrapper>
      <ContentGrid>
        {data.map((item, key) => {
          return (
            <Card
              key={key + 1}
              src={item.src}
              id={item.id}
              description={item.description}
            />
          );
        })}
      </ContentGrid>
    </ContentWrapper>
  );
};
export default Landing;
