import React from "react";
import Header from "../../components/Header";
import HomePage from "../HomePage/HomePage";
import LoginPage from "../LoginPage/LoginPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Admin from "./../AdminPage/Admin";

import ListTripsPage from "./../ListTripsPage/ListTripsPage";
import TripDetailsPage from "./../TripDetailsPage/TripDetailsPage";
import ManageTripsPage from "./../ManageTripsPage/ManageTripsPage";
import CreateTripPage from './../CreateTripPage/CreateTripPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
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
        <Route exact path="/trips/create ">
          <CreateTripPage/>
        </Route>
        <Route exact path="/trips/manage ">
          <ManageTripsPage />
        </Route>
        <Route exact path="/trips/list">
          <ListTripsPage />
        </Route>
        <Route exact path="/trips/details">
          <TripDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
