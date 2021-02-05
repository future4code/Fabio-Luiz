import styled from "styled-components";

export const Background = styled.div`
position: fixed;
width: 100%;
height: 100%;
z-index: 10;
background-color: rgba(0,0,0,0.9);

display: flex;
justify-content: center;
align-items: center;
padding: 10px;
`;

export const PopupBox = styled.div`
width: 500px;
height: 150px;
background-color: white;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 20px;

div{
  display: flex;
  justify-content: space-between;
  width: 200px;
}

button{
  width: 80px;
  height: 30px;
}
`;
