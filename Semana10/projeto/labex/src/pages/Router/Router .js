import React from "react";
import Header from "../../components/Header";
import HomePage from "../HomePage/HomePage";
import LoginPage from "../LoginPage/LoginPage";
// import { Wrapper } from "./styled";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
import Admin from './../AdminPage/Admin';
import CreateTripPage from './../CreateTripPage';
import ListTripsPage from './../ListTripsPage';
import TripDetailsPage from './../TripDetailsPage';
import ApplicationFormPage from './../ApplicationFormPage';
import ManageTripsPage from './../ManageTripsPage/ManageTripsPage';


const Router = () => {


  return (
    <BrowserRouter>
      <Route
        render={({ location }) => {
          return (
            <PageTransition
              preset={"roomToBottom"}
              transitionKey={location.pathname}
            >
              {/* <Wrapper> */}
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
                  <CreateTripPage />
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
                <Route exact path="/application-form">
                  <ApplicationFormPage />
                </Route>
              </Switch>
              {/* </Wrapper> */}
            </PageTransition>
          );
        }}
      />
    </BrowserRouter>
  );
};

export default Router;
