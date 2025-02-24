import { Router} from "express";

const userRouter = new Router();

userRouter.get("/", (req, res) => {
    res.send("Welcome to the project!");
})

userRouter.get("/:id", (req, res) => {
    res.send("Welcome to the project!");
})

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
