import React from "react";

export function Etapa1(props) {
  return (
    <>
      <h3>ETAPA 1 - DADOS GERAIS</h3>
      <form action="#">
        <ul>
          <li>
            <label>1. Qual o seu nome?</label>
            <br />
            <input />
          </li>
          <li>
            <label>2. Qual a sua idade?</label>
            <br />
            <input />
          </li>
          <li>
            <label>3. Qual o seu e-mail?</label>
            <br />
            <input />
          </li>
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
