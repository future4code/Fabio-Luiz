import React, { useState, useEffect } from "react";
import { LoginContainer } from "./styled";
import { useHistory } from "react-router-dom";
import space from "../../videos/space.mp4";
import { goToAdmin } from "./../Router/Coordinator";
import axios from "axios";
import { baseUrl } from "./../../components/ApiParameters";
import useForm from './../../Hooks/useForm';

import { Container,  VideoBG, Form, Button } from "./../../components/globalStyled";

export default function LoginPage() {
  const history = useHistory();
  const [openScreen, setOpenScreen]=useState(false);

  useEffect(() => {
    const token=localStorage.getItem("token")
    setOpenScreen(true)

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
         alert(err);
       });
    clearFields();
  };

  return (
    <>
      {openScreen && (
        <>
          <VideoBG autoPlay muted loop src={space} type="video/mp4" />
          <Container>
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
          </Container>
        </>
      )}
    </>
  );
}
