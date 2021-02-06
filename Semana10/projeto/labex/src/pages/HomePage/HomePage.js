import React from "react";
import { TextContainer, TextBox } from "./styled";
import { VideoBG, Button } from "../../components/globalStyled";
import { useHistory } from "react-router-dom";
import space from "../../videos/space.mp4";
import { goToListTripsPage } from "../Router/Coordinator";

const HomePage = () => {
  const history = useHistory();

  return (
    <>
      <VideoBG autoPlay muted loop src={space} type="video/mp4" />
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
        <Button
          width="80%"
          marginTop="40px"
          onClick={() => goToListTripsPage(history)}
        >
          VIAGENS DISPONÍVEIS
        </Button>
      </TextContainer>
    </>
  );
};

export default HomePage;
