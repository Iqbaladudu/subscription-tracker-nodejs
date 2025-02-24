import {Router} from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) => {
    res.send({message:"Signup successfully."});
})

authRouter.post("/sign-in", (req, res) => {
    res.send({message:"Sign-in successfully."});
})

authRouter.post("/sign-out", (req, res) => {
    res.send({message:"Sig-out successfully."});
})

export default authRouter;
