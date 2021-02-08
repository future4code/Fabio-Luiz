import React, { useState } from "react";
import axios from "axios";

import { FormContainer } from "./styled";
import { Button } from "./../../components/globalStyles";

import useForm from "./../../components/hooks/useForm";
import { baseEndpoint, countries } from "./../../components/GlobalInformations";

import Confirm from "../../components/Alert/Confirm";

const Form = (props) => {
  const [form, onChange, clearFields] = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const sendForm = (event) => {
    // event.preventDefault();
    axios
      .post(`${baseEndpoint}/trips/${props.id}/apply`, form)
      .then((res) => {})
      .catch((err) => {
        alert(err);
      });
    clearFields();
  };

  return (
    <Confirm
      title="INSCRIÇÃO"
      description="Tem certeza que deseja inscrever-se na viagem?"
    >
      {(confirm) => (
        <>
          <FormContainer>
            <h2>Inscrição</h2>
            <form onSubmit={confirm(sendForm)}>
              <input
                type="text"
                name="name"
                value={form.name}
                placeholder={"Digite seu nome completo"}
                // pattern={"^[a-zA-Z]{3,50}"}
                // title={
                //   "O texto deve contar entre 3 e 50 caracteres (apenas letras)"
                // }
                minLength="3"
                onChange={onChange}
                required
              />
              <input
                type="number"
                name="age"
                value={form.age}
                placeholder={"Digite sua idade"}
                min="18"
                max="100"
                onChange={onChange}
                required
              />
              <textarea
                type="text"
                name="applicationText"
                value={form.applicationText}
                placeholder={"Por que quer viajar?"}
                rows="4"
                // pattern={"^[0-9a-zA-Z.()]{30,140}"}
                // title={"O texto deve contar entre 30 e 140 caracteres"}
                onChange={onChange}
                required
              />
              <input
                type="text"
                name="profession"
                value={form.profession}
                placeholder={"Escreva sua profissão"}
                // pattern={"^[a-zA-Z]{10,30}"}
                // title={
                //   "O texto deve contar entre 10 e 30 caracteres (apenas letras)"
                // }
                minLength="10"
                onChange={onChange}
                required
              />
              <select name="country" value={form.country} onChange={onChange}>
                <option value="" disabled defaultValue>
                  Selecione seu país de origem
                </option>
                {countries.map((country) => {
                  return <option key={country}>{country}</option>;
                })}
              </select>
              <Button>CONCLUIR INSCRIÇÃO</Button>
            </form>
          </FormContainer>
        </>
      )}
    </Confirm>
  );
};

export default Form;
