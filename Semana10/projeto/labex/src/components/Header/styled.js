import styled from "styled-components";
import Toolbar from "@material-ui/core/Toolbar";

export const Content = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  height: 100px;

  background-color: rgba(0, 0, 0, 0.9);
  /* background: transparent; */
  color: #fff;
  /* box-shadow: 0px 4px 6px -4px #000; */

  hr {
    background-color: #fff;
    border: none;

    width: 80%;
    margin: 15px 0;
    padding: 1px;
  }
`;

export const Title = styled.h1`
  font-family: "Trispace", sans-serif;
  font-size: 2rem;
  letter-spacing: 10px;
  margin-top: 25px;
  cursor:pointer;
`;

export const Button1 = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: white;
  height: 30px;
  font-size: 1.2rem;
  text-shadow: 1px 1px #000;
  transition: 0.5s;

  > div {
    height: 100%;
  }
  > div:nth-child(2) {
    width: 100px;
  }

  position: fixed;
  top: 20px;
  right: -80px;
  height: 30px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.5s;

  img {
    height: 100%;
  }

  &:hover,
  &:active {
    right: 20px;
    transition: 0.5s;
  }
`;

export const Button2 = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: white;
  height: 30px;
  font-size: 1.2rem;
  text-shadow:1px 1px #000;
  transition: 0.5s;

  > div {
    height: 100%;
  }
  > div:nth-child(2) {
    width: 100px;
  }

  position: fixed;
  top: 60px;
  right: -80px;
  height: 30px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.5s;

  img {
    height: 100%;
  }

  &:hover, &:active {
    right: 20px;
    transition: 0.5s;
  }
`;
