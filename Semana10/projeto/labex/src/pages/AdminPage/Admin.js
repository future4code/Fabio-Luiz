import React from "react";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../../Hooks/useProtectedPage";

import { Video, Wrapper, ButtonContainer, Button } from "./styled";
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
      <Video autoPlay muted loop src={videoBG} type="video/mp4" />
      <Wrapper>
        <ButtonContainer>
          <Button onClick={() => goToCreateTripPage(history)}>
            CADASTRAR NOVA VIAGEM
          </Button>
          <Button onClick={() => goToCandidatesPage(history)}>
            GERENCIAR PEDIDOS
          </Button>
        </ButtonContainer>
      </Wrapper>
    </>
  );
};

export default Admin;
