import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Background, InputsBox, Button } from "./../../components/globalStyles";

import { baseEndpoint } from "./../../components/GlobalInformations";
import useForm from "./../../components/hooks/useForm";
import { useProtectedPage } from "./../../components/hooks/useProtectedPage";


import bg from "../../images/standardBG.jpg";


const LoginPage = (props) => {
  useProtectedPage();
  const history = useHistory();

  const [form, onChange] = useForm({
    email: "",
    password: "",
  });

  const login = (event) => {
    event.preventDefault();
    axios
      .post(`${baseEndpoint}/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        props.toggle();
        history.replace("/admin");
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      history.replace("/admin");
    }
  }, [history]);

  return (
    <>
      <Background img={bg} />
      
          <InputsBox>
            <h1>AUTENTICAÇÃO</h1>
            <hr />
            <form onSubmit={login}>
              <div>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="e-mail"
                  required
                />
                <input
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={onChange}
                  placeholder="senha"
                  pattern={"^.{6,}"}
                  title={"A senha precisa ter pelo menos 6 caracteres"}
                  required
                />
              </div>
              <Button>ACESSAR</Button>
            </form>
          </InputsBox>
       
    </>
  );
};

export default LoginPage;
