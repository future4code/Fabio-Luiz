import React from "react";
import { LoginContainer, FormBox, Video, Button } from "./styled";
import { useHistory } from "react-router-dom";
import space from "../../videos/space.mp4";
import { goToAdmin } from './../Router/Coordinator';

export default function LoginPage() {
  const history = useHistory();

  return (
    <>
      <Video autoPlay muted loop src={space} type="video/mp4" />
      <LoginContainer>
        <FormBox>
          <h3>Login</h3>
          <div>
            <label>Usuário:</label>
            <input required />
          </div>
          <div>
            <label>Senha:</label>
            <input type="password" required />
          </div>
        </FormBox>
        <Button onClick={() => goToAdmin(history)}>LOGIN</Button>
      </LoginContainer>
    </>
  );
};
