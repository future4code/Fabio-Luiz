import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 11;
  background-color: rgba(0, 0, 0, 0.9);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const AlertBox = styled.div`
  width: 500px;
  height: 150px;
  color: #fff;
  background-color: #000;
  border: 1px solid #fff;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 30px;
  font-size: 0.8rem;
  padding: 15px;
  border: 2px solid #fff;
  background: transparent;
  color: #fff;
  letter-spacing: 2px;
  text-shadow: 1px 1px #000;
  cursor: pointer;
  transition: 0.3s linear;

  &:hover {
    background: #fff;
    color: #000;
    text-shadow: 1px 1px #fff;
  }
`;
