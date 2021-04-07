import app from './app';
import signUp from './endpoints/signUp';
import login from './endpoints/login';
import getProfile from './endpoints/getProfile';
import deleteProfile from './endpoints/deleteProfile';

app.post("/user/signup", signUp)

app.post("/user/login", login);

app.get("/user/profile", getProfile)

app.delete("/user/:id", deleteProfile);