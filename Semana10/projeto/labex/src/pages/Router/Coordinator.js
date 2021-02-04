export const goToHomePage = (history) => {
  history.push("/");
};

export const goToLogin = (history) => {
    history.push("/login")
}

export const goToAdmin = (history) => {
  history.push("/admin");
};

export const goToListTripsPage = (history) => {
  history.push("/trips/application")
}

export const goToCreateTripPage = (history) => {
  history.push("/trips/create");
};

export const goToCandidatesPage = (history) => {
  history.push("/trips/candidates");
};