import React from "react";
import styled from "styled-components";
import Me from "../assets/soho1Edited.jpg";

const Container = styled.div`
  margin: 9vh;
  display: flex;
  @media (max-width: 815px) {
    flex-direction: column;
  }
`;
const BigImageContainer = styled.div``;

const SmallImageContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 10%;
  width: 79px;

  @media (max-width: 815px) {
    flex-direction: row;
    gap: 10%;
  }
`;

const BigImage = styled.img`
  width: 610px;
  height: 511px;
  @media (max-width: 815px) {
    width: 100%;
    height: 100%;
  }
`;
const SmallImage = styled.img`
  width: 79px;
  height: 80px;
  margin-bottom: 30%;
`;

export default function ItemView() {
  return (
    <Container>
      <SmallImageContainer>
        <SmallImage src={Me} alt="product" />
        <SmallImage src={Me} alt="product" />
        <SmallImage src={Me} alt="product" />
      </SmallImageContainer>
      <BigImageContainer>
        <BigImage src={Me} alt="product" />
      </BigImageContainer>
    </Container>
  );
}
