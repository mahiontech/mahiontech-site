# Mahion Tech Solutions

A highly modern, premium animated startup website built with React, Tailwind CSS, Framer Motion, and advanced UI effects.

## Features

- **Advanced UI Elements:**
  - Glassmorphism effects with backdrop blur
  - 3D tilt interactions on service cards
  - Animated floating particles with multiple colors
  - Gradient backgrounds and glowing elements
  - Smooth hover animations with scale and shadow effects

- **Modern Animations:**
  - Framer Motion for complex animations
  - Scroll-triggered animations
  - Particle systems
  - Micro-interactions throughout

- **Responsive Design:**
  - Mobile-first approach
  - Tablet and desktop optimized
  - SEO-friendly structure

- **Interactive Components:**
  - Contact form with EmailJS integration
  - Floating WhatsApp button
  - Animated testimonials carousel
  - Pricing cards with hover effects

- **Tech Stack:**
  - React with Vite
  - Tailwind CSS for styling
  - Framer Motion for animations
  - React Icons for modern icons
  - React Tilt for 3D effects
  - EmailJS for contact form

## Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```

3. **Open in Browser:**
   Visit `http://localhost:5174`

## EmailJS Setup

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new email service (Gmail, Outlook, etc.)
3. Create a new email template with variables: `{{name}}`, `{{email}}`, `{{phone}}`, `{{service}}`, `{{message}}`, `{{to_email}}`
4. Set the "To Email" in the template to `{{to_email}}`
5. Get your Service ID, Template ID, and Public Key from the dashboard
6. In `src/components/Contact.jsx`, replace:
   - `YOUR_SERVICE_ID` with your Service ID
   - `YOUR_TEMPLATE_ID` with your Template ID
   - `YOUR_PUBLIC_KEY` with your Public Key
   - `'your-email@example.com'` with your actual email address

## Build for Production

```bash
npm run build
```

## Advanced Features

- **3D Tilt Effects:** Service cards tilt on hover for immersive interaction
- **Particle Animation:** 100+ animated particles with varying colors and sizes
- **Glassmorphism:** Semi-transparent backgrounds with blur effects
- **Advanced Hover States:** Buttons and cards have scale, glow, and shadow effects
- **Responsive Animations:** All animations work smoothly across devices

## Customization

- Update branding colors in `tailwind.config.js`
- Replace placeholder logo in Navbar
- Add real project images in Portfolio section
- Modify particle count and colors in Hero component
- Customize EmailJS template for different email formats

## License

MIT