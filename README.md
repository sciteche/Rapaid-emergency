# 🚑 Rapaid Emergency - First Aid Assistant

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2-blue.svg)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-Latest-purple.svg)](https://vitejs.dev)

**Rapaid Emergency** is a comprehensive, AI-powered first aid and medical emergency assistance web application. It provides real-time guidance, symptom analysis, emergency procedures, and instant access to emergency contacts for various health crises.

## 🎯 Features

### Core Functionality
- **🚨 Emergency Guide** - Step-by-step instructions for 50+ emergency situations
- **🤖 AI Symptom Checker** - Analyze symptoms using Google Gemini AI
- **💬 First Aid Chatbot** - Real-time conversation with medical AI assistant
- **📱 Emergency Contacts** - Quick access to emergency services
- **🔍 Smart Search** - Find emergency procedures by keyword
- **📚 Comprehensive Categories**
  - Trauma & Injuries
  - Cardiac & Respiratory
  - Animal & Insect Bites
  - Neurological Emergencies
  - And more...

### User Experience
- 🌙 **Dark/Light Theme** - Comfortable viewing in any lighting
- 🌍 **Multi-language Support** - i18n ready (English, Spanish, Arabic, and more)
- ♿ **Accessible Design** - WCAG compliant UI
- 📱 **Responsive** - Works on desktop, tablet, and mobile
- ⚡ **Fast Performance** - Built with Vite for instant loads

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2 + Vite
- **UI Components**: Radix UI + Tailwind CSS
- **AI Integration**: Google Generative AI (Gemini 2.0)
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS + PostCSS
- **Internationalization**: i18next
- **State Management**: React Context API

## 📋 Prerequisites

- Node.js 16+ and npm/yarn
- Gemini API key (free from [Google AI Studio](https://ai.google.dev/))

## 🚀 Quick Start

### 1. Installation

```bash
# Clone the repository
git clone https://github.com/sciteche/Rapaid-emergency.git
cd Rapaid-emergency

# Install dependencies
npm install
```

### 2. Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`
Or
Experienceable link (a URL where anyone can try your project now):`https://brown-gazelle-248594.hostingersite.com/`

### 3. Configure API Key

On first load, you'll see a modal to enter your Gemini API key:
1. Get a free API key from [Google AI Studio](https://ai.google.dev/tutorials/setup)
2. Enter it in the modal
3. The key is stored locally in your browser (never sent to our servers)

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── emergency-guide/  # Emergency guide UI components
│   ├── ui/              # Reusable UI components (button, card, etc.)
│   ├── ChatBot.jsx      # AI chatbot interface
│   └── ...
├── pages/               # Page components
│   ├── HomePage.jsx
│   ├── SymptomCheckerPage.jsx
│   ├── EmergencyGuidePage.jsx
│   └── ...
├── lib/                 # Utility libraries
│   ├── gemini.js        # Gemini AI integration
│   ├── i18n.js          # Internationalization setup
│   └── utils.js         # Helper functions
├── contexts/            # React Context for state management
│   ├── ApiKeyContext.jsx
│   └── SearchContext.jsx
├── data/                # Static data
│   └── emergencies.js   # Emergency procedures database
└── App.jsx              # Main app component
```

## 📖 Usage

### Symptom Checker
1. Navigate to "Symptom Checker"
2. Describe your symptoms
3. Get AI-powered analysis with severity and first aid steps

### Emergency Guide
1. Browse categories or search for an emergency
2. Follow step-by-step instructions with images/videos
3. Get severity assessment and when to call emergency services

### First Aid Chatbot
1. Click the chat icon in the bottom right
2. Ask questions about first aid
3. Get instant AI-powered responses

## 🔐 Security & Privacy

- **No API Key Storage** - Your Gemini API key is stored only in your browser's localStorage
- **No Data Collection** - We don't collect or store any medical information
- **Client-Side Processing** - All AI requests use your own API key
- **Open Source** - Code is transparent and auditable

## 🔧 Build & Deploy

### Build for Production

```bash
npm run build
```

Output is in the `dist/` folder.

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to [Vercel](https://vercel.com) for automatic deployments.

### Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Select "npm run build" as build command
4. Set publish directory to "dist"

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Environment Variables

No environment variables needed! The app uses:
- **Gemini API Key**: Provided by user via UI modal
- **Local Storage**: For storing user preferences and API key

## ⚠️ Important Notes

### Disclaimer

**This application is for educational and informational purposes only.**

- Not a substitute for professional medical advice
- Not appropriate for critical emergencies - always call emergency services first
- Always consult healthcare professionals for diagnosis and treatment
- In life-threatening situations, call emergency services immediately (911 in US, 999 in UK, etc.)

### Limitations

- Requires internet connection for AI features
- Google Gemini API has rate limits (free tier: 60 requests/minute)
- Some features require a valid Gemini API key

## 🐛 Troubleshooting

### "API key is required" error
- Make sure you've entered a valid Gemini API key
- Check if the key is active in [Google Cloud Console](https://console.cloud.google.com)
- Try refreshing the page and entering the key again

### Symptom checker not working
- Verify your internet connection
- Check your API key quota at Google Cloud Console
- Try refreshing the page

### UI looks broken
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Try a different browser
- Check browser console for errors (F12)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Google Generative AI for the Gemini API
- Radix UI for accessible components
- Framer Motion for smooth animations
- The open source community

## 📞 Contact & Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/sciteche/Rapaid-emergency/issues)
- **Email**: [contact@sciteche.com](mailto:contact@sciteche.com)

## 🗺️ Roadmap

- [ ] Mobile app (React Native)
- [ ] Offline mode with downloaded guides
- [ ] Multi-language expansion
- [ ] Video tutorials for procedures
- [ ] Integration with emergency services
- [ ] User ratings and feedback system
- [ ] Prescription and medication information

---

**Remember: In case of life-threatening emergency, always call emergency services first! 🚨**