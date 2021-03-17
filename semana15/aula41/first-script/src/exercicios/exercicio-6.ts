enum periods {
  AC = "AC",
  DC = "DC",
}

const era = (
  year: number = new Date().getFullYear(),
  period: periods = periods.DC
) => {
  switch (period) {
    case periods.AC:
      if (year > 100000) {
        return console.log(
          "Período muito distante. A Humanidade só surgiu em 100.000 A.C."
        );
      }
      if (year > 4000) {
        return console.log("Pré-História");
      }
      if (year <= 4000) {
        return console.log("Idade Antiga");
      }

    case periods.DC:
      if (year >= 1789) {
        return console.log("Idade Contemporânea");
      }
      if (year >= 1453) {
        return console.log("Idade Moderna");
      }
      if (year >= 476) {
        return console.log("Idade Média");
      }
      if (year < 476) {
        return console.log("Idade Antiga");
      }

    default:
      console.log("Período inválido");
  }
};
