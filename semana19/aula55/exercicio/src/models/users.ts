export type user = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: userRoles;
};

export type userReturn = {
  user_id: string;
  name: string;
  email: string;
};

export type loginInputs = {
  email: string;
  password: string;
}

export enum loginBody {
  email = "email",
  password = "password",
}

export enum userRoles {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}

export const strToRole = (role: string):userRoles => {
  switch (role.toUpperCase()) {
    case "NORMAL":
      return userRoles.NORMAL;
    case "ADMIN":
      return userRoles.ADMIN;
    default:
      throw new Error("O user role precisa ser 'NORMAL' ou 'ADMIN'");
  }
}

export type signUpDTO = {
  email: string;
  name: string;
  password: string;
  role: userRoles
};

export enum signUpBody {
  email = "email",
  name = "name",
  password = "password",
}
