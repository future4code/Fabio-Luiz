import React from "react";
import {
  WhiteBg,
  Form,
  User,
  DeleteUserBtn,
  SearchBox,
  IconsContainer,
} from "../Styled";
import { UserDetails } from "./UserDetails";
import axios from "axios";
import { baseUrl, axiosHeader } from "../ApiParameters";

export class UserList extends React.Component {
  state = {
    users: [],
    details: [],
    inputName: "",
    inputEmail: "",
    openDetails: false,
    signUpMode: true,
    inputSearchName: "",
  };

  componentDidMount = () => {
    this.getUsers();
  };

  getUsers = async () => {
    try {
      const res = await axios.get(baseUrl, axiosHeader);
      this.setState({ users: res.data });
    } catch (err) {
      alert(err.message);
    }
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

  // ----------------------------------------

  userDetails = async (usr) => {
    this.setState({ openDetails: true });
    try {
      const res = await axios.get(`${baseUrl}/${usr.id}`, axiosHeader);
      this.setState({
        details: res.data,
        inputName: res.data.name,
        inputEmail: res.data.email,
      });
    } catch (err) {
      alert(err.message);
    }
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
            inputSearchName:"",
            editMode: false,
            openDetails: false,
          });
          alert("Usuário editado com sucesso!");
        }
      })
      .catch((err) => alert(err.message));
  };

  // ------------------------------------------

  onChangeSearchName = (e) => {
    this.setState({
      inputSearchName: e.target.value,
    });
  };

  searchName = async () => {
    const { inputSearchName } = this.state;
    try {
      const res = await axios.get(
        `${baseUrl}/search?name=${inputSearchName}`,
        axiosHeader
      );
      this.setState({ users: res.data, inputSearchName: "" });
    } catch (err) {
      alert(err.message);
    }
  };

  resetSearch = () => {
    this.getUsers();
  };

  // --------------------------------------------------------

  onChangeName = (e) => {
    this.setState({
      inputName: e.target.value,
    });
  };

  onChangeEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  };

  closeDetails = () => {
    this.setState({
      openDetails: false,
      inputName: "",
      inputEmail: "",
    });
  };

  render() {
    return (
      <>
        <SearchBox>
          <input
            type="text"
            value={this.state.inputSearchName}
            placeholder="Digite o nome que quer buscar"
            onChange={this.onChangeSearchName}
          />
          <section>
            <button onClick={this.searchName}>Buscar</button>
            <button onClick={this.resetSearch}>Limpar busca</button>
          </section>
        </SearchBox>
        <Form>
          <h1>Lista de usuários</h1>
          <hr />
          {this.state.users.map((usr) => {
            return (
              <User key={usr.id}>
                <p>{usr.name}</p>
                <IconsContainer>
                  <img
                    onClick={() => this.userDetails(usr)}
                    src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIuMDAyIDUxMi4wMDIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyLjAwMiA1MTIuMDAyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxnPjxwYXRoIGQ9Im02Ny42MzkgNjEuMjQxdjQyNC4wNWMwIDEwLjYxOCA4LjYwOCAxOS4yMjYgMTkuMjI2IDE5LjIyNmgzMzguMjdjMTAuNjE4IDAgMTkuMjI3LTguNjA4IDE5LjIyNy0xOS4yMjZ2LTQyNC4wNXoiIGZpbGw9IiNkZmViZmEiLz48cGF0aCBkPSJtMTAwLjYzOSA0ODUuMjkydi00MjQuMDUxaC0zM3Y0MjQuMDVjMCAxMC42MTggOC42MDggMTkuMjI2IDE5LjIyNiAxOS4yMjZoMzNjLTEwLjYxOC4wMDEtMTkuMjI2LTguNjA3LTE5LjIyNi0xOS4yMjV6IiBmaWxsPSIjYjFkYmZjIi8+PHBhdGggZD0ibTQyNS4xMzUgNy41MTZoLTMwNC40NnY1NS43MjZoMzIzLjY4N3YtMzYuNWMwLTEwLjYxOS04LjYwOS0xOS4yMjYtMTkuMjI3LTE5LjIyNnoiIGZpbGw9IiM1Y2IzZjgiLz48cGF0aCBkPSJtMTIyLjY3NSA3LjUxNmgtMzUuODFjLTEwLjYxOCAwLTE5LjIyNiA4LjYwOC0xOS4yMjYgMTkuMjI2djM2LjVoNTUuMDM2eiIgZmlsbD0iI2ZmNjU2ZiIvPjxwYXRoIGQ9Im0xMTkuODY1IDcuNTE2aC0zM2MtMTAuNjE4IDAtMTkuMjI2IDguNjA4LTE5LjIyNiAxOS4yMjZ2MzYuNWgzM3YtMzYuNWMwLTEwLjYxOSA4LjYwOC0xOS4yMjYgMTkuMjI2LTE5LjIyNnoiIGZpbGw9IiNmZjQ3NTYiLz48cGF0aCBkPSJtMjU2IDkzLjkyMWMtMzguNTY4IDAtNjkuODMzIDMxLjI2Ni02OS44MzMgNjkuODMzIDAgMjIuMjA5IDEwLjM4IDQxLjk4MiAyNi41NCA1NC43NzN2LTE3LjcyOWMwLTEzLjA0MSA5Ljc1LTIzLjcxMSAyMS42NjYtMjMuNzExaDQzLjI1NWMxMS45MTYgMCAyMS42NjYgMTAuNjcgMjEuNjY2IDIzLjcxMXYxNy43MjljMTYuMTYtMTIuNzkgMjYuNTQtMzIuNTYzIDI2LjU0LTU0Ljc3MyAwLTM4LjU2Ny0zMS4yNjYtNjkuODMzLTY5LjgzNC02OS44MzN6IiBmaWxsPSIjNWNiM2Y4Ii8+PGc+PGc+PGc+PHBhdGggZD0ibTIxNy40MTcgMTYzLjc1NWMwLTMzLjE5NCAyMy4xNjctNjAuOTU4IDU0LjIwOC02OC4wNTctNS4wMjYtMS4xNDktMTAuMjUxLTEuNzc3LTE1LjYyNS0xLjc3Ny0zOC41NjggMC02OS44MzMgMzEuMjY2LTY5LjgzMyA2OS44MzMgMCAyMi4yMDkgMTAuMzggNDEuOTgyIDI2LjU0IDU0Ljc3M3YtMTcuNzI5YzAtNy4wNzYgMi44NzUtMTMuNDUgNy40MDUtMTcuODA0LTEuNzUxLTYuMTExLTIuNjk1LTEyLjU2NC0yLjY5NS0xOS4yMzl6IiBmaWxsPSIjMDI5MGY0Ii8+PC9nPjwvZz48L2c+PGNpcmNsZSBjeD0iMjU2IiBjeT0iMTQ5Ljc4NyIgZmlsbD0iI2ZmY2ViZSIgcj0iMjUuNTMzIi8+PHBhdGggZD0ibTI1Mi40NjggMTQ5Ljc4N2MwLTEwLjE2MiA1LjkzOC0xOC45MzcgMTQuNTMzLTIzLjA0Ni0zLjMzMS0xLjU5My03LjA2MS0yLjQ4Ni0xMS0yLjQ4Ni0xNC4xMDEgMC0yNS41MzMgMTEuNDMxLTI1LjUzMyAyNS41MzNzMTEuNDMxIDI1LjUzMiAyNS41MzIgMjUuNTMyYzMuOTM5IDAgNy42NjktLjg5MyAxMS0yLjQ4Ni04LjU5NC00LjExLTE0LjUzMi0xMi44ODQtMTQuNTMyLTIzLjA0N3oiIGZpbGw9IiNmZmIxYTAiLz48cGF0aCBkPSJtMjc4LjMwNSAxNzUuMzJoLTQ0LjYwOWMtMTIuMjg5IDAtMjIuMzQzIDEwLjA1NS0yMi4zNDMgMjIuMzQzdjE5Ljc4MWMxMi4xMDUgMTAuMDc3IDI3LjY2NiAxNi4xNDQgNDQuNjQ4IDE2LjE0NHMzMi41NDMtNi4wNjYgNDQuNjQ4LTE2LjE0NHYtMTkuNzgxYy0uMDAxLTEyLjI4OC0xMC4wNTUtMjIuMzQzLTIyLjM0NC0yMi4zNDN6IiBmaWxsPSIjZmY2NTZmIi8+PHBhdGggZD0ibTIzMy4zNTMgMTk1LjY2M2MwLTkuMDE0IDUuNDEzLTE2LjgyIDEzLjE0Ni0yMC4zNDNoLTEyLjgwMmMtMTIuMjg5IDAtMjIuMzQ0IDEwLjA1NS0yMi4zNDQgMjIuMzQzdjE5Ljc4MWM2LjQ1MiA1LjM3MSAxMy44OTMgOS41ODggMjIgMTIuMzY5eiIgZmlsbD0iI2ZmNDc1NiIvPjxnIGZpbGw9IiM0M2NiOGUiPjxwYXRoIGQ9Im0xOTMuNjMxIDI3MS4yOTZoLTc0LjIwOGMtNS42NiAwLTEwLjI0OCA0LjU4OC0xMC4yNDggMTAuMjQ4djU4LjAzN2MwIDUuNjYgNC41ODggMTAuMjQ4IDEwLjI0OCAxMC4yNDhoNzQuMjA4YzUuNjYgMCAxMC4yNDgtNC41ODggMTAuMjQ4LTEwLjI0OHYtNTguMDM3YzAtNS42Ni00LjU4OC0xMC4yNDgtMTAuMjQ4LTEwLjI0OHoiLz48cGF0aCBkPSJtMTkzLjYzMSAzODMuNTU1aC03NC4yMDhjLTUuNjYgMC0xMC4yNDggNC41ODgtMTAuMjQ4IDEwLjI0OHY1OC4wMzdjMCA1LjY2IDQuNTg4IDEwLjI0OCAxMC4yNDggMTAuMjQ4aDc0LjIwOGM1LjY2IDAgMTAuMjQ4LTQuNTg4IDEwLjI0OC0xMC4yNDh2LTU4LjAzN2MwLTUuNjU5LTQuNTg4LTEwLjI0OC0xMC4yNDgtMTAuMjQ4eiIvPjwvZz48L2c+PGc+PHBhdGggZD0ibTQwNy4xMDkgMjcuODYzaC0yNDcuODQ3Yy00LjE0MyAwLTcuNSAzLjM1OC03LjUgNy41czMuMzU3IDcuNSA3LjUgNy41aDI0Ny44NDhjNC4xNDMgMCA3LjUtMy4zNTggNy41LTcuNXMtMy4zNTgtNy41LTcuNTAxLTcuNXoiLz48cGF0aCBkPSJtMjExLjM3OSAyODEuNTI4YzAtOS43ODYtNy45NjEtMTcuNzQ4LTE3Ljc0Ny0xNy43NDhoLTc0LjIwOWMtOS43ODYgMC0xNy43NDggNy45NjEtMTcuNzQ4IDE3Ljc0OHY1OC4wMzdjMCA5Ljc4NiA3Ljk2MiAxNy43NDggMTcuNzQ4IDE3Ljc0OGg3NC4yMDljOS43ODYgMCAxNy43NDctNy45NjEgMTcuNzQ3LTE3Ljc0OHptLTE1IDU4LjAzN2MwIDEuNTE1LTEuMjMyIDIuNzQ4LTIuNzQ3IDIuNzQ4aC03NC4yMDljLTEuNTE2IDAtMi43NDgtMS4yMzItMi43NDgtMi43NDh2LTU4LjAzN2MwLTEuNTE1IDEuMjMyLTIuNzQ4IDIuNzQ4LTIuNzQ4aDc0LjIwOWMxLjUxNSAwIDIuNzQ3IDEuMjMyIDIuNzQ3IDIuNzQ4eiIvPjxwYXRoIGQ9Im0xOTMuNjMyIDM3Ni4wNGgtNzQuMjA5Yy05Ljc4NiAwLTE3Ljc0OCA3Ljk2Mi0xNy43NDggMTcuNzQ4djU4LjAzN2MwIDkuNzg2IDcuOTYyIDE3Ljc0OCAxNy43NDggMTcuNzQ4aDc0LjIwOWM5Ljc4NiAwIDE3Ljc0Ny03Ljk2MiAxNy43NDctMTcuNzQ4di01OC4wMzdjMC05Ljc4Ny03Ljk2MS0xNy43NDgtMTcuNzQ3LTE3Ljc0OHptMi43NDcgNzUuNzg0YzAgMS41MTUtMS4yMzIgMi43NDgtMi43NDcgMi43NDhoLTc0LjIwOWMtMS41MTYgMC0yLjc0OC0xLjIzMy0yLjc0OC0yLjc0OHYtNTguMDM3YzAtMS41MTUgMS4yMzItMi43NDggMi43NDgtMi43NDhoNzQuMjA5YzEuNTE1IDAgMi43NDcgMS4yMzMgMi43NDcgMi43NDh6Ii8+PHBhdGggZD0ibTM5NS43MTMgMjczLjQ0N2gtMTU2LjU3MmMtNC4xNDMgMC03LjUgMy4zNTgtNy41IDcuNXMzLjM1NyA3LjUgNy41IDcuNWgxNTYuNTcyYzQuMTQzIDAgNy41LTMuMzU4IDcuNS03LjVzLTMuMzU4LTcuNS03LjUtNy41eiIvPjxwYXRoIGQ9Im0zOTUuNzEzIDMwMy4wNDdoLTE1Ni41NzJjLTQuMTQzIDAtNy41IDMuMzU4LTcuNSA3LjVzMy4zNTcgNy41IDcuNSA3LjVoMTU2LjU3MmM0LjE0MyAwIDcuNS0zLjM1OCA3LjUtNy41cy0zLjM1OC03LjUtNy41LTcuNXoiLz48cGF0aCBkPSJtMzk1LjcxMyAzMzIuNjQ3aC0xNTYuNTcyYy00LjE0MyAwLTcuNSAzLjM1OC03LjUgNy41czMuMzU3IDcuNSA3LjUgNy41aDE1Ni41NzJjNC4xNDMgMCA3LjUtMy4zNTggNy41LTcuNXMtMy4zNTgtNy41LTcuNS03LjV6Ii8+PHBhdGggZD0ibTM5NS43MTMgMzg1LjcwNmgtMTU2LjU3MmMtNC4xNDMgMC03LjUgMy4zNTgtNy41IDcuNXMzLjM1NyA3LjUgNy41IDcuNWgxNTYuNTcyYzQuMTQzIDAgNy41LTMuMzU4IDcuNS03LjVzLTMuMzU4LTcuNS03LjUtNy41eiIvPjxwYXRoIGQ9Im0zOTUuNzEzIDQxNS4zMDZoLTE1Ni41NzJjLTQuMTQzIDAtNy41IDMuMzU4LTcuNSA3LjVzMy4zNTcgNy41IDcuNSA3LjVoMTU2LjU3MmM0LjE0MyAwIDcuNS0zLjM1OCA3LjUtNy41cy0zLjM1OC03LjUtNy41LTcuNXoiLz48cGF0aCBkPSJtMzk1LjcxMyA0NDQuOTA2aC0xNTYuNTcyYy00LjE0MyAwLTcuNSAzLjM1OC03LjUgNy41czMuMzU3IDcuNSA3LjUgNy41aDE1Ni41NzJjNC4xNDMgMCA3LjUtMy4zNTggNy41LTcuNXMtMy4zNTgtNy41LTcuNS03LjV6Ii8+PHBhdGggZD0ibTE2Ni4zMjcgMjk2LjE3Mi0xMi44MzkgMTIuODQtNi43NjItNi43NjJjLTIuOTMtMi45MjktNy42NzgtMi45MjktMTAuNjA3IDBzLTIuOTI5IDcuNjc4IDAgMTAuNjA2bDEyLjA2NSAxMi4wNjVjMi45MjggMi45MjcgNy42NzcgMi45MjkgMTAuNjA3IDBsMTguMTQzLTE4LjE0M2MyLjkyOS0yLjkyOSAyLjkyOS03LjY3OCAwLTEwLjYwNnMtNy42NzctMi45MjgtMTAuNjA3IDB6Ii8+PHBhdGggZD0ibTE2Ni4zMjcgNDA4LjQzMS0xMi44MzkgMTIuODQtNi43NjMtNi43NjJjLTIuOTI4LTIuOTMtNy42NzctMi45MjktMTAuNjA2IDBzLTIuOTI5IDcuNjc4LjAwMSAxMC42MDZsMTIuMDY1IDEyLjA2NWMyLjkyNiAyLjkyOCA3LjY3NSAyLjkzIDEwLjYwNiAwbDE4LjE0My0xOC4xNDNjMi45MjktMi45MjkgMi45MjktNy42NzggMC0xMC42MDYtMi45MjktMi45MjktNy42NzctMi45MjktMTAuNjA3IDB6Ii8+PHBhdGggZD0ibTI1Ni4wMDEgMjQxLjA3MmM0Mi43NDMgMCA3Ny4zMzMtMzQuODM4IDc3LjMzMy03Ny4zMzMgMC0zNS4yODQtMjMuODM0LTY2LjA3Ny01Ny45NTktNzQuODg0LTQuMDE0LTEuMDM0LTguMTAzIDEuMzc4LTkuMTM2IDUuMzg4LTEuMDM1IDQuMDExIDEuMzc3IDguMTAxIDUuMzg4IDkuMTM2IDI3LjUgNy4wOTcgNDYuNzA3IDMxLjkxNyA0Ni43MDcgNjAuMzU5IDAgMTIuNTc1LTMuNzU1IDI0LjI4My0xMC4xODYgMzQuMDg3di0uMTc5YzAtMTQuNzI4LTEwLjcyNy0yNi45OS0yNC43NzYtMjkuNDA0IDMuNTcyLTUuMjc2IDUuNjYtMTEuNjM1IDUuNjYtMTguNDcyIDAtMTguMjE0LTE0LjgxOC0zMy4wMzMtMzMuMDMyLTMzLjAzMy0xOC4yMTUgMC0zMy4wMzMgMTQuODE4LTMzLjAzMyAzMy4wMzMgMCA2LjgzNyAyLjA4OCAxMy4xOTYgNS42NiAxOC40NzItMTQuMDQ5IDIuNDE1LTI0Ljc3NiAxNC42NzctMjQuNzc2IDI5LjQwNHYuMTc5Yy02LjQzLTkuODA0LTEwLjE4Ni0yMS41MTItMTAuMTg2LTM0LjA4NyAwLTI4LjQ0MiAxOS4yMDctNTMuMjYzIDQ2LjcwOC02MC4zNTkgNC4wMTEtMS4wMzUgNi40MjMtNS4xMjUgNS4zODgtOS4xMzYtMS4wMzQtNC4wMS01LjEyNy02LjQyMy05LjEzNi01LjM4OC0zNC4xMjYgOC44MDctNTcuOTYgMzkuNi01Ny45NiA3NC44ODQuMDAyIDQyLjM4MyAzNC40NDQgNzcuMzMzIDc3LjMzNiA3Ny4zMzN6bTAtMTA5LjMzM2M5Ljk0MyAwIDE4LjAzMiA4LjA4OSAxOC4wMzIgMTguMDMzcy04LjA4OSAxOC4wMzMtMTguMDMyIDE4LjAzMy0xOC4wMzMtOC4wODktMTguMDMzLTE4LjAzMyA4LjA5LTE4LjAzMyAxOC4wMzMtMTguMDMzem0tMzcuMTQ4IDY1LjkwOGMwLTguMTg1IDYuNjU5LTE0Ljg0MyAxNC44NDQtMTQuODQzaDQ0LjYwOWM4LjE4NSAwIDE0Ljg0MyA2LjY1OSAxNC44NDMgMTQuODQzdjE2LjExM2MtMTEuMTMxIDguMjg4LTI0LjMzIDEyLjMxMi0zNy4xNDcgMTIuMzEyLTEyLjg0NSAwLTI2LjA1MS00LjA0OS0zNy4xNDgtMTIuMzEydi0xNi4xMTN6Ii8+PHBhdGggZD0ibTYwLjE0IDI2LjcyNnY0NTguNTVjMCAxNC43MzcgMTEuOTg5IDI2LjcyNiAyNi43MjYgMjYuNzI2aDMzOC4yNzFjMTQuNzM3IDAgMjYuNzI3LTExLjk4OSAyNi43MjctMjYuNzI2di0yMTEuNzc1YzAtNC4xNDItMy4zNTctNy41LTcuNS03LjVzLTcuNSAzLjM1OC03LjUgNy41djIxMS43NzVjMCA2LjQ2Ni01LjI2MSAxMS43MjYtMTEuNzI3IDExLjcyNmgtMzM4LjI3MmMtNi40NjYgMC0xMS43MjYtNS4yNi0xMS43MjYtMTEuNzI2di00MTQuNTVoMzYxLjcyM3YxNjcuNzc1YzAgNC4xNDIgMy4zNTcgNy41IDcuNSA3LjVzNy41LTMuMzU4IDcuNS03LjV2LTIxMS43NzVjMC0xNC43MzctMTEuOTg5LTI2LjcyNi0yNi43MjYtMjYuNzI2aC0zMzguMjcxYy0xNC43MzYgMC0yNi43MjUgMTEuOTg5LTI2LjcyNSAyNi43MjZ6bTcwLjAzNS0xMS43MjZoMjk0Ljk2MWM2LjQ2NiAwIDExLjcyNyA1LjI2IDExLjcyNyAxMS43MjZ2MjloLTMwNi42ODh6bS0xNSA0MC43MjZoLTQwLjAzNXYtMjljMC02LjQ2NiA1LjI1OS0xMS43MjYgMTEuNzI1LTExLjcyNmgyOC4zMXoiLz48L2c+PC9nPjwvc3ZnPg=="
                    alt="Detalhes do usuário"
                  />
                  <DeleteUserBtn onClick={() => this.deleteUser(usr)}>
                    X
                  </DeleteUserBtn>
                </IconsContainer>
              </User>
            );
          })}
        </Form>
        {this.state.openDetails && (
          <>
            <WhiteBg></WhiteBg>
            <UserDetails
              details={this.state.details}
              editUser={this.editUser}
              deleteUser={this.deleteUser}
              closeDetails={this.closeDetails}
              onChangeName={this.onChangeName}
              onChangeEmail={this.onChangeEmail}
              inputName={this.state.inputName}
              inputEmail={this.state.inputEmail}
            />
          </>
        )}
      </>
    );
  }
}
