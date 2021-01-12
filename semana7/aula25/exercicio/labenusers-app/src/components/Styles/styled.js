import styled from "styled-components";

export const AppContainer = styled.main`
  display: flex;
  flex-direction: column;

  .modeBtn {
    height: 2.5rem;
    background-color: #000000;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.5rem;
    border: 1px solid grey;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #000000;
  border-radius: 10px;
  box-shadow: 5px 5px 5px -2px #000000;

  hr {
    margin: 10px 0;
  }

  input {
    margin-top: 5px;
    margin-bottom: 1rem;
    height: 2rem;
    border-bottom: 1px solid black;
    border-radius: 10px;
  }

  .createUserBtn {
    height: 2rem;
    background-color: #000000;
    color: #ffffff;
    border: 1px solid #000000;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 10px;
  }

  .createUserBtn:hover {
    background-color: #22f22f;
    transition: ease-in 0.2s;
  }

  .createUserBtn:active {
    outline: none;
  }
`;

export const UserLine = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 5px 0;

  .deleteUserBtn {
    background-color: red;
    border: 2px solid red;
    border-radius: 50%;
    text-align: center;
    padding: 1px;
    font-weight: bold;
    color: white;
    width: 25px;
    height: 25px;
  }
`;
