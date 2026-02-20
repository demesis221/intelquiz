# IntelQuiz - Premium Flashcard Quiz App

A modern, premium flashcard quiz application built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Multiple Question Types**: Multiple Choice (MCQ) and Fill-in-the-Blank (FITB)
- **Premium Animations**: Smooth 3D card flip animations using Framer Motion
- **Progress Tracking**: Real-time progress bar and optional timer
- **Detailed Results**: Comprehensive results report with accuracy, review of mistakes
- **Deck Management**: Create, edit, delete, import, and export quiz decks
- **LocalStorage Persistence**: All data saved locally in browser
- **Responsive Design**: Mobile-first, works beautifully on all devices
- **Accessible**: Keyboard navigation, focus states, good contrast

## Tech Stack

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- React Router (routing)
- Framer Motion (animations)
- LocalStorage (persistence)

## Installation & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Usage

1. **Home Page**: Configure quiz settings and start quiz
2. **Quiz Page**: Answer questions with smooth card flip animations
3. **Results Page**: View detailed results and review mistakes
4. **Decks Page**: Manage your quiz decks, import/export JSON

## Default Deck

The app comes with a pre-loaded deck: "Theories & Practices (Urbanism)" containing 12 questions about urban planning and design.

## Keyboard Shortcuts

- **MCQ**: Press 1-4 to select options, Enter to submit
- **FITB**: Type answer and press Enter to submit
- **Navigation**: Use Skip/Next buttons or keyboard

## Data Management

All data is stored in browser LocalStorage:
- Quiz settings
- Deck data
- Quiz progress
- Results history

Use "Reset All Data" in Decks page to clear everything.

## Design Philosophy

Premium, neutral aesthetic with:
- Charcoal, slate, warm gray, off-white palette
- Soft shadows and subtle borders
- Rounded corners (rounded-2xl)
- Minimal, calm, modern feel
- Consistent spacing and typography
