export type AuthenticationData = {
  id: string;
  role: string;
};

export type UserType = {
  id: string,
  email: string,
  password: string,
  role: string,
}

export type AddressType = {
  street: string;
  neighbourhood: string;
  city: string;
  state: string;
};

export type signUpBody = {
  email: string;
  password: string;
  role?: string;
  cep: string;
  number: string;
  complement: string;
};