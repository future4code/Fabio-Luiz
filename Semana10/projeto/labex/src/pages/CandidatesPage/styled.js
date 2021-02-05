import styled from "styled-components";

export const Video = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 0;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 70vw;
  color: #fff;

  display: grid;
  grid-template-columns: auto auto;

  position: absolute;
  top: 140px;
  left: 50%;
  transform: translate(-50%);

  @media screen and (max-width: 1024px) {
    .tripList {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    width: 95vw;
  }
`;

export const ListIcon = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    position: fixed;
    top: 20px;
    right: 20px;
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
  }
`;

export const ListMenu = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    position: absolute;
    top: 0;
    opacity: ${(props) => (props.openMenu ? "1" : "0")};
    right: 0;
    background-color: rgba(0, 0, 0, 0.9);
    width: ${(props) => (props.openMenu ? "100%" : "1px")};
    height: ${(props) => (props.openMenu ? "100%" : "1px")};
    overflow: ${(props) => (props.openMenu ? "visible" : "auto")};
    transition: 0.5s ease-in-out;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    text-align: center;
  }
`;

export const MainBox = styled.div`
  max-width: 700px;
  padding: 15px;
  cursor: pointer;

  ul {
    list-style: none;
  }

  li {
    margin: 10px 0;
    font-size: 1.2rem;
    text-shadow: 1px 1px #000;
    padding: 10px;

    &:hover {
      background-color: #6ccefc;
      transition: 0.3s ease-in-out;
    }
  }

  hr,
  h3 {
    margin: 15px 0;
    font-size: 1.5rem;
    text-align: center;
  }

  p {
    padding: 5px 0;
    margin-right: 45px;
  }

  span {
    font-weight: bold;
    color: #6ccefc;
  }

  .info {
    display: grid;
    grid-template-columns: 80px auto;
  }
`;

export const CandidateBox = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  background-color: #6ccefc;
  text-shadow: 1px 1px #000;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 15px;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  height: 100%;
  img {
    height: 30px;
  }
`;

export const Button = styled.button`
  position: relative;
  width: 300px;
  font-size: 0.8rem;
  padding: 15px;
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
