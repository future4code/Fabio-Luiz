import styled from 'styled-components'

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1000px;

  position: absolute;
  top: 100px;
  left: 50%;
  transform: translate(-50%);

  button {
    width: 100%;
    height: 2rem;
    font-size: 0.7rem;
    padding: 5px;
    border: none;
    outline: none;
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
  }

  button:nth-child(2) {
    border-left: 2px solid #fff;
  }
`;