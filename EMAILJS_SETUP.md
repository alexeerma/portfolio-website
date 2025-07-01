# EmailJS Setup Guide

Your contact form now uses EmailJS to send emails directly from the frontend without needing a database or backend email service.

## 1. Create EmailJS Account

1. Go to [https://emailjs.com](https://emailjs.com)
2. Sign up for a free account (allows up to 200 emails/month)
3. Verify your email address

## 2. Set Up Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Set up your template with these variables:
   ```
   Subject: New Contact Form Submission from {{from_name}}
   
   Hello {{to_name}},
   
   You have received a new message from your portfolio contact form:
   
   Name: {{from_name}}
   Email: {{from_email}}
   Company: {{company}}
   Project Type: {{project_type}}
   Budget Range: {{budget_range}}
   
   Message:
   {{message}}
   
   ---
   Sent from your portfolio website
   ```
4. Note down your **Template ID**

## 4. Get Public Key

1. Go to **Integration** in the dashboard
2. Copy your **Public Key**

## 5. Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` file with your EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id  
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```

## 6. Test the Setup

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Fill out and submit the contact form
3. Check your email for the message
4. Check EmailJS dashboard for delivery status

## 7. Production Deployment

When deploying to production, make sure to set the environment variables in your hosting platform:
- Replit: Add them in the Secrets tab
- Vercel: Add them in Environment Variables
- Netlify: Add them in Site Settings > Environment Variables

## Troubleshooting

- **"Failed to send" error**: Check your EmailJS credentials in the .env file
- **No email received**: Check your EmailJS template configuration and spam folder
- **Rate limiting**: Free plan allows 200 emails/month, upgrade if needed

## Alternative Email Services

If you prefer other solutions:
- **Formspree**: Simple form handling service
- **Netlify Forms**: Built-in form handling for Netlify sites
- **SendGrid**: Professional email API service