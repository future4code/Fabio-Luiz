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

const Etapa2 = () => {
    return (
      <>
        <FormContainer>
          <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
          <Form action="#">
            <ul>
              <li>
                <label>5. Qual curso?</label>
                <br />
                <input />
              </li>
              <li>
                <label>6. Qual a unidade de ensino?</label>
                <br />
                <input />
              </li>
            </ul>
            <button onClick={this.submitFinal}>Próxima etapa</button>
          </Form>
        </FormContainer>
      </>
    );
}

export default Etapa2
