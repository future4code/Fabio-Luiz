import React, { useEffect } from "react";
import { LoginContainer, FormBox } from "./styled";
import { useHistory } from "react-router-dom";
import space from "../../videos/space.mp4";
import { goToAdmin } from "./../Router/Coordinator";
import axios from "axios";
import { baseUrl } from "./../../components/ApiParameters";
import useForm from './../../Hooks/useForm';

import { VideoBG, Form, Button } from "./../../components/globalStyled";

export default function LoginPage() {
  const history = useHistory();

  useEffect(() => {
    const token=localStorage.getItem("token")

    if(token){
      goToAdmin(history);
    }
  }, [history])

  const [form, onChange, clearFields] = useForm({
    email: "",
    password: "",
  });

  const login = (event) => {
    event.preventDefault();
     axios
       .post(`${baseUrl}/login`, form)
       .then((res) => {
         window.localStorage.setItem("token", res.data.token);
         goToAdmin(history);
       })
       .catch((err) => {
         console.log(err);
       });
    clearFields();
  };

  return (
    <>
      <VideoBG autoPlay muted loop src={space} type="video/mp4" />
      <LoginContainer>
        <Form onSubmit={login}>
          <h3>Autenticação</h3>
          <div>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder={"Digite seu E-mail"}
              required
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={onChange}
              placeholder={"Digite sua senha"}
              required
            />
          </div>
          <Button>LOGIN</Button>
        </Form>
      </LoginContainer>
    </>
  );
}
