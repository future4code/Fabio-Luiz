import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  color: #fff;

  h3 {
    margin-bottom: 30px;
    text-align: center;
    font-size: 2rem;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 0 10px;
    outline: none;
    border: none;
    border-radius: 5px;
    margin-bottom: 15px;
  }

  input,
  select {
    height: 2rem;
  }
`;

export const Button = styled.button`
  position: relative;
  z-index: 1;
  width: ${(props) => props.width};
  font-size: 0.8rem;
  padding: 15px;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
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

export const VideoBG = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 0;
`;