import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    },
})


export const sendEmail = async (obj) => {
    const { sender, receipients, subject, message } = obj;

    console.log("Receipt:", receipients);

    return await transport.sendMail({
        from: sender,
        to: receipients,
        subject,
        html: message,
        text: message
    })
}