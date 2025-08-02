# 🧠 AI Voice Agent — 30 Days Challenge

Welcome to the **AI Voice Agent** project! This repository is part of a 30-day challenge to build your own AI Voice Agent from scratch, one step at a time. By the end of this challenge, you'll not only have a fully functioning agent but also gain a deeper understanding of modern web technologies, voice interfaces, and AI integrations.

---

## 📅 Day 1: Project Setup

### ✅ What We Did

* Initialized a Python backend using **FastAPI**.
* Created a clean and attractive **index.html** page.
* Built a modern, animated frontend UI with a floating mic waveform using **WaveSurfer.js**.
* Served all frontend files through FastAPI.
* Displayed a dynamic "Hello, I am your AI voice agent" popup directly in the UI (not via alert).
* Ensured compatibility with **Safari** using `-webkit-backdrop-filter` for translucent UI elements.

---

## 💻 Project Structure

```
AI Voice Agent
│
├── main.py                  # FastAPI backend
├── requirements.txt         # Python dependencies
│
├── static/
│   ├── script.js            # Frontend JavaScript
│   └── wavesurfer.min.js    # Audio waveform library
│
├── Templates/
│   └── index.html           # Main HTML file
│
├── venv/                    # Virtual environment (excluded from Git)
└── .vscode/                 # Editor settings (optional)
```

---

## 🚀 Getting Started

### 🔧 Prerequisites

* Python 3.10+
* Node.js (for optional frontend builds)
* Git

### 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/your-username/ai-voice-agent.git
cd ai-voice-agent

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the server
uvicorn main:app --reload
```

### 🌐 Visit the App

Open [http://localhost:8000](http://localhost:8000) in your browser.

---

## ✨ Features Implemented

* FastAPI backend serving HTML and static files
* Beautiful, animated voice waveform using WaveSurfer.js
* Cross-browser UI with translucent glass-like effect using `backdrop-filter` + `-webkit-` fallback
* Voice Agent welcome message embedded directly in UI
* Modular file structure and scalable code setup

---

## 🎯 Goal of This Project

This project is part of the [30 Days of Voice Agents Challenge](https://forms.gle/4HocRJbAhESLVUAH9) organized by **Murf**.

### 🌟 What You Get:

* Certificate of Completion
* Murf Swag
* Real-world project experience
* A portfolio-ready AI Voice Agent

---

## 🤝 Contributing

Have ideas or feedback? Feel free to open issues or pull requests.

---

## 📷 Screenshot

![Project Preview](./path-to-your-screenshot.png)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> Build. Learn. Win.
> Let’s create amazing AI-powered agents, one day at a time.

---

### 🧑‍💻 Author

**Mayur Sharma**
Built with ❤️ for the community.
