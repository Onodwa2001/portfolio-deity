import { sendEmail } from "@/utils/mail.utils"

export async function POST() {
    const sender = {
        name: 'My App',
        address: 'onodwasiyotula7@gmail.com'
    }

    const receipients = [{
        name: 'John Doe',
        address: 'onodwasiyotula7@gmail.com'
    }]

    try {
        const result = await sendEmail({
            sender,
            receipients,
            subject: 'welcome to our website',
            message: 'You are welcome'
        })
    
        return Response.json({
            accepted: result.accepted
        })
    } catch (error) {
        return Response.json({ message: 'Errorrr: ' + error.message }, { status: 500 })
    }
}
