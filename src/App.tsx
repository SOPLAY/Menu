import React from "react";
import styled from "styled-components";
import reset from "styled-reset";

import NavBar from "./components/Nav/NavBar";

const Body = styled.div`
  display: flex;
`;
function App() {
  return (
    <>
      <Body>
        <NavBar />
      </Body>
    </>
  );
}

export default App;
