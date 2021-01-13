import styled from "styled-components";

export const AppContainer = styled.main`
  display: flex;
  flex-direction: column;

  .modeBtn {
    height: 2.5rem;
    min-width: 300px;
    background-color: #000000;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.5rem;
    border: 1px solid grey;
    cursor: pointer;
  }
`;

export const WhiteBg = styled.section`
width: 100vw;
height: 100vh;
position: absolute;
z-index: 1;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const Form = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  width: 25vw;
  min-width: 300px;
  margin: 1rem auto;
  border: 2px solid #000000;
  border-radius: 10px;
  box-shadow: 5px 5px 5px -2px #000000;
  background-color: #ffffff;

  h1 {
    text-align: center;
  }

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
    cursor: pointer;
  }

  .editIcon {
    height: 25px;
    margin: 0 20px;
    cursor: pointer;
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
    cursor: pointer;
  }
`;

export const IconsContainer = styled.section`
  display: flex;
  align-items: center;
`;

export const User = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 5px 0;

  > section {
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

export const DetailsInfo = styled.section`
  display: flex;
  flex-direction: column;

  input {
    margin: 5px;
    padding: 10px;
  }
`;

export const DetailsBox = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const SearchBox = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 1rem auto;
  min-width: 300px;

  section {
    display: flex;
    margin: auto;
    gap: 10px;
  }

  input {
    border: 1px solid #000000;
    height: 1.5rem;
    width: 90%;
    border-radius: 15px;
    padding: 10px;
  }

  button {
    padding: 5px;
    width: 100px;
    background-color: #000000;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const InfoBox = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  z-index: 1;

  width: 25vw;
  min-width: 300px;
  margin: -200px auto;
  border: 2px solid #000000;
  border-radius: 10px;
  box-shadow: 5px 5px 5px -2px #000000;
  background-color: #ffffff;

  h1 {
    text-align: center;
  }

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

  #editIcon {
    height: 25px;
    margin: 0 20px;
    cursor: pointer;
  }

  #saveIcon {
    height: 50px;
    margin: 0 20px;
    cursor: pointer;
  }

  #backBtn {
    width: 100%;
    margin-top: 1rem;
    padding: 5px;
    background-color: #000000;
    color: #ffffff;
    font-weight: bold;
    border: none;
    cursor: pointer;
  }
`;
