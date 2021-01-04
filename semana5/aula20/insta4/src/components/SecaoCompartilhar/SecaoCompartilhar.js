import React, {Component} from 'react'
import './SecaoCompartilhar.css'

export class SecaoCompartilhar extends Component {


	render() {
		return (
		<div className={'share-container'}>
			<img alt={'Icone'} src="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" onClick={this.props.onClickIcone}/>
			<img alt={'Icone'} src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" onClick={this.props.onClickIcone}/>
			<img alt={'Icone'} src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" onClick={this.props.onClickIcone}/>
		</div>
		)}
}
