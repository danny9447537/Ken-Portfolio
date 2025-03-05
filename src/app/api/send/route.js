import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(request) {
    try {
        // Correctly parse the request body
        const { email, subject, message } = await request.json();

        // Validate input fields
        if (!email || !subject || !message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: ["danny8019166645@gmail.com", email], // Ensure email is properly used
            subject: subject,
            react: (
                <>
                    <h1>{subject}</h1>
                    <p>New message submitted:</p>
                    <p>{message}</p>
                </>
            ),
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
