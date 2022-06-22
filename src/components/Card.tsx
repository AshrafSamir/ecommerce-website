import React, { useState } from "react";
import styled from "styled-components";
import Me from "../assets/soho1Edited.jpg";
import whiteCart from "../assets/whiteCart.svg";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 16px;
  margin: 1%;

  width: 26vw;

  background: #ffffff;

  overflow: hidden;

  &:hover {
    box-shadow: 0px 4px 35px rgba(109, 112, 114, 0.19);
  }
`;

const CardImageDiv = styled.div`
  position: relative;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const CardImage = styled.img`
  max-width: 100%;
`;

const CardButtom = styled.button<{ hovered?: boolean }>`
  position: absolute;
  width: 14%;
  height: 17%;
  right: 15px;
  bottom: -26px;
  background-color: #5ece7b;
  border: 0;
  border-radius: 50%;
  display: ${props => (props.hovered ? "block" : "none")};

  filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));
  &:hover {
    cursor: pointer;
  }
`;

const CardButtomImage = styled.img`
  width: 60%;
  height: 60%;
  margin: auto;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 0px;
  margin-top: 7%;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const TitleDiv = styled.div`
  align-items: center;
  color: #8d8f9a;
  align-self: stretch;
`;

const PriceDiv = styled.div`
  align-items: center;
  padding: 0px;
`;

const TextSpan = styled.span`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 160%;
`;

const PriceSpan = styled.span`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
`;

export default function Card() {
  const [hovered, setHovered] = useState(false);
  return (
    <ContainerDiv
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardImageDiv>
        <CardImage src={Me} alt="me" />
        <CardButtom hovered={hovered}>
          <CardButtomImage src={whiteCart} alt="whiteCart" />
        </CardButtom>
      </CardImageDiv>
      <ContentDiv>
        <TitleDiv>
          <TextSpan>Apollo Running Short</TextSpan>
        </TitleDiv>
        <PriceDiv>
          <PriceSpan>$50.00</PriceSpan>
        </PriceDiv>
      </ContentDiv>
    </ContainerDiv>
  );
}
