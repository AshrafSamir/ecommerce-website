import React from "react";
import styled from "styled-components";
// import Header from "./components/Header";
import ProductListing from "./pages/ProductListing";

const ContainerDiv = styled.div`
  display: relative;
  overflow: auto;
  background-color: white;
  height: 100vh;
`;

function App() {
  return (
    <ContainerDiv>
      <ProductListing />
    </ContainerDiv>
  );
}

export default App;
