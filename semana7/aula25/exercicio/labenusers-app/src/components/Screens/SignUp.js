import React from 'react'
import {Form} from '../Styles/styled'

export const SignUp = (props) => {
    return (
      <Form>
        <h1>Cadastrar Usuário</h1>
        <hr />
        <label>Nome</label>
        <input
          type="text"
          value={props.inputName}
          onChange={props.onChangeName}
        />
        <label>E-mail</label>
        <input
          type="text"
          value={props.inputEmail}
          onChange={props.onChangeEmail}
        />
        <button className="createUserBtn" onClick={props.createUser}>Cadastrar Usuário</button>
      </Form>
    );
}
