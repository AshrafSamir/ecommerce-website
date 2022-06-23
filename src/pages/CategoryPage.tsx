import React from "react";
import styled from "styled-components";

import NavBar from "../components/NavBar";
import Card from "../components/Card";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoreyTitle = styled.div`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 160%;

  margin-top: 12vh;
  margin-left: 5%;

  color: #1d1f22;
`;

const ListContainerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 7vh;
`;

export default function ProductListing() {
  return (
    <ContainerDiv>
      <NavBar />

      <CategoreyTitle>Category Name</CategoreyTitle>

      <ListContainerDiv>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ListContainerDiv>
    </ContainerDiv>
  );
}
