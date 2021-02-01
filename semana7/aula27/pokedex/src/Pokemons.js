import React from "react";
import axios from "axios";
import styled from "styled-components";
import { PokemonCard } from "./components/PokemonCard";
import { PokemonDetails } from "./PokemonDetails";
import PokeDex1 from "./imgs/pokedex-cima.jpg";
import PokeDex2 from "./imgs/pokedex-baixo.jpg";

const Case = styled.div`
  position: absolute;
  height: 100vh;
  width: 56.25vh;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  z-index: 2;

  background-color: #c81f32;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  #cima {
    position: relative;
    top: 0;
  }
  #baixo {
    position: relative;
    bottom: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 55vh;
  max-width: 750px;
  height: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20vh 0;

  z-index: 1;

  .content-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border: 2px solid black;
    background-color: #c81f32;
  }

  .titulo {
    padding: 10px;
    width: 100%;
    background-color: red;
    text-align: center;
    color: white;
  }

  input {
    height: 2rem;
    width: 90%;
    padding: 10px;
    margin: 20px;
    border-radius: 15px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 90%;
  overflow-y: auto;

  /* width */
  ::-webkit-scrollbar {
    width: 15px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    background-color: white;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #c81f32;
    border: 2px solid rgb(50, 50, 50);
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
`;

export class Pokemons extends React.Component {
  state = {
    baseUrl: "https://pokeapi.co/api/v2/",
    pokemons: [],
    openDetails: false,
    openPokeDex: false,
    targetId: 0,
    searchName: "",
  };

  componentDidMount() {
    this.getAllPokemons();
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  sortAZ = (a, b) => {
    if (a.id < b.id) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  };

  getAllPokemons = async () => {
    const { baseUrl } = this.state;
    try {
      const res = await axios.get(`${baseUrl}pokemon?limit=151&offset=0`);
      let newArr = res.data.results.sort(this.sortAZ);
      //   Adicionado Id e link de imagem ao Array de Pokemons
      newArr.forEach((pok) => {
        // Colocando a primeira letra maiúscula
        pok.name = pok.name
          .toLowerCase()
          .split(" ")
          .map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1))
          .join(" ");
        pok.id = Number(pok.url.split("/")[pok.url.split("/").length - 2]);
        pok.imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pok.id}.png`;
      });
      this.setState({ pokemons: newArr });
    } catch (err) {
      console.log(err);
    }
  };

  openDetails = (pokemon) => {
    this.setState({
      openDetails: !this.state.openDetails,
      targetId: pokemon.id,
      targetName: pokemon.name,
    });
  };

  filtered = () => {
    const { pokemons } = this.state;
    let filter = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(this.state.searchName.toLowerCase())
    );
    return filter;
  };

  onChangeSearchName = (e) => {
    this.setState({ searchName: e.target.value });
  };

  openPokeDex = () => {
    this.setState({ openPokeDex: !this.state.openPokeDex });
    let cima = "";
    let baixo = "";
    let dex = "";

    cima = document.getElementById("cima");
    cima.style.top = "0";
    if (this.state.openPokeDex) {
      cima.style.top = parseInt(cima.style.top) + -30 + "vh";
    } else {
      cima.style.top = parseInt(cima.style.top) + 0 + "px";
    }
    cima.style.transition = "2s";

    baixo = document.getElementById("baixo");
    baixo.style.bottom = "0";

    dex = document.getElementById("poke");
    if (this.state.openPokeDex) {
      baixo.style.bottom = parseInt(baixo.style.bottom) + -30 + "vh";
      setTimeout(function() {
        dex.style.zIndex = "1";
      }, 2000);
    } else {
      baixo.style.bottom = parseInt(baixo.style.bottom) + 0 + "px";
      setTimeout(function() {
        dex.style.zIndex = "2";
      }, 2000);
    }
    baixo.style.transition = "2s";
  };

  render() {
    const { baseUrl, pokemons, openDetails, targetId, targetName } = this.state;
    let filtered = this.filtered();
    return (
      <>
        <Case id="poke">
          <img id="cima" onClick={this.openPokeDex} src={PokeDex1} alt="" />
          <img id="baixo" onClick={this.openPokeDex} src={PokeDex2} alt="" />
        </Case>
        <Wrapper>
          <div className="content-box">
            <input
              placeholder="Digite o nome do Pokémon..."
              value={this.state.searchName}
              onChange={this.onChangeSearchName}
            />
            <Container>
              {filtered.map((pokemon) => {
                return (
                  <PokemonCard
                    key={pokemon.id}
                    id={pokemon.id}
                    name={pokemon.name}
                    imgUrl={pokemon.imgUrl}
                    openDetails={() => this.openDetails(pokemon)}
                  />
                );
              })}
              {openDetails && (
                <PokemonDetails
                  baseUrl={baseUrl}
                  id={targetId}
                  name={targetName}
                  openDetails={this.openDetails}
                />
              )}
            </Container>
          </div>
        </Wrapper>
      </>
    );
  }
}
