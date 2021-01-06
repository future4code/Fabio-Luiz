import styled from 'styled-components';

export const TarefaList = styled.ul`
  padding: 0;
  width: 800px;
  display: flex;
  justify-content: space-around;

  div {
    max-width: 350px;
  }
`;

export const TaskBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DeleteBtn = styled.button`
  background-color: transparent;
  border: none;
  font-weight: bold;
`;

export const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
  padding-right: 10px;
`;

export const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;
