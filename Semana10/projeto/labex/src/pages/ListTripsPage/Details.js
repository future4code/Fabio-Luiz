import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "./Form";
import { LoadingBox } from "./styled";
import { DetailsContainer, Button } from "./../../components/globalStyles";

import gif from "../../images/planets/EarthGif.gif";

export default function Details(props) {
  let { id } = useParams();

  let currentTrip = props.trips.filter((trip) => {
    return trip.id === id;
  });

  const [openForm, setOpenForm] = useState(false);
  const openApplicationForm = () => {
    setOpenForm(!openForm);
  };

  return (
    <>
      {id.length < 5 ? (
        <LoadingBox>
          <img src={gif} alt="" />
        </LoadingBox>
      ) : (
        <DetailsContainer>
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
                  <span>Planeta: </span>
                </div>
                <div>{currentTrip[0].planet}</div>
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
                <div>{currentTrip[0].durationInDays} dias</div>
              </div>
              <div className="container">
                <div className="label">
                  <span>Descrição: </span>
                </div>
                <div>{currentTrip[0].description}</div>
              </div>
              <Button onClick={openApplicationForm}>
                {openForm ? "FECHAR FORMULÁRIO" : "INSCREVER-SE"}
              </Button>
            </>
          )}

          {openForm && <Form id={id} />}
        </DetailsContainer>
      )}
    </>
  );
}
