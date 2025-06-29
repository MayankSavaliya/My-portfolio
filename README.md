# Mayank Savaliya - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring advanced animations, glassmorphism design, and 3D effects.

## 🌟 Features

- **Modern Design**: Glassmorphism effects with 3D animations
- **Responsive**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Theme switching with system preference detection
- **Advanced Animations**: Framer Motion for smooth, professional animations
- **Type Safety**: Built with TypeScript for better development experience
- **Performance**: Optimized with Next.js for fast loading times
- **Contact Form**: Working contact form with validation
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🚀 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod validation
- **Icons**: Lucide React + React Icons
- **Theme**: next-themes

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/            # API routes
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── home.tsx       # Main home component
│   │   ├── navigation.tsx # Navigation component
│   │   └── ...            # Other components
│   ├── hooks/             # Custom React hooks
│   └── lib/               # Utility functions
├── public/                # Static assets
├── package.json
└── README.md
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Personal Information
Update your personal information in `src/components/home.tsx`:
- Name and title
- Skills and technologies
- Projects and achievements
- Contact information
- Social media links

### Styling
The project uses Tailwind CSS with custom animations. You can modify:
- Color scheme in `tailwind.config.ts`
- Custom animations in `src/app/globals.css`
- Component-specific styles in individual components

### Content
- **Projects**: Update the `projects` array in `home.tsx`
- **Skills**: Modify the `skills` array with your proficiencies
- **Achievements**: Update the `achievements` array
- **Experience**: Add your work experience in the Experience section

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with automatic builds

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📧 Contact Form

The contact form uses Next.js API routes. In production, you might want to:
- Connect to a database (MongoDB, PostgreSQL)
- Set up email notifications (SendGrid, Nodemailer)
- Add spam protection (reCAPTCHA)

## 🔧 Environment Variables

Create a `.env.local` file for environment-specific configurations:

```env
# Add your environment variables here
# Example:
# DATABASE_URL=your_database_url
# EMAIL_SERVICE_API_KEY=your_email_service_key
```

## 📱 Features Overview

### Hero Section
- Typing animation with multiple roles
- Glassmorphism effects
- 3D floating elements
- Social media links

### About Section
- Personal introduction
- Education details
- Technical skills overview

### Projects Section
- Interactive project cards
- Live demo and GitHub links
- Technology stack display
- Hover animations

### Achievements Section
- Competitive programming achievements
- Animated achievement cards
- Progress indicators

### Skills Section
- Animated skill bars
- Technology expertise cards
- Interactive hover effects

### Contact Section
- Working contact form
- Form validation
- Contact information
- Social media links

## 🎯 Performance Optimizations

- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Next.js Font optimization
- **Bundle Analysis**: Use `npm run analyze` to check bundle size
- **Lazy Loading**: Components load as needed

## 🧪 Testing

To add testing to the project:

```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom

# Add test scripts to package.json
"test": "jest",
"test:watch": "jest --watch"
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Next.js](https://nextjs.org/) for the React framework

---

**Built with ❤️ by Mayank Savaliya** 