import React from 'react'
import { Menu } from './styled';
import { useHistory } from "react-router-dom";
import {
  goToCandidatesPage,
  goToCreateTripPage,
  goToManageTripsPage,
} from "./../../pages/Router/Coordinator";

const AdminMenu = () => {
    const history = useHistory();
    return (
      <Menu>
        <button onClick={() => goToCreateTripPage(history)}>NOVA VIAGEM</button>
        <button onClick={() => goToCandidatesPage(history)}>
          GERENCIAR PEDIDOS
        </button>
      </Menu>
    );
}

export default AdminMenu
