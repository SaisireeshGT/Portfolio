# Portfolio
# 🚀 Personal Portfolio with Custom Bottom Sheet

This is a responsive personal portfolio website built with React and Vite. It features a **custom Bottom Sheet component** with **spring physics and drag interaction**, built from scratch without using any third-party animation libraries like `react-spring-bottom-sheet` or `framer-motion`.

## 🧠 Features

- ✨ Modern React (with Hooks & Context)
- 🌓 Light/Dark Theme Toggle
- 📱 Fully Responsive Layout
- 📄 Download Resume Prompt in a Custom Bottom Sheet
- 🎯 Snap Points (Closed, Half-Open, Full-Open)
- 🧲 Spring Motion Animation (built manually)
- 🖱️ Mouse and Touch Drag Support
- 💡 Clean UI/UX with accessible buttons

> 📍 You can try it live at: [https://saisireeshgt.github.io/Portfolio/](https://saisireeshgt.github.io/Portfolio/)
## 🛠️ Tech Stack

- **React 19**
- **Vite** (for bundling and dev server)
- **CSS Modules**
- **Custom Spring Motion Logic**
- **React Context API** (for theme management)

---

## 📁 Folder Structure

portfolio-main/
├── public/
│ └── resume.pdf
├── src/
│ ├── assets/
│ ├── comman/ # ThemeContext
│ ├── sections/
│ │ ├── Hero/
│ │ ├── Projects/
│ │ ├── Skills/
│ │ ├── Contact/
│ │ ├── Footer/
│ │ └── DownloadResume/ # Bottom Sheet Component
│ ├── App.jsx
│ └── main.jsx
├── index.html
└── package.json

Install Dependencies
npm install

Start the Dev Server
npm run dev

Then open http://localhost:5173 in your browser.

