import React from 'react';
import './NavItem.css';

function NavItem(props) {
    return(
        <li>
            <img src={props.icone}/>
            <span>{props.item}</span>
        </li>
    )
}

export default NavItem;