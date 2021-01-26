import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { baseUrl, user } from "./components/Parameters";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import MatchesPage from "./MatchesPage";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  width: 56.25vh;
  box-shadow: 2px 2px 10px -2px;
  border-radius: 5px;
  background-color: white;
`;

export default function Home() {
  const [MatchList, setMatchList] = useState(false);
  let prevProfileId = null;
  const changePage = () => {
    setMatchList(!MatchList);
  };
  const [profile, setProfile] = useState({});
  const loadProfile = async () => {
    try {
      const res = await axios.get(`${baseUrl}/${user}/person`);
      setProfile(res.data.profile);
    } catch (err) {
      console.log(err);
    }
  };
  const swipeRight = () => {
    const body = {
      id: profile.id,
      choice: true,
    };
    axios
      .post(`${baseUrl}/${user}/choose-person`, body)
      .then((res) => {
        loadProfile();
        console.log("LIKE", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const swipeLeft = () => {
    const body = {
      id: profile.id,
      choice: false,
    };
    axios
      .post(`${baseUrl}/${user}/choose-person`, body)
      .then((res) => {
        loadProfile();
        console.log("DISLIKE", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <HomeContainer>
      <Header MatchList={MatchList} changePage={changePage} />
      {MatchList ? (
        <MatchesPage />
      ) : (
        <>
          <MainContent profile={profile} />
          <Footer swipeLeft={swipeLeft} swipeRight={swipeRight} />
        </>
      )}
    </HomeContainer>
  );
}
