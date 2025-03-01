import nodemailer from "nodemailer";
import {EMAIL_ADDRESS, EMAIL_PASSWORD, SMTP_HOST} from "./env.js";

const transporter = nodemailer.createTransport({
    service: 'smtp',
    host: SMTP_HOST,
    port: 465,
    auth: {
        user: EMAIL_ADDRESS,
        pass: EMAIL_PASSWORD,
    }
})

export default transporter
