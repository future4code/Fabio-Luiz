import React, { useState } from "react";
import axios from "axios";

import { FormContainer, Form, Button } from "./styled";
import { baseUrl } from "./../../components/ApiParameters";
import useForm from "./../../Hooks/useForm";
import { countries } from "./../../components/Infos";

const ApplicationForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [inputMotivation, setInputMotivation] = useState("");
  const [inputProfession, setInputProfession] = useState("");
  const [inputCountry, setInputCountry] = useState("");

  const handleInputName = (e) => {
    setInputName(e.target.value);
  };

  const handleInputAge = (e) => {
    setInputAge(e.target.value);
  };

  const handleInputMotivation = (e) => {
    setInputMotivation(e.target.value);
  };

  const handleInputProfession = (e) => {
    setInputProfession(e.target.value);
  };

  const handleInputCountry = (e) => {
    setInputCountry(e.target.value);
  };

  const [form, onChange, clearFields] = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const applyToTrip = (event) => {
    // const body = {
    //   name: inputName,
    //   age: inputAge,
    //   applicationText: inputMotivation,
    //   profession: inputProfession,
    //   country: inputCountry,
    // };
    event.preventDefault();
    axios
      .post(`${baseUrl}/trips/${props.tripID}/apply`, form)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    clearFields();
  };

  return (
    <FormContainer>
      <Form onSubmit={applyToTrip}>
        <h3>Candidatar-se</h3>

        <input
          type="text"
          name="name"
          value={form.name}
          placeholder={"Digite seu nome completo"}
          minLength="3"
          maxLength="50"
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
          minLength="30"
          maxLength="140"
          onChange={onChange}
          required
        />

        <input
          type="text"
          name="profession"
          value={form.profession}
          placeholder={"Escreva sua profissão"}
          minLength="10"
          maxLength="30"
          onChange={onChange}
          required
        />

        <select value={form.country}>
          <option value="" disabled selected>
            Selecione seu país de origem
          </option>
          {countries.map((country) => {
            return (
              <option key={country} name={country}>
                {country}
              </option>
            );
          })}
        </select>

        <Button>ENVIAR CANDIDATURA</Button>
      </Form>
    </FormContainer>
  );
};

export default ApplicationForm;
