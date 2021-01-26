import React from "react";
import styled from 'styled-components';
import axios from 'axios';
import Home from "./Home";
import { baseUrl, user } from './components/Parameters';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 5vh;
`;

const Button = styled.button`
position: absolute;
top:2px;
left:50%;
transform: translate(-50%);
height: 30px;
width: 150px;
`

export default function App() {
  const clearMacthes = () => {
    axios.put(`${baseUrl}/${user}/clear`).then(alert("Sua lista de macthes foi limpa!")).catch(err=>{console.log(err)})
  }
  return (
    <>
      <Button onClick={clearMacthes}>Limpar macthes</Button>
      <Wrapper>
        <Home />
      </Wrapper>
    </>
  );
}
