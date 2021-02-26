import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

import { Auth, BASE_URL } from "./../../Constants";
import { useProtectedPage } from "./../../hooks/useProtectedPage";

import { Container } from "./styled";
import { BsFillBackspaceFill } from "react-icons/bs";

import Header from "../../components/Header";
import Loading from "../../components/Loading";
import Post from "./../../components/Post/index";
import Comment from "./../../components/Comment/index";
import CreateComment from "./../../components/CreateComment/index";

const PostDetails = () => {
  useProtectedPage();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const [searchName, setSearchName] = useState("");
  const history = useHistory();
  let { postId } = useParams();

  const getDetails = () => {
    axios
      .get(`${BASE_URL}/posts/${postId}`, Auth)
      .then((res) => {
        setDetails(res.data.post);

        setLoading(false);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getDetails();
  }, []);

  // FILTRO DE BUSCA ---------------------------------------------------
  const filterComments = () => {
    let filteredItems = details.comments.filter((comment) =>
      comment.text
        .concat(comment.username)
        .toLowerCase()
        .includes(searchName.toLowerCase())
    );
    return filteredItems;
  };
  const filteredComments = details && details.comments && filterComments();
  // --------------------------------------------------------------------

  return (
    <>
      <Header setSearchName={setSearchName} searchName={searchName} />
      <Container>
        <div id="back-button" onClick={() => history.goBack()}>
          <BsFillBackspaceFill />
          <span>Voltar</span>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Post
              key={details.id}
              postId={details.id}
              title={details.title}
              user={details.username}
              date={details.createdAt}
              text={details.text}
              comments={details.commentsCount}
              votes={details.votesCount}
              userVoteDirection={details.userVoteDirection}
            />
            <CreateComment postId={postId} getDetails={getDetails} />
            {details.comments &&
              filteredComments
                .sort((a, b) => {
                  return b.createdAt - a.createdAt;
                })
                .map((comment) => {
                  return (
                    <Comment
                      key={comment.id}
                      postId={postId}
                      commentId={comment.id}
                      user={comment.username}
                      date={comment.createdAt}
                      text={comment.text}
                      direction={comment.userVoteDirection}
                      votes={comment.votesCount}
                    />
                  );
                })}
          </>
        )}
      </Container>
    </>
  );
};

export default PostDetails;
