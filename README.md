# Tahwul Dashboard

A comprehensive dashboard application for tracking and managing digital transformation progress, compliance metrics, and strategic planning initiatives.

## How to Run the Project

### Prerequisites

- Node.js (v18 or higher recommended)
- Yarn package manager (or npm)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/LiAhmad65/tahwul-dashboard.git
cd tahwul-dashboard
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Start the development server:
```bash
yarn dev
# or
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal)

### Build for Production

```bash
yarn build
# or
npm run build
```

The production build will be generated in the `dist` directory.

### Preview Production Build

```bash
yarn preview
# or
npm run preview
```

## How the Code Was Built

### Architecture

The project follows a component-based architecture with the following structure:

- **Pages**: Main route components (`Dashboard`, `StrategicPlanning`, `NotFound`)
- **Components**: Reusable UI components organized by feature:
  - `common/`: Shared components (Navbar, NavDrawer, FileStats, etc.)
  - `Dashboard/`: Dashboard-specific widgets (ProgressStatus, ComplianceScore, etc.)
  - `StrategicPlanning/`: Strategic planning page components
- **Contexts**: React Context API for global state management (`YearContext` for year selection)
- **Utils**: Helper functions, constants, types, and custom hooks
- **Assets**: Icons and images

### Technology Stack

- **React 19** with TypeScript for type-safe component development
- **Vite** as the build tool for fast development and optimized production builds
- **Material-UI (MUI)** for UI component library
- **Tailwind CSS** for utility-first styling
- **React Router** for client-side routing
- **Recharts** for data visualization (charts and graphs)
- **React Circular Progressbar** for progress indicators

### Key Features

1. **Year-based Data Filtering**: The application uses a `YearContext` to manage year selection (2024, 2025, 2026), allowing users to view metrics for different years.

2. **Dashboard Components**:
   - Project Timeline: Visual timeline showing project phases and status
   - File Statistics: Overview of documents, criteria, and evidence
   - Progress Status: Hierarchical progress tracking by category and subcategory
   - Compliance Score: Overall compliance metrics
   - Yearly Performance: Monthly performance charts
   - Audit Readiness: Audit preparation metrics
   - Top Performing Leaders: Leaderboard of top performers
   - Recent Activities: Activity feed

3. **Strategic Planning Page**: Detailed view for strategic planning with evidence documents table, comments, and detailed information.

4. **Responsive Design**: Built with Tailwind CSS for mobile-first responsive design.

### Data Management

Currently, the application uses **static mock data** stored in `src/utils/constants.ts`. The data is organized by year (2024, 2025, 2026) and includes:
- File statistics
- Progress status data
- Yearly performance metrics
- Timeline steps
- Compliance scores
- Audit readiness data
- Recent activities
- Evidence documents

Custom hooks (e.g., `useProgressStatusData`) are used to fetch the appropriate data based on the selected year.

## Assumptions Made

1. **Static Data**: The application currently uses hardcoded mock data. It's assumed that in a production environment, this would be replaced with API calls to a backend service.

2. **Year Selection**: The year selector defaults to 2026, and it's assumed that users will primarily interact with recent year data.

3. **Routing**: The application assumes a single-page application (SPA) structure with client-side routing. Only specific routes (`/`, `/dashboard`, `/dashboard/strategic-planning`) are considered valid, with all others showing a 404 page.

4. **User Permissions**: No authentication or authorization is implemented. It's assumed that access control would be added in a production environment.

5. **Data Format**: The data structure assumes a specific format for progress tracking, with main categories containing subcategories, which in turn contain items with status indicators.

6. **Browser Support**: The application assumes modern browser support for ES6+ features and React 19.

## What Would Be Improved With More Time

1. **Backend Integration**:
   - Replace static data with real API endpoints
   - Implement data fetching with React Query or SWR for better caching and state management
   - Add error handling and loading states for API calls

2. **State Management**:
   - Consider implementing Redux or Zustand for more complex state management if needed
   - Add proper state persistence (localStorage/sessionStorage) for user preferences

3. **Authentication & Authorization**:
   - Implement user authentication (JWT, OAuth, etc.)
   - Add role-based access control (RBAC)
   - Protect routes based on user permissions

4. **Testing**:
   - Add unit tests for components using Jest and React Testing Library
   - Add integration tests for critical user flows
   - Implement E2E tests with Cypress or Playwright

5. **Performance Optimizations**:
   - Implement code splitting and lazy loading for routes
   - Add memoization for expensive computations
   - Optimize bundle size and implement tree shaking
   - Add service worker for offline support

6. **User Experience**:
   - Add loading skeletons instead of blank screens
   - Implement optimistic UI updates
   - Add toast notifications for user actions
   - Improve error messages and error boundaries
   - Add keyboard navigation support

7. **Data Visualization**:
   - Add more interactive charts with drill-down capabilities
   - Implement data export functionality (PDF, Excel)
   - Add date range filters and custom date selection
   - Implement real-time data updates (WebSockets)

8. **Accessibility**:
   - Improve ARIA labels and semantic HTML
   - Add keyboard navigation support
   - Ensure WCAG 2.1 compliance
   - Add screen reader support

9. **Documentation**:
   - Add JSDoc comments for complex functions
   - Create component documentation (Storybook)
   - Add API documentation if backend is integrated

10. **DevOps & Deployment**:
    - Set up CI/CD pipeline
    - Add environment variable management
    - Implement proper error logging (Sentry, LogRocket)
    - Add monitoring and analytics

11. **Internationalization**:
    - Add i18n support for multiple languages
    - Support RTL languages if needed

12. **Code Quality**:
    - Set up pre-commit hooks (Husky)
    - Add more ESLint rules for better code quality
    - Implement consistent code formatting (Prettier)
    - Add type checking in CI pipeline
