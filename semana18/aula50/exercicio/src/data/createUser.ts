import connection from '../connection';

const createUser = async (
  id: string,
  password: string,
  email: string
): Promise<void> => {
  await connection.raw(`
    INSERT INTO User(id, email, password) 
    VALUES("${id}", "${email}", "${password}")
    `);
};

export default createUser;
