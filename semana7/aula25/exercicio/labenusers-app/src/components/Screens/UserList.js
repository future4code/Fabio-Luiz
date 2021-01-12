import React from "react";
import { Form, UserLine } from "../Styles/styled";

export const UserList = (props) => {
  return (
    <Form>
      <h1>Lista de usuários</h1><hr />
      {props.users.map((userData) => {
        return (
          <UserLine>
            <p key={Date.now()}>{userData.name}</p>
            <button
              className="deleteUserBtn"
              onClick={() => props.deleteUser(userData)}
            >
              X
            </button>
          </UserLine>
        );
      })}
    </Form>
  );
};
