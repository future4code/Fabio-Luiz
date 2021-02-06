import styled from "styled-components";

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;

  position: relative;
  z-index:1;
  top: 160px;
  left: 50%;
  transform: translate(-50%);

  max-width: 500px;
  height: 100%;

  padding: 10px;

  cursor: default;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;

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