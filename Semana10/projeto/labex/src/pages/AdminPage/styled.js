import styled from 'styled-components';

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