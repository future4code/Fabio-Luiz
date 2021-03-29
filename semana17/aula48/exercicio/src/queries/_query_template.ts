import connection from '../connection';

export default async function query_template(): Promise<any> {
  const result = await connection.raw(``);

  return result[0];
}
