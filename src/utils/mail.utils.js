import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'


const transport = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_MAIL_HOST,
    port: process.env.NEXT_PUBLIC_MAIL_PORT,
    secure: true,
    service: 'gmail',
    logger: true,
    debug: true,
    secureConnection: false,
    auth: {
        user: process.env.NEXT_PUBLIC_MAIL_USER,
        pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD
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