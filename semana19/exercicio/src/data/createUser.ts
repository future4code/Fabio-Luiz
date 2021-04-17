import connection from '../connection';

const createUser = async (
  id: string,
  email: string,
  password: string,
  role: string
): Promise<void> => {
  await connection.raw(`
    INSERT INTO User(id, email, password, role) 
    VALUES("${id}", "${email}", "${password}", "${role}")
    `);
};

export default createUser;
