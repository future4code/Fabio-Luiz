import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 1;
  top: 150px;
  left: 50%;
  transform: translate(-50%);

  max-width: 500px;
  height: 300px;

  background-color: rgba(0,0,0,0.7);
  border: 1px solid #fff;
  border-radius: 5px;
`;

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;

  margin: 0 20px;
  padding: 10px;

  text-shadow: 1px 1px #000;
  letter-spacing: 1px;
  line-height: 1.8rem;
  color: #fff;
  gap: 10px;

  div {
    display: flex;
    justify-content: space-between;

    input {
      margin-left: 10px;
      outline: none;
      border-radius: 5px;
      border: 1px solid #000;
    }
  }

  h3 {
    font-weight: 200;
    font-size: 2rem;
    padding-bottom: 15px;
    border-bottom: 1px solid #fff;
    margin-bottom: 15px;
    text-align: center;
  }
  p {
    font-size: 1rem;
    text-align: justify;
    word-break: break-word;
  }
`;

export const Button = styled.button`
  position: relative;
  z-index: 1;
  width: 80%;
  font-size: 0.8rem;
  padding: 15px;
  margin-top: 30px;
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
