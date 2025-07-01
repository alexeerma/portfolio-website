# Portfolio Deployment Guide

This is your complete React portfolio website with 3D animations, dual language support (English/Estonian), and email contact form functionality.

## 🚀 Quick Deployment Options

### Option 1: Netlify (Recommended for Frontend-only)
1. **Upload your project** to GitHub/GitLab
2. **Connect to Netlify**: https://netlify.com → "New site from Git"
3. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist/public`
4. **Environment variables** (in Netlify dashboard):
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_CONTACT_EMAIL=aleksander.eerma@hotmail.com
   VITE_CONTACT_NAME=Alex Developer
   ```

### Option 2: Vercel
1. **Connect to Vercel**: https://vercel.com → "Import Project"
2. **Build settings**:
   - Framework: React
   - Build command: `npm run build`
   - Output directory: `dist/public`
3. **Add environment variables** in Vercel dashboard

### Option 3: Traditional Hosting (cPanel, shared hosting)
1. **Run locally**: `npm run build`
2. **Upload contents** of `dist/public` folder to your web hosting
3. **Configure environment** through hosting control panel

## 📧 Email Setup (Required)

### 1. Create EmailJS Account
- Go to https://emailjs.com and create free account
- Free tier: 200 emails/month

### 2. Add Email Service
- Dashboard → Email Services → Add Service
- Choose your email provider (Gmail, Outlook, etc.)
- Follow setup instructions

### 3. Create Email Template
- Dashboard → Email Templates → Create Template
- Use this template:

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
Reply to this email to respond directly to {{from_name}}
```

### 4. Get Your Credentials
- Service ID: From Email Services section
- Template ID: From Email Templates section  
- Public Key: From Account → API Keys

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Add your EmailJS credentials to .env file
# Edit .env with your actual values

# Start development server
npm run dev
```

### Build for Production
```bash
# Create production build
npm run build

# Files will be in dist/public folder
```

## 🎨 Customization

### Update Contact Information
Edit `client/src/components/sections/contact.tsx`:
- Email address (line 141)
- Phone number (line 145)
- Location (line 155)

### Change Colors/Theme
Edit `client/src/index.css`:
- Primary colors (CSS variables in :root)
- Dark mode colors (CSS variables in .dark)

### Add/Edit Content
- **Hero section**: `client/src/components/sections/hero.tsx`
- **About section**: `client/src/components/sections/about.tsx`
- **Experience**: `client/src/components/sections/experience.tsx`
- **Projects**: `client/src/pages/projects.tsx`
- **Translations**: `client/src/lib/translations.ts`

## 📁 Project Structure

```
portfolio/
├── client/src/
│   ├── components/         # UI components
│   ├── pages/             # Route pages
│   ├── lib/               # Utilities
│   └── hooks/             # Custom React hooks
├── server/                # Express server (if needed)
├── dist/public/           # Built frontend (deploy this)
├── package.json
└── .env                   # Environment variables
```

## 🔧 Technical Details

### Features
- ✅ Responsive design (mobile-first)
- ✅ Dark/light theme toggle
- ✅ English/Estonian language support
- ✅ 3D animated background (Three.js)
- ✅ Contact form with email delivery
- ✅ Project showcase with filtering
- ✅ Modern UI with glassmorphism effects

### Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **3D Graphics**: Three.js
- **Email**: EmailJS (client-side)
- **State**: React Context
- **Routing**: Wouter

### Browser Support
- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+

## 🐛 Troubleshooting

### Contact Form Not Working
1. Check EmailJS credentials in environment variables
2. Verify EmailJS template setup
3. Check browser console for errors
4. Ensure email service is connected in EmailJS dashboard

### 3D Background Not Loading
- Ensure Three.js scripts are loading properly
- Check browser console for WebGL errors
- Try disabling browser extensions

### Build Errors
- Run `npm install` to ensure all dependencies
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Check Node.js version (18+ required)

## 📞 Support

For deployment help or customization:
- Contact: aleksander.eerma@hotmail.com
- Documentation: Check EMAILJS_SETUP.md for detailed email setup

---

**Ready to deploy!** Choose your hosting provider and follow the setup steps above.