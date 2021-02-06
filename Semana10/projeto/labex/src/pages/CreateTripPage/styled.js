import styled from "styled-components";

export const FormContainer = styled.div`
  position: relative;
  top: 160px;
  left:50%;
  transform:translate(-50%);
  cursor: default;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 40vw;
  min-width: 300px;
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