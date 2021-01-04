import React, {Component} from 'react';
import styled from "styled-components";

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

export default class Etapa1 extends Component {
    render() {
        return (
          <>
            <FormContainer>
              <h3>ETAPA 1 - DADOS GERAIS</h3>
              <Form action="#">
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
                      Value={this.props.Value}
                      onChange={this.props.HandleChange}
                    >
                      <option value="emIncompleto">
                        Ensino médio incompleto
                      </option>
                      <option value="emCompleto">Ensino médio completo</option>
                      <option value="esIncompleto">
                        Ensino superior incompleto
                      </option>
                      <option value="esCompleto">
                        Ensino superior completo
                      </option>
                    </select>
                  </li>
                </ul>
                <button onClick={this.props.SubmitEtapas}>Próxima etapa</button>
              </Form>
            </FormContainer>
          </>
        );}
}
