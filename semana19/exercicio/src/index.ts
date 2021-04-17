import app from './app';
import signUp from './controller/signUp';
import login from './controller/login';
import getProfile from './controller/getProfile';
import deleteProfile from './controller/deleteProfile';

app.post("/signup", signUp)

app.post("/login", login);

app.get("/all", getProfile)

app.delete("/:id", deleteProfile);