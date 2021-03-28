// Checar idade
export const findAge = (birthDate: string): number => {
  // // Dividindo a string de data
  // const birthArray = birthDate.split("/");
  // const userDay = Number(birthArray[0]);
  // const userMonth = Number(birthArray[1]);
  // const userYear = Number(birthArray[2]);
  const birthToNumber = Date.parse(birthDate);
  const userYear = new Date(birthToNumber).getFullYear();
  const userMonth = new Date(birthToNumber).getMonth()+1;
  const userDay = new Date(birthToNumber).getDate();

  //   Pegando os dados da data de hoje
  const todayYear = new Date().getFullYear();
  const todayMonth = new Date().getMonth()+1;
  const todayDay = new Date().getDate();
  //   Checando idade no dia de hoje
  let age: number;
  if (todayDay < userDay) {
    if (todayMonth <= userMonth) {
      return (age = todayYear - userYear - 1);
    } else {
      return (age = todayYear - userYear);
    }
  } else {
    if (todayMonth <= userMonth) {
      return (age = todayYear - userYear);
    } else {
      return (age = todayYear - userYear - 1);
    }
  }
};

// Capitalizar string
export const capitalize = (string: string) => {
  const capitalizedString = string.toLocaleLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
  return capitalizedString
}

// Checar padrão do nome - (created by: https://stackoverflow.com/users/6143820/francois-muller)
export const checkName = (stringName: string): boolean => {
  const result = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(
    stringName
  );
  return result;
};
// Regex
// ^               // start of line
// [a-zA-Z]{2,}    // will except a name with at least two characters
// \s              // will look for white space between name and surname
// [a-zA-Z]{1,}    // needs at least 1 Character
// \'?-?           // possibility of **'** or **-** for double barreled and hyphenated surnames
// [a-zA-Z]{2,}    // will except a name with at least two characters
// \s?             // possibility of another whitespace
// ([a-zA-Z]{1,})? // possibility of a second surname

// Validar CPF
export const checkCpf = (cpf: number): boolean => {
  const strCPF = cpf.toString();
  let Soma;
  let Resto;
  Soma = 0;
  if (strCPF == "00000000000") return false;

  for (let i = 1; i <= 9; i++) {
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;
  }

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(strCPF.substring(9, 10))) return false;

  Soma = 0;
  for (let i = 1; i <= 10; i++) {
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
  }

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(strCPF.substring(10, 11))) return false;
  return true;
};

export const dateToString = (date: Date) => {
  const todayYear = date.getFullYear();
  const todayMonth = date.getMonth()+1;
  const todayDay = date.getDate();
  const strDate = todayYear + "/" + todayMonth + "/" + todayDay;
  return strDate;
};
