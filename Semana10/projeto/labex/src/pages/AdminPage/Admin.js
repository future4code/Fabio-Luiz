import React from "react";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../../Hooks/useProtectedPage";

import { ButtonContainer} from "./styled";
import { VideoBG, Button } from "../../components/globalStyled";
import videoBG from "../../videos/galaxy.mp4"
import {
  goToCreateTripPage,
  goToCandidatesPage,
} from "./../Router/Coordinator";


const Admin = () => {
  useProtectedPage();
  const history = useHistory();
  return (
    <>
      <VideoBG autoPlay muted loop src={videoBG} type="video/mp4" />
        <ButtonContainer>
          <Button width="250px" onClick={() => goToCreateTripPage(history)}>
            CADASTRAR NOVA VIAGEM
          </Button>
          <Button width="250px" onClick={() => goToCandidatesPage(history)}>
            GERENCIAR PEDIDOS
          </Button>
        </ButtonContainer>
    </>
  );
};

export default Admin;
