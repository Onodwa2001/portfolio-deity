import { sendEmail } from "@/utils/mail.utils"

export async function POST(req) {
    const body = await req.json()

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
            subject: 'New message from your web portfolio',
            message: body.email + ': ' + body.message
        })
    
        return Response.json({
            accepted: result.accepted,
            message: 'The carrier pigeon has delivered the message to your majesty!🧙‍♂️',
        })
    } catch (error) {
        return Response.json({ message: 'Error: ' + error.message }, { status: 500 })
    }
}
