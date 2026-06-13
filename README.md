# Ali Al‑Ojeely – Portfolio

**Software Developer** – Frontend & Desktop Apps

[Live Demo](https://alial-ojeely.github.io/) | [GitHub](https://github.com/AliAl-ojeely) | [LinkedIn](https://linkedin.com/in/alinasseralojeely)

---

## 📌 Overview

This is my personal portfolio built with **React + Vite**, showcasing my projects, skills, and education.  
The codebase deliberately applies **Object‑Oriented Programming (OOP)** principles, the **Active Record** design pattern, and **Big O** analysis to demonstrate clean architecture and algorithmic thinking.

## ✨ Features

- **Multi‑page routing** using React Router.
- **Active Record model** for portfolio items – encapsulation, inheritance, and polymorphism.
- **Private class fields** (`#`) to enforce encapsulation.
- **Static index maps** for O(1) lookup.
- **Custom CSS architecture** with global design tokens (`main.css`) and CSS Modules per component.
- **Responsive UI** with clean, modern design.
- **Simulated data loading** via a service layer – easily swappable with a real API.

## 🧠 OOP & Design Patterns in Action

| Concept            | Implementation                                                          |
|--------------------|-------------------------------------------------------------------------|
| **Encapsulation** | Private fields `#attributes`, `#records`, `#idIndex` in models.         |
| **Inheritance** | `PortfolioItem` extends `BaseModel`.                                    |
| **Polymorphism** | Overridden `display()` method in `PortfolioItem`.                       |
| **Active Record** | `PortfolioItem.save()`, `.find()`, `.findAll()` manage their own data.  |
| **Big O** | Complexity comments in `searchHelpers.js`; Map‑based index for O(1).    |

## 🚀 Tech Stack

- React 18 + Vite
- React Router v6
- CSS Modules + global CSS variables
- ES2022 private fields

## 📂 Project Structure

```bash
ALIAL-OJEELY/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.module.css
│   │   └── PortfolioCard/
│   │   │   ├── PortfolioCard.jsx
│   │   │   └── PortfolioCard.module.css
│   │   └── ScrollToTop/
│   │       ├── ScrollToTop.jsx
│   │       └── ScrollToTop.module.css
│   ├── models/
│   │   ├── BaseModel.js
│   │   └── PortfolioItem.js
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.module.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.module.css
│   │   └── Projects/
│   │       ├── Projects.jsx
│   │       └── Projects.module.css
│   ├── services/
│   │   └── dataLoader.js
│   ├── styles/
│   │   ├── main.css
│   │   └── utilities.css
│   ├── utils/
│   │   └── searchHelpers.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Getting Started

1. Clone the repo

```bash
git clone https://github.com/AliAl-ojeely/AliAl-ojeely.github.io
cd AliAl-ojeely.github.io
```

## Install dependencies

```bash
npm install
```

## Start development server

```bash
npm run dev
```

## Build for production

```bash
npm run build
```

---


## 📬 Contact
 Email: alialojeely@gmail.com
Location: Yemen, Mukalla