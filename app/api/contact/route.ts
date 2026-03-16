import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      );
    }

    // Send notification to hello@gassafebot.co.uk
    await resend.emails.send({
      from: 'GasSafeBot <hello@gassafebot.co.uk>',
      to: 'hello@gassafebot.co.uk',
      subject: `New Lead: ${name} - GasSafeBot Inquiry`,
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
        <hr />
        <p><em>Submitted from gassafebot.co.uk</em></p>
      `,
    });

    // Send auto-reply to the customer
    await resend.emails.send({
      from: 'GasSafeBot <hello@gassafebot.co.uk>',
      to: email,
      subject: 'Thanks for your interest in Emma!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00D4FF;">Hi ${name},</h2>
          <p>Thanks for your interest in Emma, your AI receptionist for gas engineers!</p>
          <p>We've received your message and will be in touch within 24 hours to discuss how Emma can help your business never miss a call again.</p>
          <p>In the meantime, if you have any questions, just reply to this email.</p>
          <br />
          <p>Best regards,</p>
          <p><strong>The GasSafeBot Team</strong></p>
          <p style="color: #666; font-size: 12px;">hello@gassafebot.co.uk | www.gassafebot.co.uk</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
