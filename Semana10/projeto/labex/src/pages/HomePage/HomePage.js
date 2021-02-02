import React from "react";
import { TextContainer, TextBox, Video, Button } from "./styled";
import { useHistory } from "react-router-dom";
import space from "../../videos/space.mp4";
import { goToListTripsPage } from "../Router/Coordinator";

const HomePage = () => {
  const history = useHistory();

  return (
    <>
      <Video autoPlay muted loop src={space} type="video/mp4" />
      <TextContainer>
        <TextBox>
          <h3>Conheça a LabeX</h3>
          <p>
            Somos capazes de proporcionar uma experiência única, expandido seus
            horizontes e redefinindo o conceito de limite. A Terra é pequena
            demais para nós e também pode ser pros seus sonhos. Aventure-se em
            um novo planeta e descubra as belezas do Universo.
          </p>
        </TextBox>
        <Button onClick={() => goToListTripsPage(history)}>
          VIAGENS DISPONÍVEIS
        </Button>
      </TextContainer>
    </>
  );
};

export default HomePage;
