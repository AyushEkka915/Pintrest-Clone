# 🎨 PINREST — Pinterest Clone (Frontend)

<div align="center">

![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-purple?style=for-the-badge&logo=vite)
![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?style=for-the-badge&logo=redux)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

✨ A modern Pinterest-inspired web application built with **React + Vite**  
📌 Browse beautiful pins, search by category, save favorites, and enjoy dark mode support.

</div>

---

# 📚 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [📋 Requirements](#-requirements)
- [⚡ Installation](#-installation)
- [🚀 Run the App](#-run-the-app)
- [📦 NPM Packages](#-npm-packages)
- [🛣️ Routes](#️-routes)
- [🔐 Authentication](#-authentication-frontend-only)
- [🧠 Redux Slices](#-redux-slices)
- [🌙 Theme](#-theme)
- [🗂️ Data](#️-data)
- [🧪 How to Use](#-how-to-use)
- [🎨 Design Tokens](#-design-tokens-main-colors)
- [📝 Notes](#-notes)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)

---

# ✨ Features

✅ Login & Signup pages with form validation  
✅ Protected routes for authenticated users  
✅ Pinterest-style masonry layout  
✅ Responsive pin cards with save feature  
✅ Detailed pin preview page with related pins  
✅ Category filtering system  
✅ Search functionality by title/category  
✅ Create Pin page UI  
✅ Responsive navigation bar  
✅ Dark / Light theme support  
✅ Redux Toolkit state management  
✅ Dummy static data (no backend required)

---

# 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| React 18 | Frontend UI |
| Vite 5 | Fast development/build tool |
| Redux Toolkit | State management |
| React Router DOM | Routing |
| CSS Modules | Styling |
| Context API | Theme handling |

---

# 📁 Project Structure

```bash
pinrest/
├── index.html
├── package.json
├── vite.config.js
├── README.txt
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    │   ├── Navbar.jsx
    │   ├── PinCard.jsx
    │   ├── SearchBar.jsx
    │   ├── CategoryFilter.jsx
    │   └── ThemeToggle.jsx
    ├── pages/
    │   ├── Home.jsx
    │   ├── Login.jsx
    │   ├── Signup.jsx
    │   ├── PinDetails.jsx
    │   └── CreatePin.jsx
    ├── redux/
    │   ├── store.js
    │   ├── authSlice.js
    │   ├── pinsSlice.js
    │   └── searchSlice.js
    ├── context/
    │   └── ThemeContext.jsx
    └── data/
        └── pinsData.js
```

---

# 📋 Requirements

Before starting, make sure you have:

- ✅ Node.js 18 or higher
- ✅ npm installed

---

# ⚡ Installation

## 1️⃣ Clone Repository

```bash
git clone <your-repo-url>
cd pinrest
```

## 2️⃣ Install Dependencies

```bash
npm install
```

---

# 🚀 Run the App

## Development Server

```bash
npm run dev
```

Open:

```bash
http://localhost:5173
```

## Production Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

---

# 📦 NPM Packages

## Dependencies

```bash
react
react-dom
react-router-dom
@reduxjs/toolkit
react-redux
```

## Dev Dependencies

```bash
vite
@vitejs/plugin-react
```

---

# 🛣️ Routes

| Route | Description |
|------|-------------|
| `/login` | Login page |
| `/signup` | Signup page |
| `/` | Home feed |
| `/pin/:id` | Pin details |
| `/create` | Create pin page |

⚠️ Unauthenticated users are redirected to `/login`.

---

# 🔐 Authentication (Frontend Only)

### Signup Fields

- Name
- Email
- Password

### Login Fields

- Email
- Password

### Validation Rules

- Valid email format
- Minimum password length: `6`

### Storage

User data stored in:

```bash
localStorage → pinrest_user
```

---

# 🧠 Redux Slices

| Slice | Purpose |
|------|---------|
| `authSlice` | Authentication state |
| `pinsSlice` | Pin list & save feature |
| `searchSlice` | Search filtering |

---

# 🌙 Theme

The app supports:

🌞 Light Mode  
🌚 Dark Mode

Theme preference is stored in:

```bash
localStorage → pinrest_theme
```

Managed using:

```bash
ThemeContext.jsx
```

---

# 🗂️ Data

All pin data is stored inside:

```bash
src/data/pinsData.js
```

Each pin contains:

```js
{
  id,
  title,
  description,
  category,
  image,
  creator,
 followers,
  saved
}
```

📸 Images use:

```bash
picsum.photos
```

---

# 🧪 How to Use

### Step-by-Step

1. Run the app
2. Open `/signup` or `/login`
3. Create an account
4. Browse pins
5. Filter categories
6. Search for pins
7. Open pin details
8. Save favorite pins
9. Create demo pins
10. Toggle dark/light mode

---

# 🎨 Design Tokens (Main Colors)

| Purpose | Color |
|---------|-------|
| Brand Red | `#e60023` |
| Primary Dark | `#b7001a` |
| Background | `#fbf9f9` |
| Surface Text | `#1b1c1c` |
| Secondary Text | `#5f5e5e` |

---

# 📝 Notes

- 🚫 Frontend-only project
- 🌐 No backend/API/database
- 🖼️ Images loaded from external URLs
- 🧪 Create Pin page is demo-only
- 📌 Static pin data stored in a single file

---

# 📄 License

Add your preferred license here.

Example:

```bash
MIT License
```

---

# 👨‍💻 Author

**Your Name**

GitHub:

```bash
<your-github-username>
```

---

<div align="center">

⭐ If you like this project, consider giving it a star!

Made with ❤️ using React + Vite

</div>
