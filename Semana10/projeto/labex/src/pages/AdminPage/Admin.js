import React from "react";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import {
  goToCreateTripsPage,
  goToManageTripsPage,
  goToTripDetailsPage,
  goToHomePage,
} from "./../Router/Coordinator";
import { Video, Wrapper, ButtonContainer, Button } from "./styled";
import videoBG from "../../videos/galaxy.mp4"

const Admin = () => {
  useProtectedPage();
  const history = useHistory();
  return (
    <>
      <Video autoPlay muted loop src={videoBG} type="video/mp4" />
      <Wrapper>
        <ButtonContainer>
          <Button onClick={() => goToCreateTripsPage(history)}>
            CADASTRAR NOVA VIAGEM
          </Button>
          <Button onClick={() => goToManageTripsPage(history)}>
            GERENCIAR VIAGENS
          </Button>
          <Button onClick={() => goToTripDetailsPage(history)}>
            GERENCIAR PEDIDOS
          </Button>
        </ButtonContainer>
      </Wrapper>
    </>
  );
};

export default Admin;
