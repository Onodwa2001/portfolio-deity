import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

console.log(process.env.MAIL_PASSWORD);

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    service: 'gmail',
    logger: true,
    debug: true,
    secureConnection: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: true
    }
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