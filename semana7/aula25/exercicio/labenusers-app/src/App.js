import React from "react";
import axios from "axios";
import { AppContainer } from "./components/Others/styled";
import { SignUp } from "./components/Screens/SignUp";
import { UserList } from "./components/Screens/UserList";
import { baseUrl, axiosHeader } from "./components/Others/ApiParameters";

export default class App extends React.Component {
  state = {
    users: [],
    details: [],
    inputName: "",
    inputEmail: "",
    openDetails: false,
    signUpMode: true,
    editMode: false,
    inputSearchName: "",
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
    this.getUsers();
  };

  closeDetails = () => {
    this.setState({
      openDetails: false,
      editMode: false,
      inputName: "",
      inputEmail: "",
    });
  };

  onChangeEditMode = () => {
    const { editMode, details } = this.state;
    this.setState({
      editMode: !editMode,
      inputName: details.name,
      inputEmail: details.email,
    });
  };

  getUsers = () => {
    axios.get(baseUrl, axiosHeader).then((res) => {
      this.setState({ users: res.data });
    });
  };

  onChangeName = (e) => {
    this.setState({
      inputName: e.target.value,
    });
  };

  onChangeSearchName = (e) => {
    this.setState({
      inputSearchName: e.target.value,
    });
  };

  onChangeEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  };

  createUser = () => {
    const { inputName, inputEmail } = this.state;
    const body = {
      name: inputName,
      email: inputEmail,
    };

    axios
      .post(baseUrl, body, axiosHeader)
      .then(() => {
        alert("Usuário cadastrado");
        this.setState({ inputName: "", inputEmail: "" });
        this.getUsers();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  deleteUser = (usr) => {
    window.confirm(`Tem certeza que quer deletar o usuário ${usr.name}?`) &&
      axios
        .delete(`${baseUrl}/${usr.id}`, axiosHeader)
        .then(() => {
          this.getUsers();
          this.setState({ openDetails: false });
          alert("Usuário deletado com sucesso!");
        })
        .catch((err) => alert(err.message));
  };

  editUser = (details) => {
    const { inputName, inputEmail } = this.state;
    const body = {
      name: inputName,
      email: inputEmail,
    };
    axios
      .put(`${baseUrl}/${details.id}`, body, axiosHeader)
      .then(() => {
        if (
          window.confirm(
            `Tem certeza que quer editar o usuário ${details.name}?`
          )
        ) {
          this.getUsers();
          this.setState({
            inputName: "",
            inputEmail: "",
            editMode: false,
            openDetails: false,
          });
          alert("Usuário editado com sucesso!");
        }
      })
      .catch((err) => alert(err.message));
  };

  userDetails = (usr) => {
    this.setState({ openDetails: true });
    axios
      .get(`${baseUrl}/${usr.id}`, axiosHeader)
      .then((res) => {
        this.setState({
          details: res.data,
        });
      })
      .catch((err) => alert(err.message));
  };

  searchName = () => {
    const { inputSearchName } = this.state;
    axios
      .get(`${baseUrl}/search?name=${inputSearchName}`, axiosHeader)
      .then((res) => {
        this.setState({ users: res.data, inputSearchName: "" });
      })
      .catch((err) => alert(err.message));
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
            onChangeSearchName={this.onChangeSearchName}
            onChangeName={this.onChangeName}
            onChangeEmail={this.onChangeEmail}
            inputSearchName={this.state.inputSearchName}
            inputName={this.state.inputName}
            inputEmail={this.state.inputEmail}
            editUser={this.editUser}
            searchName={this.searchName}
            resetSearch={this.resetSearch}
          />
        )}
      </AppContainer>
    );
  }
}
