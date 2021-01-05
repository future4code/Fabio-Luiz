import styled from 'styled-components';

export const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

export const TaskBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DeleteBtn = styled.button`
  background-color: rgba(255, 255, 255, 0);
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
