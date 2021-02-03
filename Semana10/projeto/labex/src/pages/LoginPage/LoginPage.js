import React, { useState, useEffect } from "react";
import { LoginContainer, FormBox, Video, Button } from "./styled";
import { useHistory } from "react-router-dom";
import space from "../../videos/space.mp4";
import { goToAdmin } from "./../Router/Coordinator";
import axios from "axios";
import { baseUrl } from "./../../components/ApiParameters";

export default function LoginPage() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token=localStorage.getItem("token")

    if(token){
      goToAdmin(history);
    }
  }, [history])

  const login = () => {
    const body = {
      email: email,
      password: password,
    };
    axios
      .post(`${baseUrl}/login`, body)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token)
        goToAdmin(history);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Video autoPlay muted loop src={space} type="video/mp4" />
      <LoginContainer>
        <FormBox>
          <h3>Autenticação</h3>
          <div>
            <label>E-mail:</label>
            <input onChange={handleEmail} />
          </div>
          <div>
            <label>Senha:</label>
            <input type="password" onChange={handlePassword} />
          </div>
        </FormBox>
        <Button onClick={login}>LOGIN</Button>
      </LoginContainer>
    </>
  );
}
