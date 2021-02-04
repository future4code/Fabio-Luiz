import styled from "styled-components";

export const FormContainer = styled.div`
  position: relative;
  top: 160px;
  left: 50%;
  transform: translate(-50%);

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

export const Form = styled.form`
  width: 90%;

  h3 {
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    font-size: 2rem;
    cursor: default;
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
  z-index: 99999;
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

export const Button = styled.button`
  position: relative;
  z-index: 1;
  width: 100%;
  font-size: 0.8rem;
  padding: 15px;
  margin-top: 30px;
  margin-bottom: 30px;
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

export const Video = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 0;
`;
