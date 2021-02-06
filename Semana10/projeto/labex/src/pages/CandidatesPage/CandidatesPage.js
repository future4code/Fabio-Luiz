import React, { useState, useEffect } from "react";
import axios from "axios";

import { FaBars } from "react-icons/fa";
import videoBG from "../../videos/blackSpace.mp4";

import { baseUrl, auth } from "../../components/ApiParameters";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import {
  CandidateBox,
  Wrapper,
  MainBox,
  Icons,
  ListIcon,
  ListMenu,
} from "./styled";
import { VideoBG, Button } from "../../components/globalStyled";
import AdminMenu from "../../components/AdminMenu/AdminMenu";

import Alert from './../../components/Alert/Alert';

const CandidatesPage = () => {
  useProtectedPage();
  const [trips, setTrips] = useState([]);
  const [targetTripID, setTargetTripID] = useState("");
  const [tripDetails, setTripDetails] = useState({});
  const [openDetails, setOpenDetails] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const getAllTrips = async () => {
    try {
      const res = await axios.get(`${baseUrl}/trips`, auth);
      setTrips(res.data.trips);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getAllTrips();
  }, []);

  const getTripID = (e) => {
    const tripIndex = trips.findIndex(
      (trip) => trip.name === e.target.textContent
    );
    setTargetTripID(trips[tripIndex].id);
    setOpenMenu(false);
  };

  const getTripDetails = async (targetTripID) => {
    try {
      const res = await axios.get(`${baseUrl}/trip/${targetTripID}`, auth);
      setTripDetails(res.data.trip);
      setOpenDetails(true);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    if(targetTripID){
      getTripDetails(targetTripID);
    }
  }, [targetTripID]);

  const toggle = () => {
    setOpenMenu(!openMenu);
  };

  const approve = (id) => {
    const body = {
      approve: true,
    };
    axios
      .put(
        `${baseUrl}/trips/${targetTripID}/candidates/${id}/decide`,
        body,
        auth
      )
      .then((res) => {
        setOpenAlertApprove(true);
        getTripDetails(targetTripID);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const refuse = (id) => {
    const body = {
      approve: false,
    };
    axios
      .put(
        `${baseUrl}/trips/${targetTripID}/candidates/${id}/decide`,
        body,
        auth
      )
      .then((res) => {
        setOpenAlertRefuse(true);
        getTripDetails(targetTripID);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const deleteTrip = (targetTripID) => {
    axios
      .delete(`${baseUrl}/trips/${targetTripID}`)
      .then((res) => {
        setOpenAlertDelete(true);
        setTargetTripID("");
        getAllTrips();
      })
      .catch((err) => {
        alert(err);
      });
  };

  const [openAlertDelete, setOpenAlertDelete] = useState(false);
  const [openAlertApprove, setOpenAlertApprove] = useState(false);
  const [openAlertRefuse, setOpenAlertRefuse] = useState(false);

  return (
    <>
      <Alert
        openAlert={openAlertDelete}
        setOpenAlert={setOpenAlertDelete}
        title="Exclusão de viagem"
        msg="A viagem foi excluída com sucesso"
      />
      <Alert
        openAlert={openAlertApprove}
        setOpenAlert={setOpenAlertApprove}
        title="Aprovação de candidatura"
        msg="A candidatura foi aprovada com sucesso"
      />
      <Alert
        openAlert={openAlertRefuse}
        setOpenAlert={setOpenAlertRefuse}
        title="Aprovação de candidatura"
        msg="A candidatura foi rejeitada com sucesso"
      />
      <VideoBG autoPlay muted loop src={videoBG} type="video/mp4" />
      <AdminMenu />
      <Wrapper>
        <MainBox className="tripList">
          <ul>
            {trips.map((trip) => {
              return (
                <li key={trip.name} onClick={getTripID}>
                  {trip.name}
                </li>
              );
            })}
          </ul>
        </MainBox>
        <MainBox>
          <ListIcon>
            <FaBars onClick={toggle} />
          </ListIcon>
          <ListMenu openMenu={openMenu}>
            <ul>
              {trips.map((trip) => {
                return (
                  <li key={trip.name} onClick={getTripID}>
                    {trip.name}
                  </li>
                );
              })}
            </ul>
          </ListMenu>
          <div className="info-menu">
            {targetTripID && (
              <>
                <div className="info">
                  <span>Título: </span>
                  <p>{tripDetails.name}</p>
                </div>
                <div className="info">
                  <span>Planeta: </span>
                  <p>{tripDetails.planet}</p>
                </div>
                <div className="info">
                  <span>Data: </span>
                  <p>{tripDetails.date}</p>
                </div>
                <div className="info">
                  <span>Duração: </span>
                  <p>{tripDetails.durationInDays} dias</p>
                </div>

                <Button width="280px" onClick={() => deleteTrip(targetTripID)}>
                  CANCELAR VIAGEM
                </Button>

                <hr />
              </>
            )}
            {openDetails && <h3>Candidatos</h3>}
            <div className="candidates">
              {openDetails &&
                tripDetails.candidates.map((candidate) => {
                  return (
                    <CandidateBox>
                      <div key={candidate.id}>
                        <p>
                          <span>Nome: </span>
                          {candidate.name}
                        </p>
                        <p>
                          <span>Idade: </span>
                          {candidate.age}
                        </p>
                        <p>
                          <span>Profissão: </span>
                          {candidate.profession}
                        </p>
                        <p>
                          <span>País: </span>
                          {candidate.country}
                        </p>
                        <p>
                          <span>Motivação: </span>
                          {candidate.applicationText}
                        </p>
                      </div>
                      <Icons>
                        <img
                          onClick={() => approve(candidate.id)}
                          src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyLjA2MyA1MTIuMDYzIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMi4wNjMgNTEyLjA2MyIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Zz48Zz48ZWxsaXBzZSBjeD0iMjU2LjAzMiIgY3k9IjI1Ni4wMzIiIGZpbGw9IiMwMGRmNzYiIHJ4PSIyNTUuOTQ5IiByeT0iMjU2LjAzMiIvPjwvZz48cGF0aCBkPSJtMjU2LjAzMiAwYy0uMTE2IDAtLjIzMS4wMDQtLjM0Ny4wMDR2NTEyLjA1NWMuMTE2IDAgLjIzMS4wMDQuMzQ3LjAwNCAxNDEuMzU3IDAgMjU1Ljk0OS0xMTQuNjI5IDI1NS45NDktMjU2LjAzMnMtMTE0LjU5Mi0yNTYuMDMxLTI1NS45NDktMjU2LjAzMXoiIGZpbGw9IiMwMGFiNWUiLz48cGF0aCBkPSJtMTExLjMyNiAyNjEuMTE4IDEwMy41MjQgMTAzLjUyNGM0LjUxNSA0LjUxNSAxMS44MzYgNC41MTUgMTYuMzUxIDBsMTY5Ljk1Ny0xNjkuOTU3YzQuNTE1LTQuNTE1IDQuNTE1LTExLjgzNiAwLTE2LjM1MWwtMzAuOTM1LTMwLjkzNWMtNC41MTUtNC41MTUtMTEuODM2LTQuNTE1LTE2LjM1MSAwbC0xMjMuNjE3IDEyMy42MTVjLTQuNTE1IDQuNTE1LTExLjgzNiA0LjUxNS0xNi4zNTEgMGwtNTUuMzk3LTU1LjM5N2MtNC40MjYtNC40MjYtMTEuNTcxLTQuNTI2LTE2LjExOS0uMjI2bC0zMC44MyAyOS4xNDljLTQuNzMyIDQuNDc1LTQuODM3IDExLjk3My0uMjMyIDE2LjU3OHoiIGZpbGw9IiNmZmY1ZjUiLz48cGF0aCBkPSJtMzcwLjIyMyAxNDcuMzk4Yy00LjUxNS00LjUxNS0xMS44MzYtNC41MTUtMTYuMzUxIDBsLTk4LjE4NyA5OC4xODd2OTQuNTczbDE0NS40NzMtMTQ1LjQ3M2M0LjUxNS00LjUxNSA0LjUxNS0xMS44MzYgMC0xNi4zNTJ6IiBmaWxsPSIjZGZlYmYxIi8+PC9nPjwvc3ZnPg=="
                          alt="approve icon"
                        />
                        <img
                          onClick={() => refuse(candidate.id)}
                          src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im01MTIgMjU2YzAgMTQxLjM4NjcxOS0xMTQuNjEzMjgxIDI1Ni0yNTYgMjU2cy0yNTYtMTE0LjYxMzI4MS0yNTYtMjU2IDExNC42MTMyODEtMjU2IDI1Ni0yNTYgMjU2IDExNC42MTMyODEgMjU2IDI1NnptMCAwIiBmaWxsPSIjZDQyNDNlIi8+PHBhdGggZD0ibTI1NiA0OTUuMjgxMjVjLTYzLjkxNDA2MiAwLTEyNC4wMDM5MDYtMjQuODkwNjI1LTE2OS4xOTkyMTktNzAuMDgyMDMxLTQ1LjE5MTQwNi00NS4xOTUzMTMtNzAuMDgyMDMxLTEwNS4yODUxNTctNzAuMDgyMDMxLTE2OS4xOTkyMTlzMjQuODkwNjI1LTEyNC4wMDM5MDYgNzAuMDgyMDMxLTE2OS4xOTUzMTJjNDUuMTk1MzEzLTQ1LjE5NTMxMyAxMDUuMjg1MTU3LTcwLjA4NTkzOCAxNjkuMTk5MjE5LTcwLjA4NTkzOHMxMjQuMDAzOTA2IDI0Ljg5MDYyNSAxNjkuMTk1MzEyIDcwLjA4NTkzOGM0NS4xOTUzMTMgNDUuMTkxNDA2IDcwLjA4NTkzOCAxMDUuMjgxMjUgNzAuMDg1OTM4IDE2OS4xOTUzMTJzLTI0Ljg5MDYyNSAxMjQuMDAzOTA2LTcwLjA4NTkzOCAxNjkuMTk5MjE5Yy00NS4xOTE0MDYgNDUuMTkxNDA2LTEwNS4yODEyNSA3MC4wODIwMzEtMTY5LjE5NTMxMiA3MC4wODIwMzF6bTAgMCIgZmlsbD0iI2ZmNWE3MyIvPjxwYXRoIGQ9Im00MjcuMTE3MTg4IDE5Ni43NjU2MjVoLTM0Mi4yMzQzNzZjLTEwLjk2ODc1IDAtMTkuODU5Mzc0IDguODkwNjI1LTE5Ljg1OTM3NCAxOS44NTU0Njl2NzguNzU3ODEyYzAgMTAuOTY0ODQ0IDguODkwNjI0IDE5Ljg1NTQ2OSAxOS44NTkzNzQgMTkuODU1NDY5aDM0Mi4yMzQzNzZjMTAuOTY4NzUgMCAxOS44NTkzNzQtOC44OTA2MjUgMTkuODU5Mzc0LTE5Ljg1NTQ2OXYtNzguNzU3ODEyYzAtMTAuOTY0ODQ0LTguODkwNjI0LTE5Ljg1NTQ2OS0xOS44NTkzNzQtMTkuODU1NDY5em0wIDAiIGZpbGw9IiNlNmU2ZTYiLz48L3N2Zz4="
                          alt="refuse icon"
                        />
                      </Icons>
                    </CandidateBox>
                  );
                })}
            </div>
          </div>
        </MainBox>
      </Wrapper>
    </>
  );
};

export default CandidatesPage;
