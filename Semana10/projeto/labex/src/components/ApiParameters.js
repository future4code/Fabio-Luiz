export const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio-epps";

export const auth = {
  headers: {
    auth: localStorage.getItem("token"),
  },
};
