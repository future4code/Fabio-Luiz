import styled from 'styled-components';

export const Video = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 0;
`;

export const Wrapper=styled.div`
 width: 100vw;
 height: 100vh;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 300px;

  position: relative;
  top: 100px;
  left: 50%;
  transform: translate(-50%);
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