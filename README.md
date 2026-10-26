# Anshul Dhakar — Portfolio

A personal portfolio website introducing Anshul Dhakar, a full-stack developer and final-year computer science student. The site is built with HTML, CSS, and vanilla JavaScript, with no build system or package dependencies.

## Overview

The portfolio presents Anshul’s background, technical skills, selected projects, education, certifications, and contact links. Its responsive layout adapts to smaller screens, and its colors support dark appearance preferences.

## Features

- **Introduction:** Developer profile, role, and links to projects and email.
- **Interactive MERN stack:** Select MongoDB, Express.js, React.js, or Node.js to read a short description.
- **Technical skills:** Frontend, backend, database, language, and tool experience.
- **Projects:** E-commerce website, school management system, EchoBeats, and To-Do List app.
- **Education and certifications:** Academic history and completed certificates.
- **Contact and profiles:** Email, GitHub, LinkedIn, and LeetCode links.
- **Responsive and accessible styling:** Mobile-friendly layouts, visible keyboard focus, and reduced-motion support.
- **Dark appearance:** Uses the visitor’s system color preference by default, with a light-theme override available through `data-theme="light"` on the root HTML element.

## Project files

- `Anshul Dhakar – Portfolio.html` — Page content, navigation, and page structure.
- `portfolio.css` — Theme colors, typography, layout, responsive rules, and accessibility preferences.
- `portfolio.js` — Data and click behavior for the interactive MERN stack section.

Keep all three files in the same folder so the HTML file can load the CSS and JavaScript.

## Run locally

Open `Anshul Dhakar – Portfolio.html` in a web browser. No build tools, package installation, or server are required.

## Customize

- Update the profile, project descriptions, education, certifications, and links in the HTML file.
- Adjust colors, spacing, typography, and responsive behavior in `portfolio.css`.
- Edit the descriptions in the `layers` array in `portfolio.js`. Keep its item order aligned with the buttons’ `data-i` values in the HTML.
- Change the footer year in the HTML file when needed.

The page loads Google Fonts over the internet. If they are unavailable, the CSS uses system-font fallbacks.
