import connection from "../connection";

const deleteUserById = async (id: string): Promise<any> => {
  await connection.raw(`
    DELETE * FROM User WHERE id = "${id}"
    `);
};

export default deleteUserById;
