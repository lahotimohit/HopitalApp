import { createTransport } from 'nodemailer'

export const sendMail = async (email: string, subject: string, content: string) => {
    if (!email.includes("@")) {
        throw new Error("Invalid Email")
    }

    const transporter = createTransport({
        host: "localhost",
        port: 1025,
    })

    await transporter.sendMail({
        from: "testinghospital@gmail.com",
        to: email, 
        subject: subject, 
        html: content
    });

    return true;
}