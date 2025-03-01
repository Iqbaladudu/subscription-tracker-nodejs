import Router from "express";
import authorize from "../middleware/auth.middleware.js";
import {createSubscription, getUserSubscription} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {res.send("Welcome to the project!")});

subscriptionRouter.get("/:id", (req, res) => {res.send("Welcome to the project!")});

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/:id", (req, res) => {res.send("Welcome to the project!")});

subscriptionRouter.delete("/:id", (req, res) => {res.send("Welcome to the project!")});

subscriptionRouter.get("/user/:id", authorize, getUserSubscription);

subscriptionRouter.put("/:id/cancel", (req, res) => {res.send("Welcome to the project!")});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {res.send("Welcome to the project!")});


export default subscriptionRouter;
