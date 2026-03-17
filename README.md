# NeuVior Ops — Hospital Operations Dashboard

A clean, responsive hospital operations dashboard built as a single-file React component. It includes a sticky header with dark/light mode toggle, user profile dropdown, animated KPI cards, a patient data table, a slide-in patient detail panel, and a footer — all without any routing, state management library, or backend.

---

## Tech Stack

### Framework

In this project is used **Next.js 16+** it works equally well in any React 18+ project (Vite, CRA, etc.) since it is a pure client component. It is a combined of both cliend and server component.

### Styling — Tailwind CSS v3

All layout, spacing, color, and responsive breakpoints are handled with **Tailwind CSS utility classes**. No custom CSS files are needed. To implement dark mode i did not use Tailwind's built-in `dark:` variant — instead it's driven by a React boolean state (`dark`) that is passed through a context api to show that how we can manage small statement management. This gives us full programmatic control over the toggle animation and avoids relying on `prefers-color-scheme` or a class on `<html>`.

---

## Third-Party Libraries

### Framer Motion (`framer-motion`)

For all animations in this project i used framer-motion. Chosen because it provides a declarative, physics-based animation model that integrates naturally with React's component lifecycle. I also have previous experient with that to implement other Animated library i have to invest extra time.

### ChartJs {`chart.js`}

Use `chart.js` and `react-chart.js` library to implement area chart to the trends for patients visit all data are mocked. Choose this because it easy to implement, light weight, community support and support for `react.js`, and have varity of other charts as well. The main this which really stand this it customization.

### Lucide Icon {`lucide-icon`}

A icon library for all javascript library or framework, have tones of icons and customization light-weight, we can find any icon here almost any, that's why it on top of my choice it support react env and have easy to use just import and use, it also support props to customization for icon it uses svg behind the secene.

> **Note on the decision to not use any thrid party table library here:** To implement the patients table i first consider to use ag-grid table comunity editon but because this project have only small number rows and also don't need table virtulization so that's why i did not use it instead i create it with html table with smooth animation by `framer-motion` and simple login handling like `sorting`

## React Hooks Used

- `useState`
- `useEffect`
- `useRef`
- `useCallback`
- `useMemo`
- `useContext`

---

## On Inline Styles

You will notice a mix of Tailwind classes and inline `style={{}}` props throughout the component. This was a deliberate tradeoff, not an oversight.

Tailwind classes are used for everything that is **static** — layout, spacing, border radius, font sizes, standard colors, transitions. These are stable values that do not change at runtime.

Used inline style because to make my work faster, without digging into Tailwind classed documents.

---

## Component Breakdown

I separated the components to keep the code readable and reusable. It also helps with future scalability. For example, the search bar is currently simple, but it’s isolated so it can later evolve into a more advanced type-ahead search with suggestions without impacting the rest of the UI.

| Component          | Responsibility                                                     |
| ------------------ | ------------------------------------------------------------------ |
| `Header`           | Renders the application’s header with navigation and actions..     |
| `Footer`           | Renders the application’s footer section.                          |
| `Cards`            | Displays KPI/statistics cards with icons, values, and badges.      |
| `PatientTable`     | Main table for displaying and managing patient data.               |
| `SidePanel`        | Shows detailed information for a selected patient in a side panel. |
| `Button`           | Reusable button component for actions.                             |
| `Checkbox`         | Custom checkbox input for toggling options.                        |
| `Shimmer`          | Displays loading skeletons for table rows.                         |
| `ToggleSwitch`     | Switch/toggle component for boolean options.                       |
| `SearchBar`        | Input field for searching/filtering data.                          |
| `DataTableRow`     | Renders individual rows in the patient table.                      |
| `NotFoundTableRow` | Displays a message when no patient data is available.              |
| `Signal`           | Reusable component to displays a styled badge indicating a status. |

---

## Installation

```bash
# 1. Install dependencies
npm run install

or

pnpm run install
```

---

## What Could Be Improved in a Production Version

- **Split into multiple files** — can follow `ATOMIC` file structure.
- **Real data layer** — replace `patientRows[]` with an API call using `useQuery` (React Query / TanStack Query)
- **Accessibility** — add `aria-label`, `role`, and keyboard navigation to the dropdown and table rows
- **AG Grid server-side row model** — if the patient list grows beyond a few hundred rows, switch to AG Grid's server-side model with pagination
- **Design tokens** — replace hardcoded hex values in `statusConfig` and `priorityConfig` with CSS custom properties

---

_Built with React 18 · Next.js 16 · Tailwind CSS v3 · Framer Motion_
