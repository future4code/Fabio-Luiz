import React from "react";
import styled from "styled-components";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import EtapaFinal from "./components/EtapaFinal";

const FormContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 40px;

  ul {
    list-style: none;
  }
`;

const Form = styled.form`
  text-align: center;
`;

export default class App extends React.Component {
  state = {
    value: 'q',
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  submitEtapas = () => {
    if (this.state.value.startsWith("es")) {
      console.log("Etapa 2");
    } else {
      console.log("Etapa 3");
    }
  };

  submitFinal = () => {};

  const Etapa1 = () => {
    if(this.state.value === false){
      // <Etapa1 />
      return <h3>Ooiii</h3>
    }
  };

  render() {
    return (
      <>
        {this.Etapa1}
      </>
    );
  }
}
