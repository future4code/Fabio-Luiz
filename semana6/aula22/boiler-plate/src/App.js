import React from "react";
import "./styles.css";
import { TarefaList, TaskBox, DeleteBtn } from "./components/styled";
import { Task } from "./components/Task";
import { InputArea } from "./components/InputArea";

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: "",
    inputID: "",
    editando: false,
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
    if (this.state.editando === false) {
      if (this.state.inputValue) {
        const novaTarefa = {
          id: Date.now(),
          texto: this.state.inputValue,
          completa: false,
        };

        const copiaTarefas = [...this.state.tarefas, novaTarefa];

        this.setState({ tarefas: copiaTarefas, inputValue: "" });
      }
    } else {
      if (this.state.inputValue) {
        const copiaTarefas = this.state.tarefas.map((tarefa) => {
          if (tarefa.id === this.state.inputID) {
            const novaTarefa = {
              ...tarefa,
              texto: this.state.inputValue,
              completa: false,
            };
            return novaTarefa;
          } else {
            return tarefa;
          }
        });
        this.setState({
          tarefas: copiaTarefas,
          editando: false,
          inputValue: "",
        });
      }
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

  editarTarefa = (id) => {
    const EditarTarefa = this.state.tarefas.filter((tarefa) => {
      if (id === tarefa.id) {
        this.setState({
          inputValue: tarefa.texto,
          inputID: tarefa.id,
          editando: true,
        });
      }
    });
  };

  limparTarefas = (id) => {
    this.setState({ tarefas: [], inputValue: "" });
  };

  render() {
    let inputBtnTxt;
    if (this.state.editando) {
      inputBtnTxt = "Salvar edição";
    } else {
      inputBtnTxt = "Adicionar";
    }

    const tarefasAbertas = this.state.tarefas.filter((tarefa) => {
      return !tarefa.completa;
    });

    const tarefasFinalizadas = this.state.tarefas.filter((tarefa) => {
      return tarefa.completa;
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputArea
          inputValue={this.state.inputValue}
          onChangeInput={this.onChangeInput}
          criaTarefa={this.criaTarefa}
          limparTarefas={this.limparTarefas}
          inputBtnTxt={inputBtnTxt}
          ordernar={this.ordemCrescente}
        />
        <br />

        <TarefaList>
          <div>
            <h2>Tarefas em aberto</h2>
            {tarefasAbertas.map((tarefa) => {
              return (
                <TaskBox>
                  <Task
                    completa={tarefa.completa}
                    selectTarefa={() => this.selectTarefa(tarefa.id)}
                    texto={tarefa.texto}
                    key={tarefa.id}
                  />

                  <DeleteBtn onClick={() => this.deleteTarefa(tarefa.id)}>
                    X
                  </DeleteBtn>

                  <button onClick={() => this.editarTarefa(tarefa.id)}>
                    Editar
                  </button>
                </TaskBox>
              );
            })}
          </div>

          <div>
            <h2>Tarefas finalizadas</h2>
            {tarefasFinalizadas.map((tarefa) => {
              return (
                <TaskBox>
                  <Task
                    completa={tarefa.completa}
                    selectTarefa={() => this.selectTarefa(tarefa.id)}
                    texto={tarefa.texto}
                  />

                  <DeleteBtn onClick={() => this.deleteTarefa(tarefa.id)}>
                    X
                  </DeleteBtn>
                </TaskBox>
              );
            })}
          </div>
        </TarefaList>
        <hr />
      </div>
    );
  }
}

export default App;
