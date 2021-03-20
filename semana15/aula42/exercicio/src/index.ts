import express, { Request, Response } from "express";
import cors from "cors";
import { countries, country as stdCountry } from "./countries";

const app = express();

app.use(express.json());
app.use(cors());

// Endpoint 1
app.get("/countries/all", (req: Request, res: Response) => {
  res.status(201).send(countries);
});

// Endpoint 3
app.get("/countries/search", (req: Request, res: Response) => {
  const country: string = req.query.country as string;
  const capital: string = req.query.capital as string;
  const continent: string = req.query.continent as string;
  const myCountries = countries;

  let result: stdCountry[] = [];

  if (country) {
    result = myCountries.filter((item) => {
      return item.name
        .toLocaleLowerCase()
        .includes(country.toLocaleLowerCase());
    });
  }
  if (capital) {
    result = myCountries.filter((item) => {
      return item.capital
        .toLocaleLowerCase()
        .includes(capital.toLocaleLowerCase());
    });
  }
  if (continent) {
    result = myCountries.filter((item) => {
      return item.continent
        .toLocaleLowerCase()
        .includes(continent.toLocaleLowerCase());
    });
  }
  if (result.length) {
    res.status(201).send(result);
  } else {
    res.status(404).send("Item not found");
  }
});

// Endpoint 4
app.put("/countries/edit/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const body = req.body;
  let myCountries = countries;
  try {
    if (isNaN(id)) {
      throw new Error("Invalid id type. Please, send a number");
    }
    const index = countries.findIndex((item) => {
      return item.id === id;
    });
    if (index < 0) {
      throw new Error("Country not found. Please, try another id");
    }
    if (!body.name && !body.capital) {
      throw new Error("Invalid parameters");
    }
    if (body.name) {
      myCountries[index].name = body.name;
    }
    if (body.capital) {
      myCountries[index].capital = body.capital;
    }
    res
      .status(200)
      .send({
        message: "Country sucessfully updated!",
        country: myCountries[index],
      });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// Endpoint 2
app.get("/countries/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    if (isNaN(id)) {
      throw new Error("Invalid id type. Please, send a number");
    }
    const country = countries.find((item) => {
      return item.id === id;
    });
    if (!country) {
      throw new Error("Country not found. Plese try another id.");
    }
    res.status(200).send(country);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// Endpoint 5
app.delete("/countries/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  let errorCode = 400
  const authorization:any = req.headers.authorization
  try {
    if (!authorization || authorization.length < 10) {
      errorCode = 404
      throw new Error("Authorization denied");
    }
    if (isNaN(id)) {
      throw new Error("Invalid id type. Please, send a number");
    }
    const index = countries.findIndex((item) => {
      return item.id === id;
    });
    if (index < 0) {
      throw new Error("Country not found. Please, try another id");
    }
    countries.splice(index,1)
    res.status(200).send({ message: "Country sucessfully deleted!" });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Endpoint 6
app.post("/countries/create", (req: Request, res: Response) => {
  let errorCode = 400
  const body = req.body
  const authorization:any = req.headers.authorization
  try {
    if (!authorization || authorization.length < 10) {
      errorCode = 404
      throw new Error("Authorization denied");
    }
    const country:stdCountry = {
      id: Number(new Date()),
      name: body.name,
      capital: body.capital,
      continent: body.continent,
    };
    if(!body.name || !body.capital || !body.continent){
      throw new Error("Missed parameters. Please, check your inputs")
    }
    const checkCountry = countries.find(item=>{return item.name.toLocaleLowerCase() === body.name.toLocaleLowerCase()})
    if(checkCountry){
      throw new Error("This country is registered already. Please try another name");
    }
    res.status(200).send({
      message: "Success!",
      country: {
        id: country.id,
        name: country.name,
        capital: country.capital,
        continent: country.continent,
      },
    });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
