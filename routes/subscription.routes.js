import Router from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {res.send("Welcome to the project!")});

subscriptionRouter.get("/:id", (req, res) => {res.send("Welcome to the project!")});

subscriptionRouter.post("/", (req, res) => {res.send("Welcome to the project!")});

subscriptionRouter.put("/:id", (req, res) => {res.send("Welcome to the project!")});

subscriptionRouter.delete("/:id", (req, res) => {res.send("Welcome to the project!")});

subscriptionRouter.get("/user/:id", (req, res) => {res.send("Welcome to the project!")});

subscriptionRouter.put("/:id/cancel", (req, res) => {res.send("Welcome to the project!")});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {res.send("Welcome to the project!")});


export default subscriptionRouter;
