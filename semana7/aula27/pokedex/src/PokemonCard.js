import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
border: 1px solid #000000;
padding: 10px;
margin: 10px;
display: flex;
flex-direction: column;
align-items: center;
`

export const PokemonCard = (props) => {
    return (
      <Card>
        <img src={props.imgUrl} alt="" />
        <p>{props.name}</p>
        <button onClick={props.detailsPage}>Detalhes</button>
      </Card>
    );
}
