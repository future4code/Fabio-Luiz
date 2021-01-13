import React from "react";
import { AppContainer } from "./Styled";
import { SignUp } from "./Pages/SignUp";
import { UserList } from "./Pages/UserList";

export default class App extends React.Component {
  state = {
    signUpMode: true,
  };

  changeMode = () => {
    this.setState({ signUpMode: !this.state.signUpMode });
  };

  render() {
    let Modo = "";
    if (this.state.signUpMode) {
      Modo = "Ver lista de Usuários";
    } else {
      Modo = "Cadastrar novo Usuário";
    }

    return (
      <AppContainer>
        <button className="modeBtn" onClick={this.changeMode}>
          {Modo}
        </button>
        {this.state.signUpMode ? (
          <SignUp />
        ) : (
          <UserList />
        )}
      </AppContainer>
    );
  }
}
