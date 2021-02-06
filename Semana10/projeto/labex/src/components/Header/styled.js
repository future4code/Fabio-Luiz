import styled from "styled-components";
import Toolbar from "@material-ui/core/Toolbar";
import "../../fonts.css";

export const Content = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  height: 100px;

  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;

  hr {
    background-color: #fff;
    border: none;

    width: 80%;
    margin: 15px 0;
    padding: 1px;
  }
`;

export const Title = styled.h1`
  font-family: "LogoFont";
  font-size: 2.2rem;
  letter-spacing: 10px;
  margin-top: 25px;
  cursor: pointer;
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 10px;
  right: -38px;
  width: 60px;

  display: flex;
  justify-content: space-between;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    right: 5px;
    transition: 0.5s ease-in-out;
  }

  div:nth-child(1) {
    font-size: 10px;
    text-shadow: 1px 1px #000;
    background-color: #6ccefc;
    width: 1em;
    word-break: break-all;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 12px;
    border-radius: 8px 0 0 8px;
    border: 1px solid #fff;
  }

  #id:hover{
    background-color:#fff;
  }
`;

export const Icon = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: white;
  height: 30px;
  font-size: 1.2rem;
  text-shadow: 1px 1px #000;
  transition: 0.5s;

  height: 30px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.5s;

  img {
    height: 100%;
  }
`;
