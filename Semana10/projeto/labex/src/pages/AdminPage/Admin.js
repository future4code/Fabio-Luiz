import React from 'react'
import { useHistory } from "react-router-dom";
import {
  goToCreateTripsPage,
  goToManageTripsPage,
  goToHomePage,
} from "./../Router/Coordinator";
import {Wrapper} from "./styled"

const Admin = () => {
    const history = useHistory();
    return (
      <Wrapper>
        <button onClick={() => goToCreateTripsPage(history)}>
          CADASTRAR NOVA VIAGEM
        </button>
        <button onClick={() => goToManageTripsPage(history)}>
          GERENCIAR VIAGENS
        </button>
        <button onClick={() => goToHomePage(history)}>
          GERENCIAR PEDIDOS DE VIAGEM
        </button>
      </Wrapper>
    );
}

export default Admin
