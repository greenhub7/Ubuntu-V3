# Project Setup Guide

## Environment Variables

This project requires environment variables for full functionality. A `.env.local` file has been created with placeholder values.

### Required Variables:

1. **Google Analytics (Optional for development)**
   - `NEXT_PUBLIC_TRACKING_ID` - Your Google Analytics 4 tracking ID

2. **EmailJS (Optional for contact form)**
   - `NEXT_PUBLIC_USER_ID` - Your EmailJS user ID
   - `NEXT_PUBLIC_SERVICE_ID` - Your EmailJS service ID  
   - `NEXT_PUBLIC_TEMPLATE_ID` - Your EmailJS template ID

### Setup Instructions:

1. Copy `.env.local` to `.env.local.example` for reference
2. Update `.env.local` with your actual values
3. Restart the development server after making changes

### Running the Project:

```bash
npm install
npm run dev
```

The project will run at `http://localhost:3000`

## Features:

- Ubuntu-themed portfolio website
- Interactive desktop environment
- Calculator, terminal, text editor applications
- Contact form integration
- Google Analytics tracking