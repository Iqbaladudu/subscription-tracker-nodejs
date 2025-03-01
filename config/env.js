import {config} from "dotenv";

config({path: `.env.${process.env.node_ENV || "development"}.local`});

export const {PORT, NODE_ENV, DB_URI, JWT_EXPIRES_IN, JWT_SECRET, ARCHJET_ENV, ARCJET_KEY, QSTASH_TOKEN, QSTASH_CURRENT_SIGNING_KEY, QSTASH_URL,QSTASH_NEXT_SIGNING_KEY, SERVER_URL, EMAIL_PASSWORD, EMAIL_ADDRESS, SMTP_HOST} = process.env
