# Kim Consultant Portfolio Website

A high-end, modern, animated portfolio website for Kim Consultant - a Toronto-based tech consultancy specializing in websites, custom software solutions, and digital strategy for local businesses.

![Kim Consultant](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80)

## ✨ Features

- **Premium Design**: Apple-inspired aesthetic with smooth animations, parallax effects, and cinematic visuals
- **React Spring Animations**: Fluid, physics-based animations throughout the site
- **Responsive Layout**: Fully responsive design optimized for all devices
- **Multi-page Structure**: Home, About, Services, Pricing, Portfolio, and Contact pages
- **Demo Portfolio**: 5 showcase demo websites with detailed case studies
- **Contact Form**: Professional inquiry form with validation
- **Modern Tech Stack**: React 18, Vite, React Router, React Spring

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header.jsx       # Navigation header
│   ├── Footer.jsx       # Site footer
│   ├── Icon.jsx         # SVG icon component
│   ├── DeviceMockup.jsx # Device frame components
│   └── AnimatedSection.jsx
├── pages/               # Page components
│   ├── Home.jsx         # Homepage with hero, services, demos
│   ├── About.jsx        # Company story and values
│   ├── Services.jsx     # Full service listings
│   ├── Pricing.jsx      # Pricing packages and plans
│   ├── Portfolio.jsx    # Demo websites showcase
│   └── Contact.jsx      # Contact form and info
├── hooks/               # Custom React hooks
│   └── useScrollAnimation.js
├── styles/              # Global styles
│   └── index.css        # CSS variables and base styles
├── App.jsx              # Main app with routing
└── main.jsx             # Entry point
```

## 🎨 Design System

### Colors

- **Primary**: `#0a0a0a` (Black)
- **Accent**: `#2997ff` (Blue)
- **Gold**: `#c9a962` (Gold accent)
- **Grays**: Various shades from `#1a1a1a` to `#f5f5f7`

### Typography

- **Primary Font**: Inter (sans-serif)
- **Display Font**: Playfair Display (serif)

### Animations

All animations are powered by React Spring for smooth, physics-based motion:
- Page transitions
- Scroll-triggered reveals
- Hover interactions
- Loading states

## 📄 Pages

### Home
- Hero section with animated title
- Services overview (3 columns)
- Featured demo projects
- 4-step process workflow
- Client types grid
- Pricing preview
- Call-to-action

### About
- Company story
- Mission statement
- Core values
- Approach philosophy
- Company timeline

### Services
- Sticky navigation
- 4 service categories:
  1. Website Design & Development
  2. Business Consulting & Digital Strategy
  3. Custom Software Solutions
  4. Growth & Optimization Services

### Pricing
- 3 website packages (Small/Medium/Large)
- 3 maintenance plans (Lite/Standard/Premium)
- Custom quote section
- FAQ section

### Portfolio
- Filter by industry
- 5 demo project cards
- Detailed case studies with:
  - Device mockups (laptop + phone)
  - Project description
  - Feature list
  - Tech stack

### Contact
- Contact form with validation
- Contact information
- Next steps process
- Response time indicator

## 🔧 Customization

### Adding Demo Projects

Edit the `demoProjects` array in `src/pages/Portfolio.jsx`:

```javascript
{
  id: 6,
  title: 'Your New Project',
  category: 'Category',
  industry: 'Industry',
  description: 'Short description',
  longDescription: 'Detailed description',
  image: 'image-url',
  thumbnail: 'thumbnail-url',
  color: '#hexcolor',
  features: ['Feature 1', 'Feature 2'],
  tools: ['Tool 1', 'Tool 2']
}
```

### Updating Pricing

Edit the `websitePackages` and `maintenancePlans` arrays in `src/pages/Pricing.jsx`.

### Contact Information

Update the `contactInfo` array in `src/pages/Contact.jsx`.

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🙏 Credits

- **Images**: [Unsplash](https://unsplash.com)
- **Icons**: Custom SVG icons
- **Fonts**: [Google Fonts](https://fonts.google.com)
- **Animations**: [React Spring](https://react-spring.dev)

## 📝 License

© 2024 Kim Consultant. All rights reserved.



