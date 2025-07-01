# Local Development Setup Fix

Your Node.js v20.10.0 has compatibility issues with the Replit-specific configuration. Here's how to fix it:

## 🔧 Quick Fix

### 1. Replace vite.config.ts
```bash
# In your project folder, replace the config file
mv vite.config.ts vite.config.replit.ts
mv vite.config.local.ts vite.config.ts
```

### 2. Update package.json scripts
Open `package.json` and replace the scripts section with:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### 3. Remove problematic dependencies
```bash
# Remove Replit-specific packages
npm uninstall @replit/vite-plugin-cartographer @replit/vite-plugin-runtime-error-modal
```

### 4. Start development
```bash
npm run dev
```

## 🎯 Alternative: Frontend-Only Development

If you still have issues, run the frontend directly:

```bash
# Navigate to client folder
cd client

# Install dependencies
npm install

# Start Vite directly
npx vite

# Or create a simple package.json in client folder
echo '{
  "name": "portfolio-client",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}' > package.json
```

This will run your portfolio on http://localhost:5173

## 🚀 For Production Build

Once you've made your changes:
```bash
npm run build
```

The built files will be in `dist/public` - upload these to your hosting provider.

## ⚠️ Note

The original configuration is designed for Replit's environment. These changes make it work on your local machine while maintaining all functionality.