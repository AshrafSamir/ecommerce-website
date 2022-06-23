import React from "react";
import styled from "styled-components";
import Me from "../assets/soho1Edited.jpg";

const Container = styled.div`
  display: flex;
  width: 60%;
  border-top: 1px solid #e5e5e5;

  padding: 10px;

  margin: auto;
  margin-top: 10%;
`;
const ProductCompanyTitleDiv = styled.div`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  color: #1d1f22;
`;

const ProductNameDiv = styled(ProductCompanyTitleDiv)`
  font-weight: 400;
`;

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProductTitleContainerDiv = styled(ContainerDiv)`
  gap: 15px;
`;

const PriceContainerDiv = styled(ContainerDiv)`
  gap: 20px;
`;
const TextDiv = styled.div`
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #1d1f22;
`;

const SizeBoxesContainerDiv = styled.div`
  display: flex;
  gap: 10px;
`;

const SizeBoxeNotAvailDiv = styled.div`
  box-sizing: border-box;
  width: 63px;
  height: 45px;
  border: 1px solid #a6a6a6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SizeBoxeSelectedDiv = styled(SizeBoxeNotAvailDiv)`
  background: #1d1f22;
  border: 1px solid #1d1f22;
`;

const SizeBoxeNotSelectedDiv = styled(SizeBoxeNotAvailDiv)`
  border: 1px solid #1d1f22;
`;

const PriceDiv = styled(TextDiv)`
  font-size: 24px;
`;

const ItemImage = styled.img`
  width: 198px;
  height: 185px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const RightContainer = styled.div`
  margin-left: auto;
`;

export default function CartItem() {
  return (
    <Container>
      <LeftContainer>
        <ProductTitleContainerDiv>
          <ProductCompanyTitleDiv>Apollo</ProductCompanyTitleDiv>
          <ProductNameDiv>Running Short</ProductNameDiv>
        </ProductTitleContainerDiv>
        <PriceContainerDiv>
          <PriceDiv>$50.00</PriceDiv>
        </PriceContainerDiv>
        <ContainerDiv>
          <SizeBoxesContainerDiv>
            <SizeBoxeNotSelectedDiv>
              <span style={{ color: "black" }}>S</span>
            </SizeBoxeNotSelectedDiv>
            <SizeBoxeSelectedDiv>
              <span style={{ color: "white" }}>M</span>
            </SizeBoxeSelectedDiv>
          </SizeBoxesContainerDiv>
        </ContainerDiv>
      </LeftContainer>
      <RightContainer>
        <ItemImage src={Me} alt="item" />
      </RightContainer>
    </Container>
  );
}
