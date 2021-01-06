import React from "react";
import { Tarefa } from "./styled";

export function Task(props) {
    return (
      <Tarefa completa={props.completa} onClick={props.selectTarefa}>
        {props.texto}
      </Tarefa>
    );
}

