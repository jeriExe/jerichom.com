# Gemini Context & Project Documentation

This file serves as a living guide for AI agents and developers working on this portfolio project. It outlines architectural decisions, security standards, and coding conventions.

## 1. Project Overview
- **Type:** Static Personal Portfolio.
- **Stack:** Vanilla HTML5, CSS3, JavaScript (ES6+).
- **Deployment:** GitHub Pages.
- **Key Files:**
  - `index.HTML`: Main entry point.
  - `styles.css`: Global styling using CSS variables.
  - `script.js`: Core logic including version checking.
  - `version.txt`: Used for client-side cache busting.

## 2. Core Conventions

### HTML
- **Semantic Structure:** Use semantic tags (`<header>`, `<section>`, `<footer>`) to maintain accessibility and SEO.
- **Links:**
  - **Internal:** Use relative paths (e.g., `projects/conductive-ink.html`).
  - **External:** All links opening in a new tab (`target="_blank"`) **MUST** include `rel="noopener noreferrer"` to prevent security vulnerabilities (tabnabbing).
- **Images:** Ensure all `<img>` tags have descriptive `alt` attributes.

### CSS (`styles.css`)
- **Theming:** Rely strictly on CSS variables defined in `:root` (e.g., `var(--yellow)`, `var(--grey)`) for consistent coloring.
- **Design:** Mobile-responsive layout using Flexbox/Grid.

### JavaScript (`script.js`)
- **Cache Busting:** The site implements a custom version check.
  - Logic: Fetches `version.txt`. If the content differs from `localStorage['siteVersion']`, it updates storage and reloads the page.
  - **Constraint:** Do not remove or alter this logic unless replacing it with a robust alternative.

## 3. Security Standards (GitHub Pages)
- **External Links:** Strict enforcement of `rel="noopener noreferrer"` for all external links.
- **Sensitive Data:** This is a client-side static site. NEVER commit API keys, secrets, or personal phone numbers directly into the source code.

## 4. AI Agent Workflow
1.  **Context First:** Read `index.HTML` and `styles.css` before proposing UI changes to match existing aesthetics.
2.  **Case Sensitivity:** GitHub Pages is case-sensitive (unlike Windows). Ensure file paths in code exactly match filenames (e.g., `assets/PeCOD.jpg` vs `pecod.jpg`).
3.  **Verification:** After editing `script.js`, verify the `version.txt` fetch logic remains intact.

## 5. Active Tasks / Technical Debt
- [x] **Security Fix:** Scan all HTML files and add `rel="noopener noreferrer"` to `target="_blank"` links. (Completed 2026-01-12)
- [x] **Path Standardization:** All asset paths standardized to forward slashes `/`. (Completed 2026-01-12)
- [ ] **Structure:** Add a semantic `<footer>` to `index.HTML` and project pages.
- [ ] **Optimization:** Convert heavy JPG/PNG assets to WebP where appropriate.
