# Portfolio
# 🚀 Personal Portfolio with Custom Bottom Sheet for flam task-02

## 🎬 Demo Video

[▶️ Click to watch](https://github-production-user-asset-6210df.s3.amazonaws.com/118067822/459778421-ce5cc4c5-ba1d-4081-9d61-113b52e0c5cf.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250627%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250627T053423Z&X-Amz-Expires=300&X-Amz-Signature=708927e4bc8a2f0bcc13367e2ce54616b200b1a90d16826bc413ec6b62422b4c&X-Amz-SignedHeaders=host)

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

