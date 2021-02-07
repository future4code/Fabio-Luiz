import React from "react";
import axios from "axios";

import { FormContainer } from "./styled";
import { baseUrl } from "./../../components/ApiParameters";
import useForm from "./../../Hooks/useForm";
import { countries } from "./../../components/Infos";
import { Form, Button } from './../../components/globalStyled';

const ApplicationForm = (props) => {
  const [form, onChange, clearFields] = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const applyToTrip = (event) => {
    event.preventDefault();
    axios
      .post(`${baseUrl}/trips/${props.tripID}/apply`, form)
      .then((res) => {
        props.setOpenAlert(true);
        clearFields();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <FormContainer>
        <Form onSubmit={applyToTrip}>
          <h3>Inscrição</h3>

          <input
            type="text"
            name="name"
            value={form.name}
            placeholder={"Digite seu nome completo"}
            pattern={"^[a-zA-Z]{3,50}"}
            title={
              "O texto deve contar entre 3 e 50 caracteres (apenas letras)"
            }
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
            pattern={"^[0-9a-zA-Z.()]{30,140}"}
            title={"O texto deve contar entre 30 e 140 caracteres"}
            onChange={onChange}
            required
          />

          <input
            type="text"
            name="profession"
            value={form.profession}
            placeholder={"Escreva sua profissão"}
            pattern={"^[a-zA-Z]{10,30}"}
            title={"O texto deve contar entre 10 e 30 caracteres (apenas letras)"}
            onChange={onChange}
            required
          />

          <select name="country" value={form.country} onChange={onChange}>
            <option value="" disabled selected>
              Selecione seu país de origem
            </option>
            {countries.map((country) => {
              return <option key={country}>{country}</option>;
            })}
          </select>

          <Button marginTop="20px">CONCLUIR INSCRIÇÃO</Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default ApplicationForm;
