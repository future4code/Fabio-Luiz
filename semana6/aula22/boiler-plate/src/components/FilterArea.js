import React from 'react';
import { InputsContainer } from "./styled";

export function FilterArea(props) {
    return (
      <InputsContainer>
        <label>Filtrar tarefa</label>
        <select value={props.filtro} onChange={props.onChangeFiltro}>
          {props.tarefas.map((tarefa) => (
            <option value={tarefa.texto}>{tarefa.texto}</option>
          ))}
        </select>
        <button onClick={props.ftr}></button>
      </InputsContainer>
    );
}
