import React from "react";
import styled from "styled-components";
import { Etapa1 } from "./components/Etapa1";
import { Etapa2 } from "./components/Etapa2";
import { Etapa3 } from "./components/Etapa3";
import { EtapaFinal } from "./components/EtapaFinal";

const FormContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 40px;

  ul {
    list-style: none;
  }

  form {
    text-align: center;
  }
`;

let Btn = styled.button`
  display: initial;
`;

export default class App extends React.Component {
  state = {
    telaAtual: "Etapa 1",
    value: "",
    input: "",
    seguir: 0,
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  nextBtn = () => {
    switch (this.state.telaAtual) {
      case "Etapa 1":
        return this.state.value.startsWith("es")
          ? this.setState({ telaAtual: "Etapa 2" })
          : this.setState({ telaAtual: "Etapa 3" });
      case "Etapa 2":
      case "Etapa 3":
        return this.setState({ telaAtual: "Etapa Final" });
    }
  };

  render() {
    const TelaAtual = () => {
      switch (this.state.telaAtual) {
        case "Etapa 1":
          return (
            <Etapa1 value={this.state.value} handleChange={this.handleChange} />
          );
        case "Etapa 2":
          return <Etapa2 />;
        case "Etapa 3":
          return <Etapa3 />;
        case "Etapa Final":
          Btn = styled.button`
            display: none;
          `;
          return <EtapaFinal />;
      }
    };
    return (
      <>
        <FormContainer>
          {TelaAtual()}
          <Btn onClick={this.nextBtn}>Próxima etapa</Btn>
        </FormContainer>
      </>
    );
  }
}
