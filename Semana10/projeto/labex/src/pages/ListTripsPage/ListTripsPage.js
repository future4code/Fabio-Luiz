import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { FaRocket } from "react-icons/fa";
import { Video, Wrapper, TextBox, Icon, SideMenu, OpenBox } from "./styled";
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
        <div>
          <p>Menu</p>
        </div><div>
        <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIuMDA5IDUxMi4wMDkiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyLjAwOSA1MTIuMDA5IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjQuMzk0IiB4Mj0iNTA2LjA5OCIgeTE9IjUwNy42MTYiIHkyPSI1LjkxMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNTU1OGZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDBjMGZmIi8+PC9saW5lYXJHcmFkaWVudD48Zz48Zz48cGF0aCBkPSJtMzkuNDA3IDQwOC45NjIgMjEuMjE0LTIxLjIxM2M1Ljg1OC01Ljg1OCA1Ljg1OC0xNS4zNTUgMC0yMS4yMTMtNS44NTYtNS44NTgtMTUuMzU0LTUuODU3LTIxLjIxMyAwbC0yMS4yMTQgMjEuMjEzYy01Ljg1OCA1Ljg1OC01Ljg1OCAxNS4zNTUgMCAyMS4yMTNzMTUuMzU1IDUuODU4IDIxLjIxMyAwem02My42NCAwYy01Ljg1Ny01Ljg1OC0xNS4zNTUtNS44NTgtMjEuMjEzIDBsLTc3LjQ0IDc3LjQ0Yy01Ljg1OCA1Ljg1OC01Ljg1OCAxNS4zNTUgMCAyMS4yMTMgNS44NTcgNS44NTcgMTUuMzU1IDUuODU4IDIxLjIxMyAwbDc3LjQ0LTc3LjQ0YzUuODU5LTUuODU4IDUuODU5LTE1LjM1NSAwLTIxLjIxM3ptNDA3LjI5NC0zOTQuNTY2Yy0uOTQzLTYuNi02LjEyOS0xMS43ODUtMTIuNzI5LTEyLjcyOC0xLjYxMy0uMjMtNDAuMTI5LTUuNTM1LTkzLjYwMiA0LjA2My02OS4zNzMgMTIuNDUyLTEzMy41MDIgNDQuODUxLTE4NC4yOTEgOTUuNjQtMTMuNTQ2IDEzLjU0Ni0yOC40NjEgMzAuMTEtNDMuMTc0IDQ3Ljk0LTE4LjE4Mi00LjExOC03Ny45NzQtMTEuNjQ2LTEzNy4xMzcgNDcuNTE5LTUyLjQzMSA1Mi40My0yMi41MTQgODMuNTUzLTIxLjIxNCA4NC44NTMgMi44MTMgMi44MTMgNi42MjggNC4zOTQgMTAuNjA2IDQuMzk0czcuNzk0LTEuNTgxIDEwLjYwNi00LjM5M2M4LjUtOC41IDE5LjgtMTMuMTgxIDMxLjgyLTEzLjE4MXMyMy4zMiA0LjY4MSAzMS44MTkgMTMuMThsMzEuODIxIDMxLjgyLTEwLjYwNyAxMC42MDdjLTE3LjU4NiAxNy41ODQtMTcuNTkgNDYuMDUxIDAgNjMuNjM5IDE3LjU4NCAxNy41ODUgNDYuMDUyIDE3LjU4OSA2My42MzkgMGwxMC42MDctMTAuNjA3czMxLjc3OCAzMS43NzkgMzEuODM2IDMxLjgzNmMxNy41MjkgMTcuNTQ3IDE3LjUyNCA0Ni4wODMtLjAxNiA2My42MjMtMi44MTMgMi44MTMtNC4zOTQgNi42MjktNC4zOTQgMTAuNjA3IDAgMy45NzkgMS41OCA3Ljc5MyA0LjM5NCAxMC42MDcuNjk4LjY5OCAxMC4wMTYgOS42NjcgMjYuNjMgOS42NjcgMTQuMjkgMCAzMy45NzktNi42MzcgNTguMjIzLTMwLjg4MSA1OS4xNjQtNTkuMTY0IDUxLjYzNi0xMTguOTU1IDQ3LjUxOS0xMzcuMTM4IDE3LjgzMS0xNC43MTMgMzQuMzk1LTI5LjYyOCA0Ny45NDEtNDMuMTc1IDUwLjY4NS01MC42ODUgODMuMTczLTExNC44MzEgOTUuNjQtMTg0LjI5MSA5LjU5Ny01My40NyA0LjI5NC05MS45ODcgNC4wNjMtOTMuNjAxem0tNDM5LjExMyAyMjQuMTA2Yy0xMC42NDYgMC0yMC45NTIgMi4yMDMtMzAuMzk5IDYuMzkzIDIuOTMtNi45NjEgOC44ODEtMTUuOTQgMTkuNzkzLTI2Ljg1MyAyNS44NTEtMjUuODUxIDU4LjIyOC00Mi44MTggOTQuMjctNDEuMzM1LTE4LjQ4NiAyNC40MzgtMzUuMjYyIDQ5LjU0OS00Ni44MjkgNzEuNDUxLTExLjExOC02LjI4OS0yMy43MTQtOS42NTYtMzYuODM1LTkuNjU2em05NS40NTggMTI4LjAzNGMtNS44NiA1Ljg2MS0xNS4zNDkgNS44NjItMjEuMjEyIDAtNS44NDktNS44NDktNS44NDktMTUuMzY1IDAtMjEuMjEzbDg0Ljg1My04NC44NTNjNS44NDctNS44NDggMTUuMzY0LTUuODUgMjEuMjE0IDAgNS44NDkgNS44NDkgNS44NDkgMTUuMzY1IDAgMjEuMjE0em0xMjcuMjggODQuODUzYy0xMC45MzkgMTAuOTM5LTE5LjkzNSAxNi44OTItMjYuOTAyIDE5LjgxNCA5LjUwNy0yMS40OTIgOC40MzUtNDYuNTctMy4yMTYtNjcuMjU0IDIxLjkyMy0xMS41NzggNDcuMDYyLTI4LjM3NSA3MS41MjItNDYuODgyLjg2MSAyMC43ODQtNC4zMTQgNTcuMjMyLTQxLjQwNCA5NC4zMjJ6bTk1LjQ2LTE4MC4zMTNjLTQzLjIxIDQzLjIxLTEwNC42OSA4OS4yMjItMTQ1LjI4OCAxMDkuMjcxbC0yNC40MTgtMjQuNDE4IDUzLjAzMy01My4wMzNjMTcuNTg2LTE3LjU4NSAxNy41OS00Ni4wNTIgMC02My42NC0xNy41NDYtMTcuNTQ2LTQ2LjA5Ni0xNy41NDMtNjMuNjQgMGwtNTMuMDMzIDUzLjAzMy0yNC40MTctMjQuNDE3YzIwLjA0Ny00MC41OTcgNjYuMDYtMTAyLjA3NyAxMDkuMjctMTQ1LjI4OSAzNy42NjgtMzcuNjY4IDgyLjMyNy02NC4xNTQgMTMzLjEwNC03OS4wMjlsOTQuMzA0IDk0LjMwNGMtMTIuNDY3IDQyLjMyMi0zNS44MjcgOTAuMTMtNzguOTE1IDEzMy4yMTh6bTg3LjA2LTE2Ny40OTgtNjguMTQ0LTY4LjE0NGMzMi4yNzktNS44OTEgNTguODQ0LTUuNzk5IDczLjI2OS01LjA0MS43NDMgMTQuMzY3Ljc5MyA0MC44MDUtNS4xMjUgNzMuMTg1em0tMTYxLjMwNiA4LjM5OWMtMjMuNDQ4IDIzLjQ0Ny0yMy40NTMgNjEuNDAyIDAgODQuODUzIDIzLjM5MSAyMy4zOTEgNjEuNDU0IDIzLjM5NiA4NC44NTMgMCAyMy4zOTQtMjMuMzk0IDIzLjM5NC02MS40NTkgMC04NC44NTQtMjMuNDQ4LTIzLjQ0NS02MS40MDEtMjMuNDUxLTg0Ljg1My4wMDF6bTYzLjY0IDYzLjY0Yy0xMS42OTcgMTEuNjk3LTMwLjcyOSAxMS42OTctNDIuNDI3IDAtMTEuNzI0LTExLjcyNC0xMS43MjctMzAuNzAxIDAtNDIuNDI2IDExLjcyNC0xMS43MjQgMzAuNy0xMS43MjUgNDIuNDI3IDAgMTEuNjk2IDExLjY5NyAxMS42OTYgMzAuNzI5IDAgNDIuNDI2em0tMjU0LjU1OSAyNzUuNzcyLTIxLjIxMyAyMS4yMTNjLTUuODU4IDUuODU4LTUuODU4IDE1LjM1NSAwIDIxLjIxMyA1Ljg1NyA1Ljg1NyAxNS4zNTUgNS44NTggMjEuMjEzIDBsMjEuMjEzLTIxLjIxM2M1Ljg1OC01Ljg1OCA1Ljg1OC0xNS4zNTUgMC0yMS4yMTMtNS44NTgtNS44NTktMTUuMzU2LTUuODU5LTIxLjIxMyAweiIgZmlsbD0idXJsKCNTVkdJRF8xXykiLz48L2c+PC9nPjwvc3ZnPg==" />
      </div></Icon>
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
                  <p>
                    <span>Planeta: </span>
                    {currentTrip.planet}
                  </p>
                  <p>
                    <span>Data: </span>
                    {currentTrip.date}
                  </p>
                  <p>
                    <span>Duração: </span>
                    {currentTrip.durationInDays} dias
                  </p>
                  <p>
                    <span>Descrição: </span>
                    {currentTrip.description}
                  </p>
                </TextBox>
              )}
            </div>
            <div>{targetTrip && planetImg}</div>
            <div>
              <ApplicationForm tripID={currentTrip.id} />
            </div>
          </>
        ) : (
          <OpenBox>
            <h1>
              Selecione uma viagem no menu <FaRocket />
            </h1>
          </OpenBox>
        )}
      </Wrapper>
    </>
  );
};

export default ListTripsPage;
