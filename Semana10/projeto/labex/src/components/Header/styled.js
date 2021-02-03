import styled from "styled-components";
import Toolbar from "@material-ui/core/Toolbar";

export const Content = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  height: 100px;

  /* background-color: rgba(0, 0, 0, 0.5); */
  background: transparent;
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

export const Button = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  height: 30px;
  width: 30px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.5s;

  img {
    width: 100%;
  }

  &:hover {
    transform: rotate(360deg);
    transition: 0.5s;
  }
`;
