import React, { useState } from "react";
import {
  PostContainer,
  PostHeader,
  UserPhoto,
  PostPhoto,
  PostFooter,
  CommentContainer,
} from "./styles";

import IconeComContador from "../IconeComContador/IconeComContador";
import SecaoComentario from "../SecaoComentario/SecaoComentario";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";

const Post = (props) => {
  const [curtida, setCurtida] = useState(false);
  const [numeroCurtidas, setNumeroCurtidas] = useState(0);

  const onClickCurtida = () => {
    setCurtida(!curtida);
    curtida
      ? setNumeroCurtidas(numeroCurtidas - 1)
      : setNumeroCurtidas(numeroCurtidas + 1);
  };

  let iconeCurtida;
  if (curtida) {
    iconeCurtida = iconeCoracaoPreto;
  } else {
    iconeCurtida = iconeCoracaoBranco;
  }

  const [comentando, setComentando] = useState(false);
  const [numeroComentarios, setNumeroComentarios] = useState(0);
  const [comentarios, setComentarios] = useState([]);

  const onClickComentario = () => {
    setComentando(!comentando);
  };

  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...comentarios, comentario];
    setComentarios(listaDeComentarios);
    setComentando(false);
    setNumeroComentarios(numeroComentarios + 1);
  };

  let caixaDeComentario;
  if (comentando) {
    caixaDeComentario = (
      <SecaoComentario enviarComentario={enviarComentario} />
    );
  }

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={"Imagem do usuario"} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={"Imagem do post"} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  );
};

export default Post;
