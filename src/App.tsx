import React from "react";
import styled from "styled-components";
import Header from "./components/Header";

const ContainerDiv = styled.div`
  position: relative;
  background-color: white;
  height: 100vh;
`;

function App() {
  return (
    <ContainerDiv>
      <Header />
    </ContainerDiv>
  );
}

export default App;
