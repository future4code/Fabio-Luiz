import React from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import { baseUrl, auth } from "./../../components/ApiParameters";
import { planets } from "./../../components/Infos";

import { FormContainer, Form, Video, Button, Icon } from "./styled";

import videoBG from "../../videos/blackSpace.mp4";
import AdminMenu from "../../components/AdminMenu/AdminMenu";
import { FaEraser } from "react-icons/fa";

import { useProtectedPage } from "./../../Hooks/useProtectedPage";
import useForm from "./../../Hooks/useForm";


export default function CreateTripPage() {
  useProtectedPage();
  const history = useHistory();

  const [form, onChange, clearFields] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const createTrip = (event) => {
    event.preventDefault();
    axios
      .post(`${baseUrl}/trips`, form, auth)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    clearFields();
  };

  return (
    <>
      <Video autoPlay muted loop src={videoBG} type="video/mp4" />
      <AdminMenu />
      <FormContainer>
        <Icon onClick={() => clearFields()}>
          <FaEraser />
        </Icon>
        <Form onSubmit={createTrip}>
          <h3>Nova viagem</h3>

          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="Digite o título da viagem"
            min="5"
            onChange={onChange}
            required
          />

          <select value={form.planet} onChange={onChange} required>
            <option value="" disabled selected>
              Selecione um planeta de destino
            </option>
            {planets.map((planet) => {
              return (
                <option key={planet} name={planet}>
                  {planet}
                </option>
              );
            })}
          </select>

          <input
            type="date"
            name="date"
            value={form.date}
            min="04/02/2021"
            onChange={onChange}
            required
          />

          <input
            type="text"
            name="description"
            placeholder="Escreva a descrição da viagem"
            value={form.description}
            minLength="30"
            maxLength="110"
            onChange={onChange}
            required
          />

          <input
            type="number"
            name="durationInDays"
            placeholder="Digite a duração da viagem (em dias)"
            value={form.durationInDays}
            min="50"
            onChange={onChange}
            required
          />

          <Button>CRIAR VIAGEM</Button>
        </Form>
      </FormContainer>
    </>
  );
}
