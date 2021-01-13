import React from "react";
import axios from "axios";
import { AppContainer } from "./components/Styles/styled";
import { SignUp } from "./components/Screens/SignUp";
import { UserList } from "./components/Screens/UserList";

export default class App extends React.Component {
  state = {
    users: [],
    details: [],
    openDetails: false,
    inputName: "",
    inputEmail: "",
    userEmail: "",
    signUpMode: false,
    editMode: false,
  };

  componentDidMount = () => {
    this.getUsers();
  };

  changeScreenMode = () => {
    this.setState({
      signUpMode: !this.state.signUpMode,
      editMode: false,
      openDetails: false,
    });
  };

  closeDetails = () => {
    this.setState({
      openDetails: !this.state.openDetails,
      editMode: false,
      inputName: "",
      inputEmail: "",
    });
  };

  onChangeEditMode = () => {
    this.setState({
      editMode: !this.state.editMode,
      inputName: this.state.details.name,
      inputEmail: this.state.details.email,
    });
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
        this.setState({ users: response.data });
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
      .then(() => {
        alert("Usuário cadastrado");
        this.setState({ inputName: "", inputEmail: "" });
        this.getUsers();
      })
      .catch((error) => {
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
        if (
          window.confirm(
            `Tem certeza que quer deletar o usuário ${userData.name}?`
          )
        ) {
          this.getUsers();
          this.setState({ openDetails: false });
          alert("Usuário deletado com sucesso!");
        }
      })
      .catch((error) => alert(error.message));
  };

  editUser = (userData) => {
    const userId = this.state.details.id;

    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
        body,
        { headers: { Authorization: "fabio-santos-epps" } }
      )
      .then(() => {
        if (
          window.confirm(
            `Tem certeza que quer editar o usuário ${userData.name}?`
          )
        ) {
          this.getUsers();
          this.onChangeEditMode();
          this.setState({
            inputName: "",
            inputEmail: "",
            editMode: false,
            openDetails: false,
          });
          alert("Usuário editado com sucesso!");
        }
      })
      .catch((error) => alert(error.message));
  };

  userDetails = (userData) => {
    this.setState({ openDetails: !this.state.openDetails });
    const userIndex = this.state.users.findIndex(
      (user) => userData.id === user.id
    );
    const userId = this.state.users[userIndex].id;
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
        { headers: { Authorization: "fabio-santos-epps" } }
      )
      .then((response) => {
        this.setState({ details: response.data });
      })
      .catch((error) => alert(error.message));
  };

  searchName = () => {
    const { inputName } = this.state;
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${inputName}`,
        { headers: { Authorization: "fabio-santos-epps" } }
      )
      .then((response) => {
        this.setState({ users: response.data, inputName:"" });
      })
      .catch((error) => alert(error.message));
  };

  resetSearch = () => {
    this.getUsers();
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
            details={this.state.details}
            getUsers={this.getUsers}
            deleteUser={this.deleteUser}
            userDetails={this.userDetails}
            openDetails={this.state.openDetails}
            backButton={this.closeDetails}
            editMode={this.state.editMode}
            onChangeEditMode={this.onChangeEditMode}
            onChangeName={this.onChangeName}
            onChangeEmail={this.onChangeEmail}
            inputName={this.state.inputName}
            inputEmail={this.state.inputEmail}
            saveEdition={this.editUser}
            searchName={this.searchName}
            resetSearch={this.resetSearch}
          />
        )}
      </AppContainer>
    );
  }
}
