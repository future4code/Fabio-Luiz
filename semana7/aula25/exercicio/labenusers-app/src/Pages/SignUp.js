import React from 'react';
import axios from "axios";
import {Form} from '../Styled';
import { baseUrl, axiosHeader } from "../ApiParameters";

export class SignUp extends React.Component {
  state = {
    inputName: "",
    inputEmail: "",
  };

  onChangeName = (e) => {
    this.setState({
      inputName: e.target.value,
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
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  render() {
    return (
      <Form>
        <h1>Cadastrar Usuário</h1>
        <hr />
        <label>Nome</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={this.state.inputName}
          onChange={this.onChangeName}
        />
        <label>E-mail</label>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={this.state.inputEmail}
          onChange={this.onChangeEmail}
        />
        <button className="createUserBtn" onClick={this.createUser}>
          Cadastrar Usuário
        </button>
      </Form>
    );
  }
}
