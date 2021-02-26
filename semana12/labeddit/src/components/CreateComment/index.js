import React, { useState } from "react";
import axios from "axios";

import { Container } from "./styled";

import sendIcon from "../../images/send-icon.png";
import { Auth, BASE_URL } from "./../../Constants";

const CreateComment = (props) => {
  const [text, setText] = useState("");
  const sendComment = () => {
    const body = { text: text };
    axios
      .post(`${BASE_URL}/posts/${props.postId}/comment`, body, Auth)
      .then((res) => {
        setText('')
        props.getDetails();
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <Container>
      <textarea
        placeholder="Escreva seu comentário"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div id="send-icon" onClick={sendComment}>
        <img src={sendIcon} alt="send icon" />
        <p>Postar</p>
      </div>
    </Container>
  );
};

export default CreateComment;
