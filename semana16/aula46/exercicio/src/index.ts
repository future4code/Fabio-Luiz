import app from "./app";
import getActorById from "./endpoints/getActorById";
import getCountByGender from "./endpoints/getCountByGender";
import updateSalaryById from "./endpoints/updateSalaryById";
import deleteActorById from "./endpoints/deleteActorById";
import getAllActors from "./endpoints/getAllActors";
import getAvgSalaryByGender from "./endpoints/getAvgSalaryByGender";
import connection from "./connection";
import createMovie from './endpoints/createMovie';
import getMoviesLimit15 from "./endpoints/getMoviesLimit15";
import getMoviesByQuery from './endpoints/getMoviesByQuery';
import editActor from './endpoints/editActor';

app.get("/actor/list/all", getAllActors);
app.get("/actor/:id", getActorById);
app.get("/actor/count/gender", getCountByGender);
app.put("/actor/:id/edit", updateSalaryById);
app.delete("/actor/delete", deleteActorById);
app.get("/actor/salary/avg/:gender", getAvgSalaryByGender);

app.get("/actor", async (req, res) => {
  try {
    const gender = req.query.gender;
    const result = await connection.raw(
      `SELECT COUNT(*) as quantity, gender FROM Actor WHERE gender='${gender}'`
    );

    res.status(200).send(result[0][0]);
  } catch (err) {
    res.status(400).send("Error");
  }
});

app.put("/actor", editActor);

app.delete("/actor/:id", deleteActorById);

app.post("/movie", createMovie);

app.get("/movies/list", getMoviesLimit15);

app.get("/movies", getMoviesByQuery);