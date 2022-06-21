import React from "react";
import styled from "styled-components";
import Header from "./components/Header";

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  return (
    <div>
      <AppHeader>
        <Header />
      </AppHeader>
    </div>
  );
}

export default App;
