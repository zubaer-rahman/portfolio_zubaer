"use server";

import { Resend } from 'resend';

export async function sendEmail(formData: FormData) {
  const apiKey = process.env.NEXT_PUBLIC_RESEND_API_KEY || process.env.RESEND_API_KEY;
  
  if (!apiKey || apiKey === 're_placeholder') {
    return { success: false, error: "Resend API Key is missing. Please add it to your .env file." };
  }

  const resend = new Resend(apiKey);

  const firstname = formData.get('firstname') as string;
  const lastname = formData.get('lastname') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;

  console.log(`[EMAIL ACTION] Attempting to send email for: ${firstname} ${lastname} (${email})`);

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['zubaer.rahman.cse@gmail.com'],
      subject: `New Message from ${firstname} ${lastname}`,
      replyTo: email,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}
