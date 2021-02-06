import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  top: 120px;
  left: 50%;
  transform: translate(-50%);

  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;

  max-width: 1200px;
  min-width: 310px;
  justify-content: center;

  > div:nth-child(1) {
    padding: 0 5vw;
    height: 250px;
  }
  > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 0 5vw;
    img {
      display: block;
      height: 250px;
    }
  }
  > div:nth-child(3) {
    grid-column: 2 / -1;
    grid-row: 1 / -1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 5vw;
  }

  @media screen and (max-width: 799px) {
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr;

    > div:nth-child(1) {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
    > div:nth-child(2) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
    > div:nth-child(3) {
      grid-column: 1 / 2;
      grid-row: 3 / -1;
    }
  }
`;

export const OpenBox = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translate(-50%);
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fff;
    letter-spacing: 5px;
    text-align: center;
    line-height: 60px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-shadow: 1px 1px #000;
  letter-spacing: 1px;
  line-height: 1.8rem;
  color: #fff;

  h3 {
    font-size: 1.8rem;
    padding-bottom: 15px;
    border-bottom: 2px solid #fff;
    margin-bottom: 15px;
    width: 100%;
    text-align: center;
    letter-spacing: 5px;
  }

  p {
    font-size: 1rem;
    text-align: justify;
    word-break: break-word;
    align-self: flex-start;
  }

  span {
    font-weight: bold;
    color: #6ccefc;
  }

  div {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  width: 90%;
  border: 2px solid white;
  border-radius: 10px;
  color: #fff;
  text-shadow: 1px 1px #000;
  padding: 10px;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 99999;

  border: none;
  outline: none;
  cursor: pointer;

  color: white;
  height: 30px;
  font-size: 1.2rem;
  text-shadow: 1px 1px #000;
  transition: 0.5s;

  > div {
    height: 100%;
  }
  > div:nth-child(1) {
    width: 100px;
  }

  img {
    height: 100%;
  }
`;

export const SideMenu = styled.div`
  position: fixed;
  top: 0px;
  padding-top: 80px;
  left: ${(props) => (props.openMenu ? "0" : "-100%")};
  opacity: ${(props) => (props.openMenu ? "1" : "0")};
  z-index: 99998;
  width: 400px;
  height: 100%;
  color: #fff;
  font-size: 1.5rem;
  background-color: rgba(0, 0, 0, 0.9);
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  ul {
    list-style: none;
  }

  li {
    margin: 10px 0;
    font-size: 1.2rem;
    text-shadow: 1px 1px #000;
    padding: 10px;
    text-align: center;

    &:hover {
      background-color: #6ccefc;
      transition: 0.3s ease-in-out;
    }
  }

  @media screen and (max-width: 548px) {
    width: 100%;
  }
`;
