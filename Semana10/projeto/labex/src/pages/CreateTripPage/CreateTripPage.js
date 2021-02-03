import React from "react";
import { TextContainer, TextBox, Video, Button } from "./styled";
import { useHistory } from "react-router-dom";
import space from "../../videos/space.mp4";
import { goToCreateTripsPage, goToListTripsPage } from "../Router/Coordinator";

export default function CreateTripPage() {
  const history = useHistory();

  return (
    <>
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
        <button onClick={() => goToCreateTripsPage(history)}>teste</button>
      </TextContainer>
    </>
  );
};
