# 🚀 ML Engineering Roadmap 

A modern, interactive dashboard for tracking your machine learning engineering journey. Built with React, TypeScript, and Tailwind CSS.

## ✨ Features

### 📊 Progress Tracking
- Visual progress indicators for each learning phase
- Checkable skills and project completion
- Dynamic progress calculation per phase and month

### 🎯 Structured Learning Path
- **Phase 1: Build Core Skills** (Months 1-6)
  - Programming & Data Engineering
  - Mathematics & Statistics
  - ML Fundamentals
- **Phase 2: Deep Learning & Research** (Months 7-12)
  - Deep Learning Foundations
  - Advanced Topics & Research
  - Systems & Deployment

### 💡 Smart Features
- Persistent completion state
- Responsive design for all devices
- Interactive skill tracking
- Resource management
- Project complexity indicators

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Type Safety:** TypeScript
- **State Management:** React Hooks

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ml-learning-dashboard.git
cd ml-learning-dashboard
```

2. **Install dependencies**
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Project Structure

```
ml-learning-dashboard/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── card.tsx
│   │   ├── progress.tsx
│   │   └── ...
│   └── dashboard/
│       └── MLDashboard.tsx
├── types/
│   └── dashboard.ts
└── public/
    └── assets/
```

## 🎨 Customization

### Adding New Phases

To add a new learning phase, extend the `phases` array in `MLDashboard.tsx`:

```typescript
const newPhase: Phase = {
  id: 3,
  title: "Your New Phase",
  duration: "Months 13-18",
  focus: "Your focus areas",
  color: "from-green-500 to-emerald-500",
  icon: <YourIcon className="w-6 h-6" />,
  months: {
    // Add your months data
  }
};
```

### Modifying Skills and Projects

Each month's content is fully customizable. Add or modify skills, projects, and resources as needed:

```typescript
months: {
  "1-2": {
    title: "Your Topic",
    skills: [
      {
        id: "unique-id",
        name: "Skill Name",
        topics: ["Topic 1", "Topic 2"]
      }
    ],
    // Add projects, resources, etc.
  }
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide](https://lucide.dev/) for the icons
- [Tailwind CSS](https://tailwindcss.com/) for the styling system
- [TypeScript](https://www.typescriptlang.org/) for type safety