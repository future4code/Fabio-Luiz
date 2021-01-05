import React from 'react'
import './styles.css'
import { TarefaList, TaskBox, DeleteBtn, Tarefa, InputsContainer } from './components/styled';

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: "",
    filtro: "",
  };

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));
  }

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem("tarefas"));
    this.setState({ tarefas: tarefas });
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {
    if(this.state.inputValue) {
      const novaTarefa = {
        id: Date.now(),
        texto: this.state.inputValue,
        completa: false,
      };

      const copiaTarefas = [...this.state.tarefas, novaTarefa];

      this.setState({ tarefas: copiaTarefas, inputValue: "" });
    }
  };

  selectTarefa = (id) => {
    const copiaTarefas = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa,
        };
        return novaTarefa;
      } else {
        return tarefa;
      }
    });
    this.setState({ tarefas: copiaTarefas });
  };

  deleteTarefa = (id) => {
    const novoTarefas = this.state.tarefas.filter((tarefa) => {
      return id !== tarefa.id;
    });
    this.setState({ tarefas: novoTarefas });
  };

  // editarTarefa = (id) => {
  //   const novoTarefas = this.state.tarefas.filter((tarefa) => {
  //     if(id === tarefa.id) {
  //       // this.setState({inputValue: tarefa.texto})
  //     }
  //   });
  // };

  limparTarefas = (id) => {
    const novoTarefas = this.state.tarefas.filter((tarefa) => {
      return id === "000";
    });
    this.setState({ tarefas: novoTarefas, inputValue: "" });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
          <button onClick={this.limparTarefas}>Limpar tarefas</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <TaskBox>
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto}
                </Tarefa>
                <DeleteBtn onClick={() => this.deleteTarefa(tarefa.id)}>
                  X
                </DeleteBtn>
                {/* <button onClick={() => this.editarTarefa(tarefa.id)}>Editar</button> */}
              </TaskBox>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App
