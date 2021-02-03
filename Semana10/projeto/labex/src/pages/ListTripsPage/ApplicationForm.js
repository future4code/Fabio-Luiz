import React from 'react';
import { FormContainer, Form, Button } from "./styled";

const ApplicationForm = () => {
    return (
      <FormContainer>
        <Form>
          <h3>Manifestar Interesse</h3>
          <div>
            <label>Nome: </label>
            <input />
          </div>
          <div>
            <label>Idade: </label>
            <input />
          </div>
          <div>
            <label>Motivação: </label>
            <input />
          </div>
          <div>
            <label>Profissão: </label>
            <input />
          </div>
          <div>
            <label>País: </label>
            <input />
          </div>
          <Button>CADASTRAR PEDIDO</Button>
        </Form>
      </FormContainer>
    );
}

export default ApplicationForm
