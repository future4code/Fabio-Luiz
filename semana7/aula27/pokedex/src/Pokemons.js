import React from "react";
import axios from "axios";
import styled from "styled-components";
import { PokemonCard } from "./PokemonCard";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export class Pokemons extends React.Component {
  state = {
    baseUrl: "https://pokeapi.co/api/v2/",
    pokemons: [],
  };

  componentDidMount() {
    this.getAllPokemons();
    // this.addInfos()
  }

  sortAZ = (a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  };

  getAllPokemons = async () => {
    const { baseUrl, pokemons } = this.state;
    try {
      const res = await axios.get(`${baseUrl}pokemon?limit=10&offset=0`);
      let newArr = res.data.results.sort(this.sortAZ);
    //   Adicionado Id e link de imagem ao Array de Pokemons
      newArr.forEach((pok) => {
        pok.id = Number(pok.url.split("/")[pok.url.split("/").length - 2]);
        pok.imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pok.id}.png`;
      });
      this.setState({ pokemons: newArr });
    } catch (err) {
      console.log(err);
    }
  };

  detailsPage = () => {
      
  }

  render() {
    const { pokemons } = this.state;
    console.log(pokemons)
    return (
      <Wrapper>
        {pokemons.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              imgUrl={pokemon.imgUrl}
              detailsPage={this.detailsPage}
            />
          );
        })}
      </Wrapper>
    );
  }
}
