import findTable from "../data/findTable";
import addFollower from "../data/addFollower";
import { generateId } from "../services/generateId";
import { getTokenData } from '../services/authenticator'
import connection from "../connection";
import getUserById from '../data/getUserById';
import { authenticationData } from "../models/auth";

const followUser_B = async (followingId:string, token:string):Promise<void> => {
  try {
    const tokenData: authenticationData | null = getTokenData(token);
    if (!tokenData) {

      throw new Error("Unauthorized!");
    }

    if (followingId === tokenData.id) {
      throw new Error("You cannot follow yourself!");
    }
    
    // Se usuário encontra-se no BD
    const followingUser = await getUserById(followingId);
    if (!followingUser) {

      throw new Error(`User not found!`);
    }

    // Tabela de usuários seguidos e de seguidores
    const followingsTb: string = `cookenu_following_${tokenData.id}`;
    const findFollowingTb = await findTable(followingsTb);
    if (!findFollowingTb) {
      await connection.raw(`
      CREATE TABLE cookenu_following_${tokenData.id} 
      (
        id VARCHAR(255) PRIMARY KEY,
        user_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES cookenu_users(user_id)
        ON DELETE CASCADE
        )
      `);
    }

    const followersTb: string = `cookenu_followers_${followingId}`;
    const findFollowersTb = await findTable(followersTb);
    if (!findFollowersTb) {
      await connection.raw(`
      CREATE TABLE cookenu_followers_${followingId} 
      (
        id VARCHAR(255) PRIMARY KEY,
        user_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES cookenu_users(user_id)
        ON DELETE CASCADE
        )
      `);
    }
      // Se usuário já está sendo seguido
      const findFollowing = await connection.raw(`
    SELECT * FROM ${followingsTb} WHERE user_id = "${followingId}"
    `);
    if (findFollowing[0][0]){
 
      throw new Error("This user has already been followed!")
    }
    
    // Gerando ID aleatório
    const actionId: string = generateId();

    // Enviando pro BD
    await addFollower(followingsTb, actionId, followingId);
    await addFollower(followersTb, actionId, tokenData.id);
  } catch (error) {throw new Error(error.message);
  }
};

export default followUser_B;

