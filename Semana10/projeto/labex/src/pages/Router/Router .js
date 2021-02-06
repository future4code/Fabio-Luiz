import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../../components/Header";
import HomePage from "../HomePage/HomePage";
import LoginPage from "../LoginPage/LoginPage";
import Admin from "./../AdminPage/Admin";
import ListTripsPage from "./../ListTripsPage/ListTripsPage";
import CreateTripPage from "./../CreateTripPage/CreateTripPage";
import CandidatesPage from "./../CandidatesPage/CandidatesPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/trips/application">
          <ListTripsPage />
        </Route>
        <Route exact path="/trips/create">
          <CreateTripPage />
        </Route>
        <Route exact path="/trips/candidates">
          <CandidatesPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
