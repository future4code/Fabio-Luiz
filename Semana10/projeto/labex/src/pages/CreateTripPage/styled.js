import styled from "styled-components";

export const FormContainer = styled.div`
  position: relative;
  top: 160px;
  left: 50%;
  transform: translate(-50%);
  cursor: default;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  max-width: 500px;
  border: 2px solid white;
  border-radius: 10px;
  color: #fff;
  text-shadow: 1px 1px #000;

  padding: 10px;

  input,
  select {
    width: 100%;
    height: 2rem;
    padding: 0 10px;
    outline: none;
    border: none;
    border-radius: 5px;
    margin-bottom: 15px;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  width: 150px;

  border: none;
  outline: none;
  cursor: pointer;

  color: white;
  width: 30px;
  height: 30px;
  font-size: 1.6rem;

  transition: 0.5s;

  &:hover {
    transform: rotate(360deg);
    transition: 0.5s;
  }
`;
