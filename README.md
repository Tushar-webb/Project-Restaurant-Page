# 🍛 An Indian Restaurant — Restaurant Page

A dynamic, single-page restaurant website built with **vanilla JavaScript** and bundled using **Webpack**. This project is part of [The Odin Project](https://www.theodinproject.com/) curriculum.

---

## 🌐 Live Preview

> _Open `dist/index.html` after building, or run the dev server (see below)._

---

## 📋 Features

- **Home Page** — Hero banner, featured specials (Butter Chicken, Paneer Tikka, Biryani) with images, and a footer.
- **Menu Page** — Full menu organized into four categories: Starters, Main Course, Rice & Biryani, and Desserts — each with an image and description.
- **About Page** — Restaurant story, contact & reservation info, and social media links.
- **Tab Navigation** — All pages are rendered dynamically via DOM manipulation; no page reloads.
- **Webpack Bundling** — Assets (images, CSS) handled entirely through Webpack loaders and plugins.

---

## 🗂️ Project Structure

```
Project-Restaurant-Page/
├── src/
│   ├── images/               # 8 JPG food images
│   ├── template.html         # HTML shell used by HtmlWebpackPlugin
│   ├── index.js              # Entry point — nav logic & page loader
│   ├── home.js               # Home page DOM builder
│   ├── homeStyles.css
│   ├── menu.js               # Menu page DOM builder
│   ├── menuStyles.css
│   ├── about.js              # About page DOM builder
│   └── aboutStyles.css
├── .gitignore
├── package.json
├── package-lock.json
└── webpack.config.js
```

> `dist/` and `node_modules/` are excluded from the repository (see `.gitignore`).

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| Vanilla JavaScript (ES Modules) | DOM manipulation & page rendering |
| CSS | Per-page component styling |
| Webpack 5 | Module bundler |
| webpack-dev-server | Local development with live reload |
| html-webpack-plugin | Injects bundle into HTML template |
| css-loader + style-loader | Imports CSS files inside JS modules |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Tushar-webb/Project-Restaurant-Page.git

# 2. Navigate into the project folder
cd Project-Restaurant-Page

# 3. Install dependencies
npm install
```

### Run the Development Server

```bash
npx webpack serve
```

Then open your browser at **http://localhost:8080**.

### Build for Production

```bash
npx webpack
```

The bundled output will be generated in the `dist/` folder.

---

## 📄 How It Works

`template.html` provides a minimal HTML shell with a `<nav>` (Home / Menu / About buttons) and an empty `<div id="content">`. On load, `index.js` renders the **Home page** by default. Each nav button clears `#content` and calls the corresponding page-loader function (`loadHomePage`, `loadMenuPage`, `loadAboutPage`), all of which build and inject DOM elements programmatically.

---

## 🧠 Architecture & Key Learnings

### `index.js` — Webpack's Entry Point

In `webpack.config.js`, `entry` is set to `./src/index.js`. This means Webpack starts building its **dependency graph** from this file. Without it as the entry point, Webpack wouldn't know where to begin — none of the other files (`home.js`, `menu.js`, `about.js`) would be discovered, bundled, or executed, since they are all pulled in as dependencies from here.

### `index.js` — The Brain of the App

Beyond being the entry point, `index.js` acts as the central controller of the entire application. It is responsible for:

- Loading the **default page** (Home) on first render
- Attaching **event listeners** to all three nav buttons
- **Clearing `#content`** before rendering a new page
- **Delegating** rendering to the correct module (`loadHomePage`, `loadMenuPage`, `loadAboutPage`)

All the logic lives here; the individual page modules only know how to build and inject their own content.

### Separation of Concerns

Each file has exactly one job:

- `home.js`, `menu.js`, `about.js` — build and inject their page's DOM content
- `homeStyles.css`, `menuStyles.css`, `aboutStyles.css` — style only their page's elements
- `index.js` — orchestrates navigation, event handling, and page switching

Content building stays in the modules. App logic stays in `index.js`. This keeps the codebase clean, readable, and easy to extend.

### How CSS Gets Loaded — And Why Class Names Matter

Each page module (e.g. `home.js`) imports its own CSS file directly:

```js
import "./homeStyles.css";
```

`index.js` never imports these CSS files itself. However, because `home.js`, `menu.js`, and `about.js` are all imported into `index.js`, Webpack traces the full dependency graph and **bundles all three CSS files together at build time** — meaning all styles are injected into the page from the very start, even before a user clicks a nav button.

This creates an important gotcha: since all CSS is globally active at once, **class names across different page modules must be unique**. If `homeStyles.css` and `menuStyles.css` both defined a `.card` class with conflicting rules, they would step on each other — even when only one page is visible. The fix used in this project is giving each page its own distinct class names (e.g. `.theAboutPage`, `.menu-category`, `.hero`) so styles never bleed across pages.

---

## 🙏 Acknowledgements

- Project assigned by [The Odin Project](https://www.theodinproject.com/)
- Food images sourced locally for development purposes

---

## 📜 License

ISC © [Tushar-webb](https://github.com/Tushar-webb)