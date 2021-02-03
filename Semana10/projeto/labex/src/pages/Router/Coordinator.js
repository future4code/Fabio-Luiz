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
  history.push("/trips/list");
};

export const goToCreateTripsPage = (history) => {
  history.push("/trips/create");
};

export const goToManageTripsPage = (history) => {
  history.push("/trips/manage");
};

export const goToTripDetailsPage = (history) => {
  history.push("/trips/details");
};