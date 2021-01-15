import React from "react";
import axios from "axios";
import styled from "styled-components";
import { PokemonCard } from "./PokemonCard";
import { PokemonDetails } from "./PokemonDetails";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .titulo {
    padding: 10px;
    width: 100%;
    background-color: red;
    text-align: center;
    color: white;
  }

  input {
    height: 2rem;
    width: 50%;
    padding: 10px;
    margin: 20px;
    border-radius: 15px;
  }
`;

const Container = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  border: 2px solid black;
  height: 90%;
  overflow-y: auto;
`;

export class Pokemons extends React.Component {
  state = {
    baseUrl: "https://pokeapi.co/api/v2/",
    pokemons: [],
    openDetails: false,
    targetId: 0,
    searchName: "",
  };

  componentDidMount() {
    this.getAllPokemons();
  }

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

  render() {
    const { baseUrl, pokemons, openDetails, targetId, targetName } = this.state;
    console.log(this.state.searchName);
    let filtered = this.filtered();
    return (
      <Wrapper>
        <div className="titulo">
          <h1>Enciclopédia Pokémon</h1>
        </div>
        <input
          placeholder="Digite o nome do Pokémon que deseja buscar..."
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
      </Wrapper>
    );
  }
}
