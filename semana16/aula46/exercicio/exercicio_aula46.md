### EXERCICIO 1)
##### A)
Utilizando o raw obtemos a resposta como virá do mySQL. Isso reperesenta um array com as informações solicitadas e alguns metadados. Devemos selecionar o primeiro índice do array para termos como retorno apenas as informações que solicitamos.

##### B)
```
const getActorById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `);

    res.status(200).send(result[0][0]);
  } catch (error) {
    res.status(500).send("Erro");
  }
};
```

##### C)
```
const getCountByGender = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await connection.raw(`
    SELECT COUNT(*) AS quantity, gender FROM Actor GROUP BY gender
  `);

    res.status(200).send(result[0]);
  } catch (error) {
    res.status(500).send("Erro");
  }
};
```

### EXERCICIO 2)
##### A)
```
const updateSalaryById = async (req: Request, res: Response): Promise<void> => {
  try {
    await connection("Actor")
      .update({
        name: req.body.name,
        salary: req.body.salary,
        birth_date: req.body.birthDate,
        gender: req.body.gender,
      })
      .where({ id: req.params.id });
    res.status(201).send("Success!");
  } catch (error) {
    res.status(500).send("Error");
  }
};
```

##### B)
```
const deleteActorById = async (req: Request, res: Response): Promise<void> => {
  try {
    await connection("Actor")
      .delete()
      .where({ id: req.body.id });
    res.status(201).send("Success!");
  } catch (error) {
    res.status(500).send("Error");
  }
};
```

##### C)
```
const getAvgSalaryByGender = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const gender = req.params.gender;
    const result = await connection.raw(
      `SELECT AVG(salary) AS avg_salary, gender FROM Actor WHERE gender='${gender}'`
    );
    res.status(200).send(result[0][0]);
  } catch (error) {
    res.status(500).send("Error");
  }
};
```

### EXERCICIO 3
##### A)
```
app.get("/actor/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `);

    res.status(200).send(result[0][0]);
  } catch (error) {
    res.status(500).send("Error");
  }
};
```

##### B)
```
app.get("/actor", async (req, res) => {
  try {
    const gender = req.query.gender
    const result = await connection.raw(`SELECT COUNT(*) as quantity, gender FROM Actor WHERE gender='${gender}'`)

    res.status(200).send(result[0][0]);
  } catch (err) {
    res.status(400).send("Error");
  }
});
```

### EXERCICIO 4
##### A)
```
app.put("/actor", async (req, res) => {
  try {
    const id = req.body.id;
    await connection("Actor")
      .update({
        name: req.body.name,
        salary: req.body.salary,
        birth_date: req.body.birthDate,
        gender: req.body.gender,
      })
      .where({ id: id });
    res.status(201).send("Success!");
  } catch (error) {
    res.status(400).send("Error");
  }
});
```

##### B)
```
app.delete("/actor/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await connection("Actor")
      .delete();
    res.status(201).send("Success!");
  } catch (error) {
    res.status(400).send("Error");
  }
});
```

### EXERCICIO 5
```
const createMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    await connection.raw(
      `
    INSERT INTO Filmes (id, title, synopsis, release_date, rating_score, playing_limit_date)
    VALUES (
        "${Date.now()}",
        "${req.body.title}",
        "${req.body.synopsis}",
        "${req.body.releaseDate}",
        "${req.body.ratingScore}",
        "${req.body.playingLimitDate}"
    )
    `
    );
    res.status(201).send("Success!");
  } catch (error) {
    res.status(400).send("Error");
  }
};

app.post("/movie", createMovie);
```

### EXERCICIO 6
```
app.get("/movies/list", async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await connection.raw(`
    SELECT * FROM Filmes LIMIT 15
  `);

    res.status(200).send(result[0]);
  } catch (error) {
    res.status(400).send("Error");
  }
});

app.get("/movies/list", getMoviesLimit15);
```

### EXERCICIO 7
```
const getMoviesByQuery = async (req: Request, res: Response): Promise<void> => {
  try {
    const query = req.query.query
    const result = await connection.raw(`
    SELECT * FROM Filmes WHERE (title LIKE '%${query}%' OR synopsis LIKE '%${query}%') ORDER BY release_date DESC
  `);

    res.status(200).send(result[0]);
  } catch (error) {
    res.status(400).send("Error");
  }
};

app.get("/movies", getMoviesByQuery);
```