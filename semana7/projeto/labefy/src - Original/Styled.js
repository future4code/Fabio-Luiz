import styled from "styled-components";
import bg from "./imgs/bg1.jpg";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: grey;
  /* background-image: url(${bg}); */
  background-repeat: no-repeat;
  background-size: cover;

  #main-title {
    font-size: 5rem;
    color: #d7d8e4;
    font-weight: bold;
    font-family: "Anton", sans-serif;
    letter-spacing: 15px;
    text-align: center;
  }

  .btnContainer {
    width: 80vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    button {
      height: 3rem;
      width: 6rem;
      border-radius: 20px;
      background-color: #0f56e6;
      color: #d7d8e4;
      font-size: 1rem;
      border: 1px solid #ffffff;
      outline: none;
    }

    button:hover {
      background-color: #000000;
      transform: scale(1.2);
      transition: ease 0.5s;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 35vh;
`;

export const CreateContainer = styled.div`
  display: flex;
  justify-content: space-around;

  input {
    width: 73%;
    height: 2rem;
    padding: 1rem;
    border-radius: 20px;
    border: 2px solid #000000;
    outline: none;
  }

  button {
    border-radius: 20px;
    height: 2rem;
    width: 22%;
    background-color: #0f56e6;
    color: #d7d8e4;
    font-size: 1.2rem;
    border: 1px solid #ffffff;
    outline: none;
  }

  button:hover {
    background-color: #000000;
    transition: ease 0.5s;
  }
`;

export const MainContainer = styled.div`
  height: 65vh;
  overflow-y: auto;
`;

export const SessionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: #d7d8e4;
  font-weight: bold;
  font-family: "Anton", sans-serif;
  letter-spacing: 5px;
`;

export const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: #ffffff;
  }
`;

export const DetailsContainer = styled.div`
  .details-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      width: 30px;
      height: 30px;
      margin: 0 10px;
      background-color: #3ebb47;
      color: white;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  max-height: 75vw;
  overflow-y: auto;
`;

export const PlaylistInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50vw;
  min-width: 300px;
  max-height: 50vh;
  p {
    color: #ffffff;
    font-size: 1rem;
    padding: 10px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 140px;

  .detail-button {
    border-radius: 20px;
    height: 2rem;
    padding: 0 10px;
    margin-right: 10px;
    font-size: 1rem;
    background-color: #0f56e6;
    color: #d7d8e4;
    font-size: 1.2rem;
    border: 1px solid #ffffff;
    outline: none;
  }

  .detail-button:hover {
    background-color: #000000;
    transition: ease 0.5s;
  }
`;

export const DeleteButton = styled.button`
  width: 2rem;
  height: 2rem;
  font-size: 1.3rem;
  font-weight: bold;
  background-color: red;
  color: white;
  border: 1px solid white;
  border-radius: 50%;
  outline: none;
`;

export const CreatePage = styled.div`
position: absolute;
top: 35vh;
left: 50%;
transform: translate(-50%);
width: 90%;
height: 35vh;
border-radius: 20px;
border: 1px solid black;
padding: 10px;
background-color: rgba(255,255,255,1);
`
