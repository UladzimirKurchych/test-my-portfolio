import React from 'react';
import './App.css';
import styled from "styled-components";


function App() {
  return (
    <div className="App">
      <Box>My portfolio</Box>
    </div>
  );
}

export default App;

const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  background-color: chartreuse;
  color: #282c34;
`