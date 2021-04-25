import { post, POST_TYPE } from "../src/models/posts";
import { PostsDB } from "./../src/data/PostDB";

describe("Async & await responses", () => {
  const postsDB = new PostsDB();
  test("Insert post", async () => {
    expect.assertions(1);
    try {
      const post: post = {
        id: "1",
        photo:
          "https://images-na.ssl-images-amazon.com/images/I/81hrrq3fCwL.png",
        description: "teste",
        createdAt: new Date(),
        type: POST_TYPE.NORMAL,
        authorId: "cefa061c_cf47_4087_a1a1_b3a8162bbdf4",
      };

      await postsDB.insertPost(post);
      const createdPost = await postsDB.getPostById("1");
      expect(createdPost).toBeTruthy();
    } catch (error) {
      expect(error).toBeUndefined()
    }
  });

  test("Insert duplicate post id", async () => {
    expect.assertions(1);
    try {
      const post: post = {
        id: "1",
        photo:
          "https://images-na.ssl-images-amazon.com/images/I/81hrrq3fCwL.png",
        description: "teste",
        createdAt: new Date(),
        type: POST_TYPE.NORMAL,
        authorId: "cefa061c_cf47_4087_a1a1_b3a8162bbdf4",
      };

      await postsDB.insertPost(post);
      await postsDB.insertPost(post);
    } catch (error) {
      expect(error).not.toBeUndefined();
    }
  });

  afterAll(async() => {
    await postsDB.deletePostById("1");
    postsDB.destroyConnection();
  });
});
