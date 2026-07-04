# Vehicle Monitoring Dashboard (React Frontend)

> **Scope note:** This repository contains the frontend implementation that I
> developed based on my contribution to an academic team project titled
> *"Number Plate Detection and Monitoring System"* (MANIT Bhopal, 2025–26).
> It is intended to showcase my React.js development skills and **does not
> include** the complete ALPR pipeline, OCR, backend, or database
> implementation built by the wider team. This is a standalone frontend that
> runs on mock data by default and is designed to plug into a compatible
> backend later — see [`docs/API.md`](docs/API.md).

## Live demo data

The app ships with realistic mock data (`src/services/mockData.js`) so it
runs fully offline. No backend is required to explore it.

## Features

- **Dashboard** — total vehicles, vehicles currently inside, hourly/daily
  entry and exit counts, and traffic trend charts (line + bar, Chart.js).
- **Vehicle logs table** — vehicle number, entry time, exit time, gate, and
  live/exited status, with pagination.
- **Plate search** — look up a vehicle number and see its full visit
  history, total entries, total exits, last visit, and total parking
  duration.
- **Loading / empty / error states** for every data view.
- **Responsive layout** with a collapsible sidebar for mobile.
- **Pluggable API layer** — swap mock data for a real backend by changing
  one environment variable, with no component changes required.

## Tech stack

| Layer      | Choice                                  |
|------------|------------------------------------------|
| Framework  | React 18 + Vite                          |
| Routing    | React Router v6                          |
| Styling    | Tailwind CSS                             |
| Charts     | Chart.js + react-chartjs-2               |
| HTTP       | Axios                                    |
| State      | React Context + hooks (no external store needed) |

## Folder structure

```
src/
  components/   Reusable UI: Navbar, Sidebar, DashboardCards, VehicleTable,
                SearchBar, HourlyTrafficChart, DailyTrafficChart, Pagination,
                Loader, EmptyState, ErrorState, StatusBadge, Layout
  pages/        Dashboard.jsx, VehiclesPage.jsx, SearchPage.jsx, NotFound.jsx
  hooks/        useAsync.js — shared loading/error/data hook
  services/     httpClient.js, vehicleService.js, mockData.js
  context/      VehicleContext.jsx — sidebar/layout state
  utils/        formatters.js — date, duration, status helpers
  assets/       static assets
```

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for a diagram of how this
fits into the original team project, and how data flows through the app.

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Copy the env file (mock data is on by default)
cp .env.example .env

# 3. Run the dev server
npm run dev
```

The app runs at `http://localhost:5173`.

### Connecting a real backend later

Edit `.env`:

```
VITE_USE_MOCK=false
VITE_API_BASE_URL=http://localhost:5000/api
```

No other code changes are required — see [`docs/API.md`](docs/API.md) for
the expected endpoint contract.

### Build for production

```bash
npm run build
npm run preview
```

## Screenshots

These are static SVG mockups generated from the actual component markup and
color tokens, included so the repo isn't screenshot-less on GitHub. Swap
them for real captures (`npm run dev` → screenshot each page) whenever you
like — same filenames, so the README needs no changes.

![Dashboard](docs/screenshots/dashboard.svg)
*Dashboard — summary cards, hourly and daily traffic charts.*

![Vehicle logs](docs/screenshots/vehicles.svg)
*Vehicle logs — paginated table with live "Inside" / "Exited" status.*

![Search](docs/screenshots/search.svg)
*Search — plate lookup with visit history and duration totals.*

## Future improvements

- Authentication (JWT) and role-based access to match the original project's
  planned security model.
- Live Socket.IO integration for real-time table/dashboard updates once a
  real backend is connected.
- CSV export of vehicle logs and search results.
- Dark/light theme toggle.
- Unit and component tests (Jest + React Testing Library).
- Dockerfile for containerized deployment.

## Attribution

This project's UI and data requirements were informed by the "Number Plate
Detection and Monitoring System" minor project report (MANIT Bhopal,
2025–26), a team project involving a Python ALPR/OCR pipeline and a
Node.js/Express/MongoDB backend. Those components were built by teammates and
are **not reproduced here**. This repository is an independent, from-scratch
React implementation of the dashboard requirements, written to demonstrate
frontend engineering skills for a portfolio.
