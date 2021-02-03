import styled from "styled-components";

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: relative;
  z-index: 1;
  top: 160px;
  left: 50%;
  transform: translate(-50%);

  max-width: 500px;
  height: 100%;

  /* border: 2px solid white; */
  padding: 10px;

  cursor: default;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-shadow: 1px 1px #000;
  letter-spacing: 1px;
  line-height: 1.8rem;
  color: #fff;

  h3 {
    font-size: 1.8rem;
    padding-bottom: 15px;
    border-bottom: 2px solid #fff;
    margin-bottom: 15px;
    width: 100%;
    text-align: center;
    letter-spacing: 5px;
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
  width: 250px;
  font-size: 0.8rem;
  padding: 15px;
  margin-top: 50px;
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
