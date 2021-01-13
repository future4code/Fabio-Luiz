import React from "react";
import {
  Form,
  DeleteUserBtn,
  DetailsBox,
  DetailsInfo,
  Wrapper,
  IconsContainer,
} from "../Styles/styled";
import { UserEdition } from './UserEdition';

export class UserDetails extends React.Component {
  render() {
    return (
      <Wrapper>
        <Form>
          {this.props.editMode ? (
            <UserEdition
              saveEdition={this.props.saveEdition}
              onChangeName={this.props.onChangeName}
              onChangeEmail={this.props.onChangeEmail}
              inputName={this.props.inputName}
              inputEmail={this.props.inputEmail}
            />
          ) : (
            <DetailsBox>
              <DetailsInfo>
                <p>Nome: {this.props.details.name}</p>
                <p>E-mail: {this.props.details.email}</p>
              </DetailsInfo>
              <IconsContainer>
                <img
                  className="boxIcon"
                  onClick={this.props.onChangeEditMode}
                  src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIuMDAyIDUxMi4wMDIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyLjAwMiA1MTIuMDAyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxwYXRoIGQ9Im00NDguMzYyIDYzLjY0LTYzLjY0LTYzLjY0LTc0LjI0NiA3NC4yNDcgNTMuMDM0IDEzNy44ODZ6IiBmaWxsPSIjZmYzZTNhIi8+PHBhdGggZD0ibTQ0OC4zNjIgNjMuNjQtMTE2LjY3MiAxMTYuNjczIDEwNi4wNjYgMjEuMjEzIDc0LjI0Ni03NC4yNDZ6IiBmaWxsPSIjY2MzMjQ1Ii8+PHBhdGggZD0ibTM0LjIxNiA0MDYuNTA0LTM0LjIxNiAxMDUuNDk3IDExMi4yODQtNjkuODU2eiIgZmlsbD0iIzM3M2U5ZiIvPjxwYXRoIGQ9Im0uMDAyIDUxMi4wMDEgMTA1LjQ5Ny0zNC4yMTUtMTQuNDI4LTU2Ljg1NHoiIGZpbGw9IiMzNDBkNjYiLz48cGF0aCBkPSJtMTg4LjM3NCAzNjYuMDU1LTEyNy4yNzktNDIuNDI2LTI2Ljg3OSA4Mi44NzUgMzUuNjQxIDM1LjY0MXoiIGZpbGw9IiNmZmU3YjUiLz48cGF0aCBkPSJtNjkuODU3IDQ0Mi4xNDUgMzUuNjQyIDM1LjY0MSA4Mi44NzQtMjYuODc4LTIxLjIxMy0xMDYuMDY2eiIgZmlsbD0iI2ZmZDA2YSIvPjxwYXRoIGQ9Im0xMjQuNzM0IDM4Ny4yNjkgNjMuNjM5IDYzLjYzOSAyNDkuMzgzLTI0OS4zODItNjMuNjQtNjMuNjM5LTE2Ni4xNjkgODEuMzE2eiIgZmlsbD0iI2ZmOWEyNyIvPjxwYXRoIGQ9Im00MS4yNjYgMTg1Ljc1OGgzNTIuNjc5djkwaC0zNTIuNjc5eiIgZmlsbD0iI2ZmYjgyMCIgdHJhbnNmb3JtPSJtYXRyaXgoLjcwNyAtLjcwNyAuNzA3IC43MDcgLTk5LjQzNSAyMjEuNDU4KSIvPjwvZz48L3N2Zz4="
                />
                <DeleteUserBtn
                  onClick={() => this.props.deleteUser(this.props.details)}
                >
                  X
                </DeleteUserBtn>
              </IconsContainer>
            </DetailsBox>
          )}
          <button className="backBtn" onClick={this.props.backButton}>
            Voltar
          </button>
        </Form>
      </Wrapper>
    );
  }
}
