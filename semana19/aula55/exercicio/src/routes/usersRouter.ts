import express from "express";
import deleteUser from "../controller/deleteUser";
import feed from "../controller/feed";
import followUser from "../controller/followUser";
import getProfile from "../controller/getProfile";
import resetPassword from "../controller/resetPassword";
import unfollowUser from "../controller/unfollowUser";
import userProfile from "../controller/userProfile";

export const usersRouter = express.Router();

usersRouter.get("/profile", userProfile);
usersRouter.post("/follow", followUser);
usersRouter.get("/feed", feed);
usersRouter.get("/:id", getProfile);
usersRouter.post("/unfollow", unfollowUser);
usersRouter.delete("/delete", deleteUser);
usersRouter.put("/resetpassword", resetPassword);