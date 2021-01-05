import React from "react";
import { PerguntaAberta } from "./PerguntaAberta";

export function Etapa1(props) {
  return (
    <>
      <h3>ETAPA 1 - DADOS GERAIS</h3>
      <form action="#">
        <ul>
          <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
          <PerguntaAberta pergunta={"2. Qual a sua idade?"} />
          <PerguntaAberta pergunta={"3. Qual o seu e-mail?"} />
          <li>
            <label>4. Qual a sua escolaridade?</label>
            <br />
            <select
              id="qualification"
              name="qualification"
              value={props.value}
              onChange={props.handleChange}
            >
              <option value="emIncompleto">Ensino médio incompleto</option>
              <option value="emCompleto">Ensino médio completo</option>
              <option value="esIncompleto">Ensino superior incompleto</option>
              <option value="esCompleto">Ensino superior completo</option>
            </select>
          </li>
        </ul>
      </form>
    </>
  );
}
