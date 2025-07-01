# Complete Local Setup Guide for Node.js v20.10.0

## 🚀 Step-by-Step Setup

After downloading your portfolio, follow these exact steps:

### 1. Prepare Your Project
```bash
# Navigate to your downloaded project folder
cd your-portfolio-folder

# Replace the package.json with the local version
mv package.json package.replit.json
mv package.local.json package.json

# Replace the vite config with the local version  
mv vite.config.ts vite.config.replit.ts
mv vite.config.local.ts vite.config.ts
```

### 2. Install Dependencies
```bash
# Install all required packages
npm install
```

### 3. Start Development Server
```bash
# Run the development server
npm run dev
```

Your portfolio will now be available at: **http://localhost:5173**

## 📝 Making Changes

### Common Files to Edit:

**Personal Information:**
- `client/src/components/sections/contact.tsx` - Line 141 (email), Line 145 (phone)
- `client/src/components/sections/hero.tsx` - Your name and title
- `client/src/components/sections/about.tsx` - Your bio and skills

**Content & Text:**
- `client/src/lib/translations.ts` - All text content (English/Estonian)
- `client/src/components/sections/experience.tsx` - Your work experience
- `client/src/pages/projects.tsx` - Your actual projects

**Colors & Styling:**
- `client/src/index.css` - Main colors and theme variables

### Development Workflow:
1. Make changes to any file
2. Save the file (Ctrl+S / Cmd+S)
3. Browser automatically updates with your changes
4. Check terminal for any errors

## 🔧 If You Have Issues

### Alternative: Run Frontend Only
If the main method doesn't work:
```bash
# Navigate to client folder
cd client

# Create simple config
echo '{
  "name": "portfolio-client",
  "scripts": {
    "dev": "vite"
  },
  "dependencies": {},
  "devDependencies": {
    "vite": "^5.4.10",
    "@vitejs/plugin-react": "^4.3.3"
  }
}' > package.json

# Install and run
npm install
npm run dev
```

### Building for Production
When you're ready to deploy:
```bash
npm run build
```

Built files will be in `dist/public` folder - upload these to your hosting provider.

## 🎯 What's Included

Your portfolio has:
- **3D Animated Background** - Three.js particle effects
- **Dark/Light Themes** - Toggle in the header
- **Dual Languages** - English/Estonian support
- **Contact Form** - Sends emails via EmailJS
- **Responsive Design** - Works on all devices
- **Modern UI** - Glassmorphism effects and smooth animations

## 📧 Setting Up Email (Optional)

To make the contact form work:
1. Create account at https://emailjs.com
2. Set up email service and template
3. Add credentials to `.env` file:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

See `EMAILJS_SETUP.md` for detailed instructions.

---

**Ready to code!** Your portfolio will run perfectly on Node.js v20.10.0 with these configurations.