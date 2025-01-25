import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ResendError {
  message: string;
  statusCode?: number;
  name?: string;
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('Missing Resend API key');
    }

    const body = await request.json();
    const { name, email, message } = body;

    // Debug logs
    console.log('Received form data:', { name, email, message });

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: `Missing required fields: ${!name ? 'name ' : ''}${
            !email ? 'email ' : ''
          }${!message ? 'message' : ''}`.trim(),
        },
        { status: 400 }
      );
    }

    const emailData = {
      // Must use this email until domain verification
      from: 'onboarding@resend.dev',
      to: 'samuelwielgat@gmail.com',
      subject: `New Portfolio Contact from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    console.log('Attempting to send email with data:', emailData);

    const { data, error } = await resend.emails.send(emailData);

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Contact form error:', error);
    const err = error as ResendError;
    return NextResponse.json(
      { error: err.message || 'Error sending message' },
      { status: 500 }
    );
  }
}
