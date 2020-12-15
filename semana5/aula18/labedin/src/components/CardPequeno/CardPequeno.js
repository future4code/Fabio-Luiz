import React from 'react';
import './CardPequeno.css';

function CardPequeno(props) {
    return(
        <div className="smallcard-container">
            <div>
                <h4>{props.titulo}</h4>
                <img src={props.icone}/>
            </div>
            
            <p>{props.texto}</p>
        </div>
    )
}

export default CardPequeno;