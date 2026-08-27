# Streamflix Team Project

A collaborative Streamflix-style frontend project built with **React + Vite** and the **TMDB API**.

The project is managed with:

- **GitHub** for source control, branches, pull requests, and code review
- **Trello** for task assignment and progress tracking
- **TMDB API** for movie and TV data

---

## Project Goals

The team will build a Streamflix-style interface with:

- React + Vite project setup
- TMDB API integration
- Reusable Axios configuration
- Application routing
-- Search, notifications, and profile dropdown
- Dynamic hero banner
- Multi-category movie rows
- Swiper carousel
- Movie cards with hover previews
- Responsive footer
- Mobile and tablet responsiveness
- Final CSS and animation polish

---

## Tech Stack

- React
- Vite
- JavaScript
- CSS / CSS Modules
- Axios
- React Router DOM
- Swiper
- React Icons
- Lucide React
- TMDB API
- Git & GitHub
- Trello

---

## Team

| Team Member       | Main Responsibility                                        |
| ----------------- | ---------------------------------------------------------- |
| Hana Berhe        | Project scaffolding, app layout/router, final review       |
| Yabets Daniel     | Multi-category fetching, Swiper carousel, final review     |
| Dessalew Yeshiwas | Header and header interactions                             |
| Haymanot Yetwale  | Banner data fetching and MovieCard hover preview           |
| Wondie Alemu      | TMDB environment setup and Axios/request endpoints         |
| Abel Ambachew     | Banner UI and animation polish                             |
| Amanuel Ashebir   | Responsive footer                                          |
| Haymanot Admasu   | Responsive layout, mobile navigation, responsive CSS audit |
| Milkesa Debel     | Asset organization and static data                         |
| Natinael Tsegaye  | Global theme and base styles                               |

---

## Trello Workflow

The Trello board uses this workflow:

```text
Backlog → To Do → In Progress → Review by Hana/Yabets → Done
```

### Backlog

Tasks that are planned but are not ready to start.

### To Do

Tasks that are ready for development.

### In Progress

Move your assigned card here when you begin working.

### Review by Hana/Yabets

Move your card here after:

- your work is complete
- your branch is pushed to GitHub
- your Pull Request is created

### Done

A task moves here only after the Pull Request is reviewed, approved, and merged.

---

## GitHub Workflow

The `main` branch is the stable branch.

### Important Rules

- Do **not** work directly on `main`
- Pull the latest `main` before starting a new task
- Create a separate branch for each Trello task
- Keep each branch focused on one task
- Test your work before pushing
- Push your branch to GitHub
- Open a Pull Request when the task is complete
- Do not merge your own Pull Request
- Hana or Yabets must review the Pull Request before merge
- After approval and merge, move the Trello card to **Done**

### Standard Workflow

```text
Update local main
      ↓
Create task branch
      ↓
Move Trello card to In Progress
      ↓
Complete assigned task
      ↓
Test locally
      ↓
Commit changes
      ↓
Push branch
      ↓
Create Pull Request
      ↓
Attach PR to Trello card
      ↓
Move card to Review by Hana/Yabets
      ↓
Review and approval
      ↓
Merge to main
      ↓
Move Trello card to Done
```

---

## Branch Naming

Use the branch name written on your Trello card.

Examples:

```text
feature/T-01-project-scaffolding
feature/T-02-assets-static-data
feature/T-04-axios-endpoints
feature/T-07-header-scroll
feature/T-12-multi-category-fetch
feature/T-14-movie-card-hover
```

Use clear branch prefixes such as:

- `feature/` for new features
- `fix/` for bug fixes
- `chore/` for setup or maintenance work

---

## Commit Message Style

Use short and clear commit messages.

Examples:

```text
chore: scaffold React Vite project and install dependencies
feat: add TMDB axios instance and request endpoints
feat: build header with scroll-aware background
feat: fetch movie categories in parallel
feat: build movie card with hover preview
fix: correct mobile layout spacing
style: polish banner animations
```

Common prefixes:

- `feat:` new feature
- `fix:` bug fix
- `style:` styling or animation changes
- `chore:` setup, dependencies, or maintenance
- `refactor:` code restructuring without changing behavior

