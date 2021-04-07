import connection from "../connection";

const deleteUserById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    DELETE * FROM User WHERE id = "${id}"
    `);
};

export default deleteUserById;
