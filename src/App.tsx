import React from "react";
import styled from "styled-components";
// import Header from "./components/Header";
// import CategoryPage from "./pages/CategoryPage";
// import ProductForm from "./components/ProductForm";
// import Productage from "./pages/ProductPage";
import CartItem from "./components/CartItem";

const ContainerDiv = styled.div`
  display: relative;
  overflow: auto;
  background-color: white;
  height: 100vh;
`;

function App() {
  return (
    <ContainerDiv>
      <CartItem />
    </ContainerDiv>
  );
}

export default App;
