import mongoose from "mongoose";
import {DB_URI } from "../config/env.js";

if (!DB_URI) {
    throw Error("MongoDB URI is missing");
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log("Connected to Database");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export default connectToDatabase
