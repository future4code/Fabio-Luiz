import app from './app';
import signUp from './endpoints/signUp';
import login from './endpoints/login';
import getProfile from './endpoints/getProfile';
import deleteProfile from './endpoints/deleteProfile';
import resetPassword from './endpoints/resetPassword';
import sendEmail from './endpoints/sendEmail';

app.post("/user/signup", signUp)

app.post("/user/login", login);

app.get("/user/profile", getProfile)

app.delete("/user/:id", deleteProfile);

app.post("/user/password/reset", resetPassword);

app.post("/challenge", sendEmail);