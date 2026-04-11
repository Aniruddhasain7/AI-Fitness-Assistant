# 🏋️ FitBuddy

An intelligent fitness chatbot powered by **Google Gemini AI** that provides personalized workout plans, diet suggestions, and real-time BMI calculations — all through a sleek conversational interface.

---

## ✨ Features

- **AI-Powered Chat** — Ask anything about fitness, nutrition, or wellness and get instant responses from Gemini AI.
- **BMI Calculator** — Built-in Body Mass Index calculator for quick health assessments.
- **Quick Actions** — One-tap prompt buttons for common fitness queries (workout plans, diet tips, etc.).
- **Chat History** — Conversations are persisted in local storage so you never lose context.
- **Markdown Responses** — AI replies are rendered with rich markdown formatting.

---

## 🛠️ Tech Stack

| Layer       | Technology        |
| ----------- | ----------------- |
| Frontend    | React 19, JSX     |
| Build Tool  | Vite 8            |
| AI Backend  | Google Gemini API |
| HTTP Client | Axios             |
| Icons       | React Icons       |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- A [Google Gemini API key](https://aistudio.google.com/app/apikey)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/fitbuddy.git
   cd fitbuddy
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the project root:

   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`.

---

## 📁 Project Structure

```
fitbuddy/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images & logos
│   ├── components/
│   │   ├── BMI.jsx          # BMI calculator widget
│   │   ├── ChatBox.jsx      # Chat message display
│   │   ├── InputBox.jsx     # User input field
│   │   ├── Message.jsx      # Individual message bubble
│   │   └── QuickActions.jsx # Preset prompt buttons
│   ├── services/
│   │   └── gemini.js        # Gemini API integration
│   ├── utils/
│   │   └── localStorage.js  # Chat persistence helpers
│   ├── App.jsx              # Root component
│   ├── App.css              # App styles
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
├── .env                     # Environment variables (not committed)
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
└── package.json
```

---

## 📜 Available Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start the development server |
| `npm run build`   | Build for production         |
| `npm run preview` | Preview the production build |
| `npm run lint`    | Run ESLint checks            |
