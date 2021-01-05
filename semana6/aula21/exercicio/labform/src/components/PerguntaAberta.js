import React from "react";

export function PerguntaAberta(props) {
  return (
    <>
      <li>
        <label>{props.pergunta}</label>
        <br />
        <input />
      </li>
    </>
  );
}
