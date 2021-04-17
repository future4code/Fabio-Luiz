import connection from './../connection';

const createAddress = async (
  userId: string,
  cep: string,
  street: string,
  number: string,
  complement: string,
  neighbourhood: string,
  city: string,
  state: string,
): Promise<void> => {
  await connection("Address").insert({
    user_id: userId,
    cep,
    street,
    number,
    complement,
    neighbourhood,
    city,
    state,
  });
};

export default createAddress