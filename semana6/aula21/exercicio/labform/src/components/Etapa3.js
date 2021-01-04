import React from 'react';
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

const Etapa3 = () => {
    return (
      <>
        <FormContainer>
          <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
          <Form action="#">
            <ul>
              <li>
                <label>
                  5. Por que você não terminou o curso de graduação?
                </label>
                <br />
                <input />
              </li>
              <li>
                <label>
                  6. Você fez algum curso complementar?
                </label>
                <br />
                <select name="cursoComplementar">
                  <option value="nenhum">Nenhum</option>
                  <option value="cursoTecnico">Curso técnico</option>
                  <option value="cursoIngles">Curso de inglês</option>
                </select>
              </li>
            </ul>
            <button onClick={this.submitFinal}>Próxima etapa</button>
          </Form>
        </FormContainer>
      </>
    );
}

export default Etapa3
