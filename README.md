# AI Topic Explainer

A modern, interactive AI-powered web application that provides detailed explanations for any topic using advanced AI technology.

## 🚀 Features

### Core Functionality
- **AI-Powered Explanations**: Get comprehensive answers to any question using advanced AI models
- **Interactive Input**: Beautiful animated input field with placeholder cycling and vanishing text effects
- **Split-Screen Results**: Modern dual-panel layout showing question and AI response side-by-side
- **Editable Questions**: Click to edit your original question and get new responses
- **Real-Time Animations**: Smooth transitions, loading states, and interactive hover effects
- **Dark Metallic Theme**: Modern dark theme with metallic overlays and gradients

### Technical Features
- **Next.js 16**: Latest React framework with App Router
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Modern utility-first styling framework
- **Framer Motion**: Advanced animations and transitions
- **Responsive Design**: Optimized for all screen sizes
- **API Integration**: OpenAI integration for AI responses

## 🛠️ Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- OpenAI API key (for AI functionality)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/AdarshXGupta07/AI-Topic-Explainer.git
   cd AI-Topic-Explainer
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── explain/
│   │       └── route.ts          # AI API endpoint
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── github/
│   │   └── page.tsx              # GitHub page
│   ├── how-it-works/
│   │   └── page.tsx              # How it works page
│   ├── results/
│   │   └── page.tsx              # Results page with split-screen
│   ├── globals.css                  # Global styles
│   ├── layout.tsx                  # Root layout
│   └── page.tsx                   # Home page
├── components/
│   ├── HeroSection.tsx            # Hero section component
│   ├── Navbar.tsx                 # Navigation component
│   ├── PlaceHolder.tsx             # Input component
│   └── ui/
│       ├── background-lines.tsx      # Background animation
│       ├── placeholders-and-vanish-input.tsx  # Animated input
│       └── resizable-navbar.tsx   # Navigation
└── lib/
    └── utils.ts                    # Utility functions
```

## 🎯 Usage

### Basic Usage

1. **Ask a Question**
   - Type your question in the animated input field
   - Press Enter or click the submit button
   - The input features placeholder cycling and vanishing text animations

2. **View Results**
   - Your question appears on the left panel
   - AI response generates on the right panel
   - Beautiful split-screen layout with metallic theme

3. **Edit Your Question**
   - Click on your question in the left panel
   - Edit your question in the textarea
   - Click "Enter" to get a new AI response
   - Use the "Stop" button to abort AI generation

### Navigation

- **Home**: Main input page with animated search field
- **How it works**: Information about the application
- **About**: Project details and team information
- **GitHub**: Link to the source code repository

## 🔧 API Endpoints

### POST /api/explain

Receives a question and returns an AI-generated explanation.

**Request Body:**
```json
{
  "question": "string"
}
```

**Response:**
```json
{
  "response": "string",
  "error": "boolean"
}
```

**Example:**
```bash
curl -X POST http://localhost:3000/api/explain \
  -H "Content-Type: application/json" \
  -d '{"question": "What is machine learning?"}'
```

## 🎨 Design System

### Color Palette
- **Primary Black**: `#000000` - Main background
- **Metallic Gray**: `#1a1a1a` - Navigation and panels
- **Accent Gray**: `#333333` - Borders and dividers
- **Text White**: `#ffffff` - Primary text
- **Text Gray**: `#b3b3b3` - Secondary text

### Animations
- **Input Vanish**: Text particles animation on submit
- **Placeholder Cycling**: Rotating placeholder text
- **Panel Hover**: Scale and color transitions
- **Loading Spinner**: Circular rotation animation
- **Border Effects**: Gradient animations between panels

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your Vercel account to the repository
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
npm start
```

## 🔧 Configuration

### Environment Variables
- `OPENAI_API_KEY`: Your OpenAI API key (required)
- `NODE_ENV`: Environment (development/production)

### Customization
- **AI Model**: Change in `src/app/api/explain/route.ts`
- **Theme**: Modify Tailwind classes in components
- **Animations**: Adjust Framer Motion settings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenAI**: For providing the AI API
- **Vercel**: For hosting and deployment
- **Tailwind CSS**: For the utility-first CSS framework
- **Framer Motion**: For beautiful animations
- **Next.js Team**: For the excellent React framework

## 📞 Support

If you have any questions or need support:
- Create an issue on GitHub
- Check the documentation
- Review the code examples

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
