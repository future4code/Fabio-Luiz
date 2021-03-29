import connection from "./../connection";

export default async function selectUsersComplete(
  type: string,
  name: string,
  orderBy: string,
  orderType:string,
  limit: string,
  offset: number
): Promise<any> {
  const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      WHERE name LIKE '%${name}%'
      ORDER BY ${orderBy} ${orderType}
      LIMIT ${limit}
      OFFSET ${offset};
   `);

  return result[0];
}
