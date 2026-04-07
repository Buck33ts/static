# ASP Therapy Clinic Website

A modern, responsive static website for ASP Therapy physical therapy clinic, featuring a clean and elegant medical-inspired design with comprehensive functionality.

## Features

- 🏥 **Elegant Design**: Clean, professional medical-inspired interface with sophisticated teal and sage color scheme
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- 🧭 **Smooth Navigation**: Sticky navbar with mobile hamburger menu
- 📄 **Multiple Pages**: Home, About, Services, and Contact pages
- 💳 **Reusable Components**: Modular Card, Button, Navbar, Footer, and Testimonials components
- 🎨 **Beautiful Animations**: Hover effects, transitions, and smooth scrolling
- 📝 **Contact Form**: Functional appointment booking form
- 🗺️ **Map Integration**: Embedded Google Map placeholder
- ⭐ **Testimonials**: Patient success stories and reviews
- 🔍 **SEO Optimized**: Meta tags and semantic HTML

## Pages & Sections

### Home Page
- Hero section with call-to-action
- Clinic introduction
- Services highlights
- Testimonials preview
- Statistics showcase

### About Page
- Clinic story and background
- Mission and vision
- Core values
- Therapist profiles
- Facilities overview

### Services Page
- Comprehensive service listings
- Category filtering
- Treatment process
- Insurance information
- Pricing details

### Contact Page
- Appointment booking form
- Contact information
- Interactive map placeholder
- FAQ section
- Emergency contact info

## Tech Stack

- **React 18** - Modern functional components with hooks
- **React Router 6** - Client-side routing
- **CSS3** - Custom styling with animations
- **Google Fonts** - Modern typography (Inter & Open Sans)

## Project Structure

```
d:/static/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js & Navbar.css
│   │   ├── Footer.js & Footer.css
│   │   ├── Card.js & Card.css
│   │   ├── Button.js & Button.css
│   │   └── Testimonials.js & Testimonials.css
│   ├── pages/
│   │   ├── Home.js & Home.css
│   │   ├── About.js & About.css
│   │   ├── Services.js & Services.css
│   │   └── Contact.js & Contact.css
│   ├── App.js & App.css
│   ├── index.js & index.css
│   └── package.json
├── README.md
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project files**
   ```bash
   # If you have the files locally, navigate to the project directory
   cd d:/static
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Customization

### Colors & Branding

The color scheme features a sophisticated and professional palette perfect for medical therapy:

- **Primary Teal**: `#0d9488` and `#0f766e` (main brand colors)
- **Accent Sage**: `#14b8a6` and `#10b981` (secondary accents)
- **Professional Grays**: Various shades for text and backgrounds
- **Clean Whites**: For medical cleanliness and professionalism

### Typography

The site uses Google Fonts:
- **Inter** - Main font family
- **Open Sans** - Secondary font family

### Content Updates

All text content is stored in the component files and can be easily updated:

- **Contact Information**: Update in `Footer.js` and `Contact.js`
- **Services**: Modify the services array in `Services.js`
- **Team Members**: Update therapists array in `About.js`
- **Testimonials**: Modify testimonials array in `Testimonials.js`

## Features Implementation

### Responsive Design
- Mobile-first approach with breakpoints at 480px, 768px, and 1024px
- Hamburger menu for mobile navigation
- Flexible grid layouts that adapt to screen size

### Animations
- Smooth hover effects on cards and buttons
- Fade-in animations for hero content
- Scroll-triggered animations
- Micro-interactions on interactive elements

### Accessibility
- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast colors for readability

### SEO
- Meta tags in `public/index.html`
- Semantic heading structure
- Alt text for images (when implemented)
- Clean URL structure

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Production Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized `build` folder with all the static files ready for deployment.

### Deployment Options

1. **Static Hosting** (Recommended)
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3 + CloudFront

2. **Traditional Hosting**
   - Upload the `build` folder to any web server
   - Ensure the server supports client-side routing (redirect all routes to index.html)

## Contributing

1. Make your changes to the appropriate component files
2. Test thoroughly on different screen sizes
3. Ensure all links and forms work correctly
4. Maintain the existing code style and structure

## Support

If you encounter any issues or have questions about the project:

1. Check that all dependencies are properly installed
2. Verify Node.js version compatibility
3. Clear browser cache if needed
4. Ensure the development server is running on the correct port

## License

This project is open source and available under the MIT License.

---

**ASP Therapy Clinic Website** - Built with ❤️ and React
