import React from "react";
import axios from "axios";
import { AppContainer } from "./components/Styles/styled";
import { SignUp } from "./components/Screens/SignUp";
import { UserList } from "./components/Screens/UserList";

export default class App extends React.Component {
  state = {
    users: [],
    inputName: "",
    inputEmail: "",
    signUpMode: false,
  };

  componentDidMount = () => {
    this.getUsers();
    console.log(`Users API: ${this.state.users}`);
  };

  changeScreenMode = () => {
    this.setState({ signUpMode: !this.state.signUpMode });
  };

  getUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "fabio-santos-epps",
          },
        }
      )
      .then((response) => {
        // console.log("Users API:", response.data);
        this.setState({ users: response.data });
        // console.log("Users State:", this.state.users);
      });
  };

  onChangeName = (e) => {
    this.setState({ inputName: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  };

  createUser = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "fabio-santos-epps",
          },
        }
      )
      .then((response) => {
        console.log(response)
        alert("Usuário cadastrado");
        this.setState({ inputName: "", inputEmail: "" });
        this.getUsers();
        // console.log(`Novo UsersArray: ${this.state.users}`);
      })
      .catch((error) => {
        console.log(error)
        alert(error.message);
      });
  };

  deleteUser = (userData) => {
    const userIndex = this.state.users.findIndex(
      (user) => userData.id === user.id
    );
    const userId = this.state.users[userIndex].id;

    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
        { headers: { Authorization: "fabio-santos-epps" } }
      )
      .then(() => {
        if (window.confirm(`Tem certeza que quer deletar o usuário ${userData.name}?`)) {
          this.getUsers();
          alert("Usuário deletado com sucesso!");
        }
      })
      .catch((error) => alert(error.message));
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
        <button className="modeBtn" onClick={this.changeScreenMode}>
          {Modo}
        </button>
        {this.state.signUpMode ? (
          <SignUp
            inputName={this.state.inputName}
            inputEmail={this.state.inputEmail}
            onChangeName={this.onChangeName}
            onChangeEmail={this.onChangeEmail}
            createUser={this.createUser}
          />
        ) : (
          <UserList
            users={this.state.users}
            getUsers={this.getUsers}
            deleteUser={this.deleteUser}
          />
        )}
      </AppContainer>
    );
  }
}
