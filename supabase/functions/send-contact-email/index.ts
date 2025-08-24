import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  role: string;
  lookingFor: string;
  message?: string;
}

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Contact form submission received');
    
    const formData: ContactFormData = await req.json();
    console.log('Form data:', formData);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.role || !formData.lookingFor) {
      console.error('Missing required fields');
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Create HTML email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0d9488;">New Contact Form Submission</h2>
        
        <div style="background: #f0fdfa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #0d9488; margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
          <p><strong>Role:</strong> ${formData.role}</p>
          <p><strong>Looking for:</strong> ${formData.lookingFor}</p>
        </div>
        
        ${formData.message ? `
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #0d9488; margin-top: 0;">Message</h3>
            <p>${formData.message}</p>
          </div>
        ` : ''}
        
        <div style="margin-top: 30px; padding: 20px; background: #0d9488; color: white; text-align: center; border-radius: 8px;">
          <p style="margin: 0;">New lead from Sailcraft Solutions website</p>
        </div>
      </div>
    `;

    // Check for Resend API key
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not found');
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log('Initializing Resend...');
    const resend = new Resend(resendApiKey);

    // Send email using Resend
    console.log('Sending email...');
    const emailResponse = await resend.emails.send({
      from: 'Sailcraft Solutions <onboarding@resend.dev>',
      to: ['info.sailcraft@gmail.com'],
      subject: `New Contact Form Submission from ${formData.name}`,
      html: htmlContent,
    });

    console.log('Email sent successfully:', emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        emailResponse 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error in send-contact-email function:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send email',
        details: error.message 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});