import {emailTemplates} from "./email-template.js";
import dayjs from "dayjs";
import {EMAIL_ADDRESS} from "../config/env.js";
import transporter from "../config/nodemailer.js";

export const sendReminderEmail = async ({ to, type, subscription }) => {
    if (!to || !type) throw new Error("Missing required parameters")

    const template = emailTemplates.find(template => template.label === type)

    if (!template) throw new Error("Invalid template")

    const mailInfo = {
        userName: subscription.user.name,
        subscriptionName: subscription.name,
        renewalDate: dayjs(subscription.renewalDate).format('MMMM D, YYYY'),
        planName: subscription.name,
        price: `${subscription.currency} ${subscription.price} (${subscription.frequency})`,
    }

    const message = template.generateBody(mailInfo)
    const subject = template.generateSubject(mailInfo)

    const mailOptions = {
        from: EMAIL_ADDRESS,
        to: to,
        subject: subject,
        html: message,
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
           return console.log(err, "error sending email")
        }

        console.log("Email sent: " + info.response)
    })
}
