import React from 'react'
import './IconeGeral.css'

export function IconeGeral(props) {
	return <div className="iconeGeral">
		<img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
	</div>
}
