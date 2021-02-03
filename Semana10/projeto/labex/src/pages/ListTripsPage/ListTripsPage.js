import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { FaRocket } from "react-icons/fa";
import { Video, Wrapper, TextBox, Icon, SideMenu } from "./styled";
import videoBG from "../../videos/blackSpace.mp4";
import { baseUrl } from "./../../components/ApiParameters";

import Mercurio from "../../images/planets/mercury.jpg";
import Venus from "../../images/planets/venus.jpg";
import Terra from "../../images/planets/earth.jpg";
import Marte from "../../images/planets/mars.jpg";
import Jupiter from "../../images/planets/jupiter.jpg";
import Saturno from "../../images/planets/saturn.jpg";
import Urano from "../../images/planets/uranus.jpg";
import Netuno from "../../images/planets/neptune.jpg";
import Plutão from "../../images/planets/pluto.jpg";
import ApplicationForm from "./ApplicationForm";

const ListTripsPage = () => {
  const history = useHistory();
  const [trips, setTrips] = useState([]);
  const [currentTrip, setCurrentTrip] = useState({});
  const [targetTrip, setTargetTrip] = useState("");
  const [openMenu, setOpenMenu] = useState(false);

  const toggle = () => {
    setOpenMenu(!openMenu);
  };

  const getAllTrips = async () => {
    try {
      const res = await axios.get(`${baseUrl}/trips`);
      setTrips(res.data.trips);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllTrips();
  }, []);

  useEffect(() => {
    if (targetTrip) {
      getCurrentTrip();
    }
  }, [targetTrip]);

  const getTrip = (e) => {
    setTargetTrip(e.target.textContent);
    toggle();
  };

  const applyToTrip = () => {
    const body = {
      name: "",
      age: "",
      applicationText: "",
      profession: "",
      country: "",
    };
    axios.post(`${baseUrl}/${currentTrip.id}/apply`, body).then((res) => {
      console.log(res).catch((err) => {
        console.log(err);
      });
    });
  };

  let planetImg = "";
  switch (currentTrip.planet) {
    case "Mercurio":
      planetImg = <img className="planetImg" src={Mercurio} alt="" />;
      break;
    case "Venus":
      planetImg = <img className="planetImg" src={Venus} alt="" />;
      break;
    case "Marte":
      planetImg = <img className="planetImg" src={Marte} alt="" />;
      break;
    case "Jupiter":
      planetImg = <img className="planetImg" src={Jupiter} alt="" />;
      break;
    case "Saturno":
      planetImg = <img className="planetImg" src={Saturno} alt="" />;
      break;
    case "Urano":
      planetImg = <img className="planetImg" src={Urano} alt="" />;
      break;
    case "Netuno":
      planetImg = <img className="planetImg" src={Netuno} alt="" />;
      break;
    case "Plutão":
      planetImg = <img className="planetImg" src={Plutão} alt="" />;
      break;
    default:
      planetImg = <img className="planetImg" src={Terra} alt="" />;
      break;
  }

  const getCurrentTrip = () => {
    const tripIndex = trips.findIndex((trip) => trip.name === targetTrip);

    const info = {
      id: trips[tripIndex].id,
      name: trips[tripIndex].name,
      planet: trips[tripIndex].planet,
      date: trips[tripIndex].date,
      description: trips[tripIndex].description,
      durationInDays: trips[tripIndex].durationInDays,
    };

    setCurrentTrip(info);
  };

  return (
    <>
      <Video autoPlay muted loop src={videoBG} type="video/mp4" />
      <Icon onClick={toggle}>
        <FaRocket />
      </Icon>
      <SideMenu openMenu={openMenu}>
        <ul>
          {trips.map((trip) => {
            return (
              <li key={trip.id} onClick={getTrip}>
                {trip.name}
              </li>
            );
          })}
        </ul>
      </SideMenu>
      <Wrapper>
        {targetTrip ? (
          <>
            <div>
              {targetTrip && (
                <TextBox>
                  <h3>{currentTrip.name}</h3>
                  <p>{currentTrip.description}</p>
                  <div>
                    <p>Data: {currentTrip.date}</p>
                    <p>||</p>
                    <p>Duração: {currentTrip.durationInDays} dias</p>
                  </div>
                </TextBox>
              )}
            </div>
            <div>{targetTrip && planetImg}</div>
            <div>
              <ApplicationForm />
            </div>
          </>
        ) : (
          <h1>
            Selecione uma viagem no menu <FaRocket />
          </h1>
        )}
      </Wrapper>
    </>
  );
};

export default ListTripsPage;
