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
  top: 20px;
  right: ${(props) => (props.openLabel ? "40px" : "-20px")};
  width: 60px;
  height: 50px;

  display: flex;
  justify-content: space-between;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  
  &:active {
    right: 40px;
    transition: 0.5s ease-in-out;
  }
  .labels{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    padding-left: 10px;
    font-weight: bold;
    letter-spacing: 1px;
  }
`;

export const Icon = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  color: white;
  font-size: 1.2rem;
  text-shadow: 1px 1px #000;
  opacity: ${(props) => (props.openLabel ? "0" : "1")};

  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.5s;

  img {
    height: 30px;
  }
`;
