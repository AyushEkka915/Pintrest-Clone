<div align="center">

```
██████╗ ██╗███╗   ██╗██████╗ ███████╗███████╗████████╗
██╔══██╗██║████╗  ██║██╔══██╗██╔════╝██╔════╝╚══██╔══╝
██████╔╝██║██╔██╗ ██║██████╔╝█████╗  ███████╗   ██║   
██╔═══╝ ██║██║╚██╗██║██╔══██╗██╔══╝  ╚════██║   ██║   
██║     ██║██║ ╚████║██║  ██║███████╗███████║   ██║   
╚═╝     ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝   
```

### 📌 A Pinterest-inspired web app — browse, save, create & discover

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=css3&logoColor=white)

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Auth** | Login & Signup pages with form validation |
| 🛡️ **Protected Routes** | Home, Pin Details, Create — for logged-in users only |
| 🧱 **Masonry Feed** | Pinterest-style masonry grid on the home feed |
| 📌 **Pin Cards** | Image, title, description, and Save button on every card |
| 🔍 **Pin Details** | Large preview + related pins on a dedicated details page |
| 🏷️ **Category Filter** | All · Nature · Technology · Travel · Food · Fashion |
| 🔎 **Search** | Filter pins by title or category in real-time |
| ➕ **Create Pin** | Upload UI with title & description form |
| 📱 **Responsive Navbar** | Desktop top bar + mobile bottom navigation |
| 🌙 **Dark / Light Theme** | Theme toggle via Context API + localStorage |
| 🗃️ **Redux Toolkit** | Auth, pins, and search slices |
| 🗂️ **Dummy Data** | All pin data lives in a single data file — no backend needed |

---

## 🛠️ Tech Stack

- ⚛️ **React 18**
- ⚡ **Vite 5**
- 🗃️ **Redux Toolkit** + React Redux
- 🧭 **React Router DOM**
- 🎨 **CSS Modules**
- 🔤 **Google Fonts** — Inter, Material Symbols Outlined

---

## 📁 Project Structure

```
pinrest/
├── index.html
├── package.json
├── vite.config.js
├── README.md
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
        └── pinsData.js          ← all pin images & metadata
```

---

## 📋 Requirements

- **Node.js** `18` or higher
- **npm** (comes with Node.js)

---

## 🚀 Installation

**1. Clone the repository:**

```bash
git clone <your-repo-url>
cd pinrest
```

**2. Install dependencies:**

```bash
npm install
```

---

## ▶️ Run the App

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview the production build |

> Open the URL shown in your terminal — usually **http://localhost:5173**

---

## 📦 NPM Packages

**Dependencies:**

```
react          react-dom          react-router-dom
@reduxjs/toolkit               react-redux
```

**Dev Dependencies:**

```
vite           @vitejs/plugin-react
```

---

## 🗺️ Routes

| Route | Access | Description |
|---|---|---|
| `/login` | 🌐 Public | Login page |
| `/signup` | 🌐 Public | Signup page |
| `/` | 🔒 Protected | Home feed |
| `/pin/:id` | 🔒 Protected | Pin details |
| `/create` | 🔒 Protected | Create pin page |

> 🔒 Unauthenticated users are automatically redirected to `/login`

---

## 🔐 Authentication *(Frontend Only)*

- **Signup fields:** Name · Email · Password
- **Login fields:** Email · Password
- **Validation:** Valid email format · Password min 6 characters
- User stored in Redux (`authSlice`) and `localStorage` key: `pinrest_user`
- Logout clears user and redirects to login
- ⚠️ No real server or database

---

## 🗃️ Redux Slices

| Slice | Responsibility |
|---|---|
| `authSlice` | Current user, login, signup, logout |
| `pinsSlice` | Pin list, category filter, toggle save |
| `searchSlice` | Search query for filtering the home feed |

---

## 🌙 Theme

- `ThemeContext` manages light/dark mode
- Preference saved in `localStorage` key: `pinrest_theme`
- Toggle available in navbar via the `ThemeToggle` component

---

## 🗂️ Data

All pin content lives in: **`src/data/pinsData.js`**

Each pin includes:

```
id · title · description · category · image URL · creator · followers · saved
```

> 🌐 Images use `picsum.photos` placeholder URLs — **requires internet to load**

---

## 📖 How to Use

```
1. Run:         npm run dev
2. Go to:       /signup or /login  →  create any account
3. Browse:      Home feed, filter categories, use search
4. Explore:     Click a pin to open details & see related pins
5. Save:        Use Save on cards to toggle saved state (in-memory + Redux)
6. Create:      Open Create from navbar to use the create-pin form
7. Theme:       Use the theme toggle for dark/light mode
8. Logout:      Use logout from the navbar when done
```

---

## 🎨 Design Tokens

| Token | Value | Usage |
|---|---|---|
| 🔴 Primary / brand red | `#e60023` | `primary-container` |
| 🟥 Primary dark | `#b7001a` | `primary` |
| ⬜ Background / surface | `#fbf9f9` | base background |
| ⚫ On-surface text | `#1b1c1c` | body text |
| 🩶 Secondary text | `#5f5e5e` | muted / secondary |

---

## 📝 Notes

- 🚫 Frontend only — no API or database
- 🌐 Pin images load from external URLs (`picsum.photos`)
- ⚙️ Create page save is demo behavior unless `addPin` is wired in `pinsSlice`
- 📌 For assignment: keep all static pin data in `pinsData.js` only

---

## 📄 License

Add your license here *(e.g. MIT)* if required for your course or repo.

---

## 👤 Author

**Your Name**
GitHub: [@your-github-username](https://github.com/your-github-username)

---

<div align="center">

Made with ❤️ and 📌 — inspired by Pinterest

</div>
