import React from 'react';
import { InputsContainer } from "./styled";

export function InputArea(props) {
    return (
      <InputsContainer>
        <input value={props.inputValue} onChange={props.onChangeInput} />
        <button onClick={props.criaTarefa}>{props.inputBtnTxt}</button>
        <button onClick={props.limparTarefas}>Limpar tarefas</button>
      </InputsContainer>
    );
}
