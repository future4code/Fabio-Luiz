import showFeed from "../data/showFeed";

const feed_B = async (table: string): Promise<any> => {
  try {
    // Enviando pro BD
    const recipes = await showFeed(table);
    return recipes
  } catch (error) {throw new Error(error.message);}
};

export default feed_B;
