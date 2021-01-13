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

export const Wrapper = styled.div`
width: 100vw;
height: 100vh;
z-index: 1;
  background-color: rgba(255, 255, 255, 0.7);
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
  background-color: #ffffff;

  hr {
    margin: 10px 0;
  }

  input {
    margin-top: 5px;
    margin-bottom: 1rem;
    height: 2rem;
    border-bottom: 1px solid black;
    border-radius: 10px;
    padding: 10px;
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

  .boxIcon {
    height: 25px;
    margin: 0 20px;
  }

  .iconsBox {
    display: flex;
    align-items: center;
  }

  .backBtn {
    width: 100%;
    margin-top: 1rem;
    padding: 5px;
    background-color: #000000;
    color: #ffffff;
    font-weight: bold;
    border: none;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserLine = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 5px 0;

  > div {
    display: flex;
    gap: 20px;
  }

  img {
    height: 25px;
    cursor: pointer;
  }
`;

export const DeleteUserBtn = styled.button`
  background-color: red;
  border: 2px solid red;
  border-radius: 50%;
  text-align: center;
  padding: 1px;
  font-weight: bold;
  color: white;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const DetailsInfo = styled.div`
  display: flex;
  flex-direction: column;

  input {
    margin: 5px;
    padding: 10px;
  }
`;

export const DetailsBox = styled.div`
  display: flex;
`;
export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  position: absolute;
  top: 13%;
  left: 50%;
  transform: translate(-50%, -10%);
  gap: 20px;

  input {
    border: 1px solid #000000;
    height: 1.5rem;
    min-width: 300px;
    width: 30vw;
    border-radius: 15px;
    padding: 10px;
  }

  button {
    padding: 5px;
    background-color: #000000;
    color: #ffffff;
    border: none;
    border-radius: 5px;
  }
`;
