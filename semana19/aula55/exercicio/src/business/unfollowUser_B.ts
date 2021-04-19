import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../models/auth";
import findTable from "../data/findTable";
import connection from "../connection";
import getUserById from "../data/getUserById";
import unfollow from "../data/unfollow";

const unfollowUser_B = async (
  followingId: string,
  token: any
): Promise<void> => {
  try {
    const tokenData: authenticationData | null = getTokenData(token);
    if (!tokenData) {
      throw new Error("Unauthorized!");
    }

    // Se usuário encontra-se no BD
    const followingUser = await getUserById(followingId);
    if (!followingUser) {
      throw new Error(`User not found!`);
    }

    // Tabela de usuários seguidos e de seguidores
    const followingsTb: string = `cookenu_following_${tokenData.id}`;
    const followersTb: string = `cookenu_followers_${followingId}`;
    const findFollowingTb = await findTable(followingsTb);
    if (!findFollowingTb) {
      throw new Error(`This user is following nobody!`);
    }

    // Se usuário já está sendo seguido
    const findFollowing = await connection.raw(`
    SELECT * FROM ${followingsTb} WHERE user_id = "${followingId}"
    `);
    if (!findFollowing[0][0]) {
      throw new Error(`This user is not following ${followingId}!`);
    }

    // Enviando pro BD
    await unfollow(followingsTb, followingId, followersTb, tokenData.id);
  } catch (error) {throw new Error(error.message);}
};

export default unfollowUser_B;
