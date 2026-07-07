# Encanto Cafe Lounge

An uncompromised multi-sensory culinary escape and specialty coffee roastery web application. This project is built to the highest front-end architecture, UI/UX design, and responsiveness standards, making it a premium portfolio piece for high-value freelance clients.

🚀 **Live URL**: [https://encanto-cafe.netlify.app/](https://encanto-cafe.netlify.app/)

---

## 📂 Project Outputs & Walkthroughs

A detailed breakdown of all code changes, layout realignments, and performance/accessibility audits is stored directly in the repository:

- Check out the **[outputs/walkthrough.md](file:///d:/Encanto-cafe/outputs/walkthrough.md)** file to view detailed implementation details and verification audits.

- Checkk out the **screenshots/** folder to view the output screens of the project.

---

## 🛠️ Technology Stack

- **Core**: React 19, JavaScript (ES6+), HTML5
- **Build Tooling**: Vite 8 (extremely fast Hot Module Replacement)
- **Styling**: Tailwind CSS v3 (Utility-first CSS engine)
- **Icons**: Lucide Icons (custom inline SVGs used for social brands to maintain build integrity)
- **Linter**: Oxlint (ultra-fast linter executing in milliseconds)

---

## ✨ Features & Polish

- **Dynamic Sticky Navbar**: Automatically tracks and highlights the active section in view using the Intersection Observer API.
- **Why Choose Us (Philosophy)**: A dedicated premium section detailing the culinary standards (96+ cupping scores, Synesso profile extractions, sound-engineered acoustics, and in-house lamination labs).
- **Tabbed Specialty Menu**: Smooth tabbed menu filter that triggers elegant fade-in transitions when switching categories.
- **Accessible Image Gallery**: Grid layout with zoom-on-hover card lifts and an interactive image lightbox that supports keyboard controls (`Space`/`Enter` to open, `Escape` to close).
- **Interactive Form Simulations**:
  - **Table Bookings**: High-fidelity validation with inline error prompts for date/time selectors. Submitting displays a booking dashboard summary with guests count, slot timing, and randomized reference tracking codes.
  - **Newsletter Subscription**: Inline validation checks and animated verification indicators showing successful sign-up states.
- **Responsive Styling**: Perfect display metrics across Mobile, Tablet, Laptop, and Desktop viewports, with custom coffee-themed webkit scrollbars.

---

## 💻 Local Setup & Installation

### 1. Clone & Navigate

Open your terminal and ensure you are in the project root:

```bash
cd Encanto-cafe
```

### 2. Install Dependencies

Install all required Node modules and dev dependencies:

```bash
npm install
```

### 3. Start Development Server

Run the local Vite development server:

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### 4. Build for Production

Generate the optimized, minified bundle in the `dist/` folder:

```bash
npm run build
```

### 5. Run Linter

Verify code quality and clean imports with Oxlint:

```bash
npm run lint
```
