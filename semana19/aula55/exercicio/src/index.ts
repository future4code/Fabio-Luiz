import app from './app';
import signUp from './controller/signUp';
import login from './controller/login';
import { usersRouter } from './routes/usersRouter';
import { recipesRouter } from './routes/recipesRouter';

app.post("/signup", signUp)
app.post("/login", login);
app.get("/users", usersRouter)
app.post("/recipes", recipesRouter)