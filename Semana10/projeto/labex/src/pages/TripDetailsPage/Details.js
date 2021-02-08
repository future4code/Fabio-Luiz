import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseEndpoint, auth } from "./../../components/GlobalInformations";
import { useProtectedPage } from "./../../components/hooks/useProtectedPage";
import { DetailsContainer, Button } from "./../../components/globalStyles";
import { ButtonBox } from "./styled";

import Confirm from "../../components/Alert/Confirm";

export default function Details(props) {
  useProtectedPage();
  let { id } = useParams();

  let currentTrip = props.trips.filter((trip) => {
    return trip.id === id;
  });

  const [candidates, setCandidates] = useState([]);

  const getTripDetails = async () => {
    try {
      const res = await axios.get(`${baseEndpoint}/trip/${id}`, auth);
      setCandidates(res.data.trip.candidates);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getTripDetails();
  }, [id]);

  const deleteTrip = () => {
    axios
      .delete(`${baseEndpoint}/trips/${id}`)
      .then((res) => {
        props.getAllTrips();
      })
      .catch((err) => {
        alert(err);
      });
  };

  const approveCandidate = (candidate) => {
    const body = { approve: true };
    axios
      .put(
        `${baseEndpoint}/trips/${id}/candidates/${candidate}/decide`,
        body,
        auth
      )
      .then((res) => {
        getTripDetails();
      })
      .catch((err) => {
        alert(err);
      });
  };

  const refuseCandidate = (candidate) => {
    const body = { approve: false };
    axios
      .put(
        `${baseEndpoint}/trips/${id}/candidates/${candidate}/decide`,
        body,
        auth
      )
      .then((res) => {
        getTripDetails();
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Confirm
      title="CONFIRMAÇÃO"
      description="Tem certeza que deseja prosseguir a operação?"
    >
      {(confirm) => (
        <>
          <DetailsContainer id={id}>
            {currentTrip.length > 0 && (
              <>
                <div className="container">
                  <div className="label">
                    <span>Nome: </span>
                  </div>
                  <div>{currentTrip[0].name}</div>
                </div>
                <div className="container">
                  <div className="label">
                    <div>
                      <span>Planeta: </span>
                    </div>
                  </div>
                  {currentTrip[0].planet}
                </div>
                <div className="container">
                  <div className="label">
                    <span>Data: </span>
                  </div>
                  <div>{currentTrip[0].date}</div>
                </div>
                <div className="container">
                  <div className="label">
                    <span>Duração: </span>
                  </div>
                  {currentTrip[0].durationInDays} dias
                </div>
                <div className="container">
                  <div className="label">
                    <span>Descrição: </span>
                  </div>
                  <div>{currentTrip[0].description}</div>
                </div>
                <Button onClick={confirm(deleteTrip)}>EXCLUIR VIAGEM</Button>
                <hr />
              </>
            )}
            {candidates.length > 0 && (
              <>
                <h1>Candidatos</h1>
                {candidates.map((candidate) => {
                  return (
                    <div key={candidate.id}>
                      <div className="container">
                        <div className="label">
                          <span>Nome: </span>
                        </div>
                        <div>{candidate.name}</div>
                      </div>
                      <div className="container">
                        <div className="label">
                          <span>Idade: </span>
                        </div>
                        <div>{candidate.age}</div>
                      </div>
                      <div className="container">
                        <div className="label">
                          <span>País: </span>
                        </div>
                        <div>{candidate.country}</div>
                      </div>
                      <div className="container">
                        <div className="label">
                          <span>Profissão: </span>
                        </div>
                        <div>{candidate.profession}</div>
                      </div>
                      <div className="container">
                        <div className="label">
                          <span>Motivação: </span>
                        </div>
                        <div>{candidate.applicationText}</div>
                      </div>

                      <ButtonBox>
                        <Button
                          width="100%"
                          onClick={() => approveCandidate(candidate.id)}
                        >
                          APROVAR
                        </Button>
                        <Button
                          width="100%"
                          onClick={() => refuseCandidate(candidate.id)}
                        >
                          REJEITAR
                        </Button>
                      </ButtonBox>
                      <hr />
                    </div>
                  );
                })}
              </>
            )}
          </DetailsContainer>
        </>
      )}
    </Confirm>
  );
}
