import  styled  from 'styled-components';

export const BG = styled.img`
position: fixed;
min-width: 100%;
min-height: 100%;
z-index: 1;
`

export const Video = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 0;
`;

export const Wrapper = styled.div`
  position: relative;
  top: 120px;
  left: 50%;
  transform: translate(-50%);

  display: grid;
  grid-template-rows: 150px 350px;
  grid-template-columns: 1fr 1fr;

  max-width: 1200px;
  min-width: 310px;
  height: 600px;
  justify-content: center;

  > div:nth-child(1) {
    padding: 0 5vw;
  }
  > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 0 5vw;
    img {
      height: 300px;
    }
  }
  > div:nth-child(3) {
    grid-column: 2 / -1;
    grid-row: 1 / -1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 5vw;
  }

  h1 {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
    letter-spacing: 5px;
    text-align: center;
    line-height: 60px;
  }
  
  @media screen and (max-width: 799px) {
    grid-template-rows: 1fr 1fr 500px;
    grid-template-columns: 1fr;

    > div:nth-child(1) {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
    > div:nth-child(2) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
    > div:nth-child(3) {
      grid-column: 1 / 2;
      grid-row: 3 / -1;
    }
  }
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

  div{
      display: flex;
      justify-content: space-around;
      width: 100%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  height: 100%;
  width: 90%;
  border: 2px solid white;
  border-radius: 10px;
  color: #fff;
  text-shadow: 1px 1px #000;

  padding: 10px;

  label {
    width: 120px;
    margin-right: 10px;
  }

  input {
    width: 100%;
    height: 2rem;
  }
`;

export const Form = styled.form`
  h3 {
    margin-bottom: 30px;
    text-align: center;
    font-size: 2rem;
  }
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
`;

export const Button = styled.button`
  position: relative;
  z-index: 1;
  width: 100%;
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

export const Icon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 99999;
  width: 150px;

  border: none;
  outline: none;
  cursor: pointer;

  color: white;
  width: 30px;
  height: 30px;
  font-size: 1.6rem;

  &:hover {
    transform: rotate(360deg);
    transition: 0.5s;
  }
`;

export const SideMenu = styled.div`
  position: absolute;
  top: 0px;
  padding-top: 80px;
  left: ${(props) => (props.openMenu ? "0" : "-100%")};
  opacity: ${(props) => (props.openMenu ? "1" : "0")};
  z-index: 99998;
  width: 400px;
  height: 100%;
  color: #fff;
  font-size: 1.5rem;
  background-color: rgba(0,0,0,0.9);
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 15px;
    text-align: center;
  }

  li:hover {
    background-color: purple;
    transition: 0.3s ease-in-out;
  }

  @media screen and (max-width: 548px) {
    width: 100%;
  }
`;