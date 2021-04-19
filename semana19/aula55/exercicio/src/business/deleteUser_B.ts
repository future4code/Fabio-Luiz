import delUser from "../data/delUser";
import delTable from "../data/delTable";
import findTable from "../data/findTable";
import getUserById from "../data/getUserById";

const deleteUser_B = async (id: string): Promise<void> => {
  try {
    const user = await getUserById(id);
    if (!user) {
      throw new Error("User not found!");
    }

    const followingTable = await findTable(`cookenu_following_${id}`);
    if (followingTable) {
      await delTable(id);
    }
    await delUser(id);
  } catch (error) {
    throw new Error(error.message);
  }
};

export default deleteUser_B;
