import express from "express";
import { signup, login } from "../controller/user.controller.js";

const userRouter = express.Router(); // Correct router definition

userRouter.post("/signup", signup); // Use `userRouter` instead of `router`
userRouter.post("/login", login); // Use `userRouter` instead of `router`

export default userRouter;
