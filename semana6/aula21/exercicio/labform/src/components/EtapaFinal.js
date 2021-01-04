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

const EtapaFinal = () => {
    return (
      <>
        <FormContainer>
          <h3>O FORMULÁRIO ACABOU</h3>
          <Form action="#">
            <p>Muito obrigado por participar! Entraremos em contato!</p>
          </Form>
        </FormContainer>
      </>
    );
}

export default EtapaFinal
