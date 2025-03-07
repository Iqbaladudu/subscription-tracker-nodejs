import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {JWT_EXPIRES_IN, JWT_SECRET} from "../config/env.js";

export const signUp = async (req, res, next) => {
const session = await mongoose.startSession();
session.startTransaction();

try {
    const {name, email, password} = await req.body;

    const existingUser = await User.findOne({
        email
    });

    if (existingUser) {
        const error = new Error('User already exists');
        error.statusCode = 404;
        throw error;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create([{ name, email, password: hashedPassword }], { session });
    const token = jwt.sign({
        userId: newUser[0]._id,
    }, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN,
    });

    await session.commitTransaction();
    session.endSession()

    res.status(201).json({
        success: true,
        message: "User successfully created",
        data: {
            token,
            user: newUser[0],
        }
    })
} catch (e) {
    await session.abortTransaction();
    session.endSession();
    next(e)
}
}

export const signIn = async (req, res, next) => {
try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        const error = new Error('User does not exist');
        error.statusCode = 404;
        throw error;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
        const error = new Error('User does not match');
        error.statusCode = 401;
        throw error;
    }

    const token = jwt.sign({
        userId: user._id
    }, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN,
    })

    res.status(200).json({
        success: true,
        message: "User successfully logged in",
        data: {
            token,
            user
        }
    })

} catch (e) {
    next(e)
}
}

export const signOut = async (req, res, next) => {

}
