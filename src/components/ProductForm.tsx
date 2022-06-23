import React from "react";
import styled from "styled-components";

const FormContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 9vh;
  width: 292px;
  height: 513px;
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

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 32px;
  border: 0;

  width: 292px;
  height: 52px;

  background: #5ece7b;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;

  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;

  &:hover {
    cursor: pointer;
  }
`;

const DiscriptionParagraph = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 159.96%;

  color: #1d1f22;
`;

export default function ProductForm() {
  return (
    <FormContainerDiv>
      <ProductTitleContainerDiv>
        <ProductCompanyTitleDiv>Apollo</ProductCompanyTitleDiv>
        <ProductNameDiv>Running Short</ProductNameDiv>
      </ProductTitleContainerDiv>
      <ContainerDiv>
        <TextDiv>SIZE:</TextDiv>
        <SizeBoxesContainerDiv>
          <SizeBoxeNotAvailDiv>
            <span style={{ color: "#A6A6A6" }}>XS</span>
          </SizeBoxeNotAvailDiv>
          <SizeBoxeSelectedDiv>
            <span style={{ color: "white" }}>S</span>
          </SizeBoxeSelectedDiv>
          <SizeBoxeNotSelectedDiv>
            <span style={{ color: "black" }}>M</span>
          </SizeBoxeNotSelectedDiv>
          <SizeBoxeNotSelectedDiv>
            <span style={{ color: "black" }}>L</span>
          </SizeBoxeNotSelectedDiv>
        </SizeBoxesContainerDiv>
      </ContainerDiv>
      <PriceContainerDiv>
        <TextDiv>PRICE:</TextDiv>
        <PriceDiv>$50.00</PriceDiv>
      </PriceContainerDiv>
      <Button type="button">ADD TO CART</Button>
      <DiscriptionParagraph>
        Find stunning women&apos;s cocktail dresses and party dresses. Stand out
        in lace and metallic cocktail dresses and party dresses from all your
        favorite brands.
      </DiscriptionParagraph>
    </FormContainerDiv>
  );
}
