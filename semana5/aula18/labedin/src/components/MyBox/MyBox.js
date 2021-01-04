import React from 'react';
import './MyBox.css';

function MyBox(props) {
    return(
        <div className="box-container">
                <h2>{props.titulo}</h2>
                <img src={props.icone}/>
            <p>{props.texto}</p>
        </div>
    )
}

export default MyBox;