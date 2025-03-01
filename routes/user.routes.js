import { Router} from "express";
import {getUser, getUsers} from "../controllers/user.controller.js";
import authorize from "../middleware/auth.middleware.js";

const userRouter = new Router();

userRouter.get("/", getUsers)

userRouter.get("/:id", authorize,getUser)

userRouter.post("/", (req, res) => {
    res.send("Welcome to the project!");
})

userRouter.put("/:id", (req, res) => {
    res.send("Welcome to the project!");
})

userRouter.delete("/", (req, res) => {
    res.send("Welcome to the project!");
})

export default userRouter;
