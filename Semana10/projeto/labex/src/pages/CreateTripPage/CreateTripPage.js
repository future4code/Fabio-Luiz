import React, { useState } from "react";

import axios from "axios";
import { baseUrl, auth } from "./../../components/ApiParameters";
import { planets } from "./../../components/Infos";

import { FormContainer, Icon } from "./styled";
import { VideoBG, Form, Button } from "../../components/globalStyled";

import videoBG from "../../videos/blackSpace.mp4";
import AdminMenu from "../../components/AdminMenu/AdminMenu";
import { FaEraser } from "react-icons/fa";

import { useProtectedPage } from "./../../Hooks/useProtectedPage";
import useForm from "./../../Hooks/useForm";

import Alert from "./../../components/Alert/Alert";

export default function CreateTripPage() {
  useProtectedPage();

  const [form, onChange, clearFields] = useForm({
    name: "",
    planet: "",
    description: "",
    durationInDays: "",
  });

  const [date, setDate] = useState(new Date());
  const handleDate = (e) => {
    setDate(e.target.value);
  };

  // Setar data mínima para o dia atual (by Shrinivas Pai - https://stackoverflow.com/users/3243201/shrinivas-pai)
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + "-" + mm + "-" + dd;
  // -----------------------------------------------

  const createTrip = (event) => {
    event.preventDefault();
    const newDate = new Date(date);
    let formattedDate =
      newDate.getDate() +
      "/" +
      (newDate.getMonth() + 1) +
      "/" +
      newDate.getFullYear();

    const body = {
      name: form.name,
      planet: form.planet,
      date: formattedDate,
      description: form.description,
      durationInDays: form.durationInDays,
    };

    console.log(body);

    axios
      .post(`${baseUrl}/trips`, body, auth)
      .then((res) => {
        setOpenAlert(true);
        clearFields();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [openAlert, setOpenAlert] = useState(false);

  return (
    <>
      <Alert
        openAlert={openAlert}
        setOpenAlert={setOpenAlert}
        title="Adicionar viagem ao catálogo"
        msg="A viagem foi criada com sucesso"
      />
      <VideoBG autoPlay muted loop src={videoBG} type="video/mp4" />
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

          <select
            name="planet"
            value={form.planet}
            onChange={onChange}
            required
          >
            <option value="" disabled selected="selected">
              Selecione um planeta de destino
            </option>
            {planets.map((planetName) => {
              return <option key={planetName}>{planetName}</option>;
            })}
          </select>

          <input
            type="date"
            name="date"
            value={date}
            min={today}
            onChange={handleDate}
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

          <Button width="100%" marginTop="30px" marginBottom="30px">
            CRIAR VIAGEM
          </Button>
        </Form>
      </FormContainer>
    </>
  );
}
