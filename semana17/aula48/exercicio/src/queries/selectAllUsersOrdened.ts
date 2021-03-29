import connection from '../connection';

export default async function selectAllUsersOrdened(orderParam:string): Promise<any> {
  const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      ORDER BY ${orderParam} ASC;
   `);

  return result[0];
}
