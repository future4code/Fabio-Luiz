import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: 1;
  top: 150px;
  left: 50%;
  transform: translate(-50%);

  min-width: 300px;
  max-width: 500px;
  height: 300px;

  background-color: rgba(0,0,0,0.7);
  border: 1px solid #fff;
  border-radius: 5px;

  white-space:nowrap;

  .testeBox {
    background-color: white;
  }
`;