---

## Pull Request Naming

Use the Trello task number in the Pull Request title.

Example:

```text
T-07: Build header and scroll-aware background
```

Before opening a Pull Request:

1. Complete the Trello checklist
2. Test your work locally
3. Check the browser console for errors
4. Make sure your branch is up to date when required
5. Push your latest changes
6. Open the Pull Request
7. Attach the Pull Request to the related Trello card
8. Move the Trello card to **Review by Hana/Yabets**

---

## Review Rules

- Hana's Pull Requests are reviewed by Yabets
- Yabets's Pull Requests are reviewed by Hana
- Other team members' Pull Requests are reviewed by Hana or Yabets
- No team member should merge their own Pull Request
- If review comments are added, resolve them before merge
- `main` should contain only reviewed and approved code

---

## Environment Variables

This project uses the **TMDB API**.

The real API key must **not** be committed to GitHub.

Each developer must create their own local `.env` file in the project root.

Example:

```text
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

The `.env` file stays only on the developer's computer and must be ignored by Git.

### `.env.example`

The repository should include a safe example file named:

```text
.env.example
```

Its content should be:

```text
VITE_TMDB_API_KEY=
```

This tells team members which environment variable is required without exposing a real API key.

### After Cloning the Repository

Each team member should:

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a local `.env` file in the project root
4. Add their own TMDB API key:

```text
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

5. Start the development server:

```bash
npm run dev
```

6. Open the local Vite URL shown in the terminal
7. Confirm the application runs without API-key or startup errors

### Security Rules

- Never commit `.env`
- Never commit a real API key
- Never paste API keys into Trello cards or comments
- Never paste API keys into Pull Request descriptions or comments
- Keep `.env` in `.gitignore`
- Commit only `.env.example`
- If a key is accidentally exposed, revoke it and create a new one

---

## Installation

After cloning the repository:

```bash
npm install
```

Create your local `.env` file and add your TMDB API key.

Then start the development server:

```bash
npm run dev
```

---

## Main Project Areas

The project will include files and folders for areas such as:

```text
src/
├── assets/
│   └── image/
├── components/
├── Data/
├── Utility/
├── App.jsx
├── main.jsx
└── index.css
```

Important project files include:

- `src/main.jsx`
- `src/App.jsx`
- `src/index.css`
- `src/Data/Data.js`
- `src/Utility/MovieInstance.js`
- `src/Utility/requestUrls.js`
- `DisplayRow.jsx`
- component files for Header, Banner, Footer, MovieCard, and Swiper/SlideShow

Use the existing project structure if file names or folders differ slightly.

---

## Collaboration Rules

- Work only on your assigned task as much as possible
- Avoid changing another member's component without discussing it
- Pull the latest `main` before starting a new task branch
- Communicate when your task depends on another team member's work
- Do not copy another member's unfinished code into your branch
- Resolve merge conflicts carefully
- Keep Trello updated while you work
- Ask Hana or Yabets before making broad project-wide changes
- If you discover a problem in another member's component, report it before rewriting it

---

## Task Dependency Reminder

Some tasks depend on earlier work.

Examples:

- TMDB environment setup should be completed before API-dependent features
- Axios/request endpoint setup should be completed before banner and category fetching
- Banner data fetching should be ready before the banner UI is finalized
- Multi-category fetching should be ready before carousel integration
- Responsive and final CSS audit work should happen after the main components are mostly complete

Do not start dependent work blindly. Check Trello and communicate with the related team member first.

---

## Trello + GitHub Connection

The team uses the GitHub Power-Up in Trello.

When available, attach the related GitHub item to the matching Trello card:

- Branch
- Commit
- Pull Request

The most important attachments are the **task branch** and **Pull Request**.

This keeps the task status and code review connected.

---

## Project Leads

- **Hana Berhe** — Main Group Leader
- **Yabets Daniel** — Co-Leader / Reviewer

They coordinate task flow, Pull Request review, final integration, and project-wide quality checks.

---

## Project Status

The project is currently in the team setup and development stage.

Progress is tracked through the team's Trello board and GitHub Pull Requests.
