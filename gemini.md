# Gemini Context & Project Documentation: Senior Frontend Portfolio

This document serves as the "Source of Truth" for AI agents and developers. It defines the constraints for maintaining a high-performance, accessible, and fluid **Single-HTML Portfolio** architecture.

---

## 1. Architectural Blueprint
- **Pattern:** Single Page Application (SPA) Lite.
- **Entry Point:** `index.html` (The only HTML file).
- **Style Engine:** Modern CSS (Custom Properties + Grid/Flexbox).
- **Logic Layer:** Functional ES6+. No heavy frameworks (React/Vue).
- **Caching:** Version-controlled cache busting via `version.txt`.



---

## 2. Core Development Standards

### 🧱 HTML (Semantic & Accessible)
- **Zero Div-Soup:** Use `<main>`, `<article>`, `<section>`, and `<aside>` to define page regions.
- **Link Security:** Every `target="_blank"` link **must** have `rel="noopener noreferrer"`.
- **Dynamic Content:** Use `data-attributes` for JS hooks (e.g., `<div data-view-container></div>`).
- **A11y:** Every interactive element must be keyboard-accessible. Images must have descriptive `alt` text.

### 🎨 CSS (Fluid Design System)
- **Token-Based Styling:** All values (colors, spacing, transitions) must use `:root` variables.
- **Layout:** Use **CSS Grid** for page structure and **Flexbox** for component alignment.
- **Scaling & Fluidity:** - **No Fixed Widths:** Avoid `width: 800px`. Use `width: min(var(--max-width), 95vw)`.
  - **Fluid Typography:** Use `clamp()` for headers (e.g., `font-size: clamp(1.5rem, 5vw, 3rem);`).
  - **Relative Units:** Prioritize `rem` for typography and `em` for component-relative spacing.
- **Performance:** Use `content-visibility: auto` on off-screen sections to optimize rendering on large monitors.



### ⚡ JavaScript (Functional & Modular)
- **State Management:** Object-based state to track active "views" (e.g., `const state = { currentView: 'home' }`).
- **Cache Busting Protocol:**
    - Fetch `version.txt`.
    - If `remoteVersion !== localStorage.getItem('siteVersion')`:
        - Clear cache and `window.location.reload(true)`.
- **Event Delegation:** Attach listeners to the parent container to keep memory usage low.

---

## 3. Deployment & Environment
- **Platform:** GitHub Pages (Case-Sensitive Linux Environment).
- **Case Sensitivity:** Filenames must be strictly lowercase (e.g., `hero-image.webp`).
- **Pathing:** Always use relative, forward-slash paths: `./assets/image.webp`.
- **Local Testing:** Serve via Python: `python -m http.server 8888`.

---

## 4. AI Agent Protocol (Mandatory)
1. **Scope Check:** Prioritize CSS solutions (e.g., `:hover`, `@media`) before writing JS logic.
2. **Mobile-First:** Propose styles starting at `320px` width before scaling up to 4K.
3. **Relative Execution:** When writing code, ensure padding and margins are proportional to the viewport using `vw`, `vh`, or `rem`.

---

## 5. Roadmap & Technical Debt

### Active Sprint
- [ ] **Componentization:** Move project data into a JSON object inside `script.js` for dynamic rendering.
- [ ] **Fluid Reset:** Implement a CSS reset that defaults all images to `max-width: 100%`.
- [ ] **Optimization:** Convert heavy JPG/PNG assets to WebP for faster loads.

### Backlog
- [ ] **Navigation:** Implement the `View Transitions API` for smooth "page" swaps.
- [ ] **UX:** Add a "Back to Top" button that only appears when scrolling past 100vh.
