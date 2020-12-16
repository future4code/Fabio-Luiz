import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import {IconeGeral} from '../IconeGeral/IconeGeral'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeFavoritoBranco from '../../img/bookmark-white.png'
import iconeFavoritoPreto from '../../img/bookmark.png'
import iconeCompartilhar from '../../img/share.png'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    favorito: false,
    compartilhar: false
  }

  onClickFavorito = () => {
    this.setState({favorito: !this.state.favorito})
    if(!this.state.favorito) {
      alert("Post incluído em Favoritos")
    } else {
      alert("Post excluído em Favoritos")
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhar: !this.state.compartilhar
    })
  }

  onClickCompartilhando = () => {
    console.log("teste")
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickCurtida = () => {
    this.setState({curtido: !this.state.curtido})
    if(this.state.curtido) {
      this.setState({numeroCurtidas: this.state.numeroCurtidas -1})
    } else {
      this.setState({numeroCurtidas: this.state.numeroCurtidas +1})
    }
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto 
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeFavorito

    if(this.state.favorito) {
      iconeFavorito = iconeFavoritoPreto
    } else {
      iconeFavorito = iconeFavoritoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilhar

    if(this.state.compartilhar) {
      componenteCompartilhar = <SecaoCompartilhar onClickIcone={this.onClickCompartilhando}/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <div>
          <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
          <p>{this.props.nomeUsuario}</p>
        </div>
  
        <IconeGeral
          icone={iconeFavorito}
          onClickIcone={this.onClickFavorito}
        />
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeGeral
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}
      {componenteCompartilhar}
    </div>
  }
}

export default Post