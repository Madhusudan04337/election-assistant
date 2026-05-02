# 🗳️ Voter Education Guide

A high-fidelity, interactive 12-step educational platform designed to guide first-time voters in India through the entire voting process—from eligibility checks to understanding election results.

![Project Status](https://img.shields.io/badge/Status-Deployed-success)
![Next.js](https://img.shields.io/badge/Framework-Next.js%2015-black)
![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 Live Demo
**URL**: [https://voter-education-779344188603.asia-south1.run.app](https://voter-education-779344188603.asia-south1.run.app)

---

## ✨ Key Features

### 🔐 Sequential 12-Step Journey
The guide enforces a strict linear learning path. Users must complete the current module's assessment to unlock the next one, ensuring a structured learning experience.

### 📝 Interactive Assessments
- **67% Pass Criteria**: Users must demonstrate understanding by scoring at least 67% (2/3 correct) on each step's quiz.
- **Immediate Feedback**: Detailed explanations for correct and incorrect answers.
- **Auto-Scroll**: Smart navigation that guides users directly to the assessment section upon step selection.

### 💾 Persistent Progress
- **LocalStorage Sync**: Progress is automatically saved in the browser. Users can close the tab and return later to continue where they left off.
- **Reset Functionality**: Users can reset all progress to start the journey again.

### 📱 Premium Responsive Design
- **Mobile Optimized**: Clean, focused interface on mobile that hides navigation clutter and prioritizes current tasks.
- **Dark Mode Support**: Seamless transition between light and dark themes.
- **Aesthetic UI**: Modern gradients, glassmorphism effects, and smooth animations using Tailwind CSS and Framer Motion logic.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Components**: [Radix UI](https://www.radix-ui.com/) (via shadcn/ui)
- **Deployment**: [Google Cloud Run](https://cloud.google.com/run)
- **Containerization**: [Docker](https://www.docker.com/)

---

## 📂 Project Structure

```bash
├── app/                  # Next.js App Router pages
│   ├── step/[id]/        # Dynamic step content pages
│   ├── steps/            # Overview dashboard
│   └── layout.tsx        # Global layout with ProgressProvider
├── components/           # Reusable UI components
│   ├── ui/               # Core design system components
│   ├── StepClientContent # Main logic for step progression
│   ├── StepProgress      # Sidebar & horizontal progress trackers
│   └── InteractiveQuiz   # Assessment logic with pass/fail criteria
├── hooks/                # Custom React hooks
│   └── use-progress.tsx  # Global state management for step locking
├── lib/                  # Data and utility functions
│   └── steps-data.ts     # Content and quiz data for all 12 steps
└── public/               # Static assets
```

---

## 💻 Local Development

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd election
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## ☁️ Deployment

The project is configured for deployment to **Google Cloud Run** using a multi-stage Docker build.

### Build and Deploy Command
```bash
gcloud run deploy voter-education \
  --source . \
  --region asia-south1 \
  --allow-unauthenticated
```

### Docker Configuration
- Uses **Node.js 20-alpine** for efficient builds.
- Optimized with **Next.js Standalone Output** for minimal container size.

---

## 📖 Content Guides
Detailed content for each step and supplementary documentation can be found in the `docs/` directory:
- [Complete Project Guide](docs/COMPLETE_PROJECT_GUIDE.md)
- [Voter Learning Flow](docs/LEARNING_FLOW.md)
- [Comprehensive FAQs](docs/COMPREHENSIVE_FAQS.md)

---

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

---

Created with ❤️ for the voters of India.
