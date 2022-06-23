import React from "react";

import styled from "styled-components";

import ProductForm from "../components/ProductForm";
import ItemView from "../components/ItemView";
import NavBar from "../components/NavBar";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const BodyDev = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 7vh;
`;

export default function ProductPage() {
  return (
    <ContainerDiv>
      <NavBar />
      <BodyDev>
        <ItemView />
        <ProductForm />
      </BodyDev>
    </ContainerDiv>
  );
}
