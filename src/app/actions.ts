'use server';

import { Resend } from 'resend';
import { ContactFormEmail } from '@/components/emails/contact-form-email';
import { JunkRemovalQuoteEmail } from '@/components/emails/junk-removal-quote-email';

// Define the contact email form data type
export interface ContactEmailForm {
  name: string;
  email: string;
  message: string;
  phone: string;
  to: string;
  isQuoteRequest?: boolean;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactEmailForm) {
  const { name, email, message, phone, to, isQuoteRequest = false } = data;
  
  // Validate the to email
  if (!to) {
    console.error('No recipient email provided');
    return { success: false, error: { message: 'Recipient email is required' } };
  }
  
  try {
    const emailSubject = isQuoteRequest 
      ? 'Junk Removal Quote Request' 
      : 'Contact form submission';
    
    const emailComponent = isQuoteRequest
      ? JunkRemovalQuoteEmail({ name, email, message, phone })
      : ContactFormEmail({ name, email, message, phone });

    const result = await resend.emails.send({
      from: 'Red Bull Hauling <contact@leadforgers.com>',
      to: to,
      subject: emailSubject,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      react: emailComponent,
    });
    
    console.log('Email sent successfully:', result);
    
    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
} 