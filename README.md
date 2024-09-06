# My Dashboard

A personalized dashboard built with React and TypeScript, allowing users to dynamically add, move, and configure widgets. The app demonstrates a modular and scalable architecture with persistent data stored in localStorage.

## Features

- Dynamic Widgets: Add, configure, and manage various widgets on the dashboard.
- Modular components: Each widget is a self-contained React component.
- Persistent State: Uses localStorage to save user configurations.
- Fast Build: Built with Vite for fast development and optimized production builds.

## Tech Stack

- **React**: Component-based architecture for building the UI.
- **TypeScript**: Static typing for better developer experience and maintainability.
- **Vite**: Fast build tool and development server.
- **ESLint**: Linting for consistent code quality.
- **Prettier**: Code formatting to enforce style rules.

## Project Structure

```plaintext
/src
  /components
    - Dashboard.tsx       # Container for all widgets
    - Widget.tsx          # Individual widget component
  /hooks
    - useLocalStorage.ts  # Custom hook for localStorage persistence
  /types
    - widget.ts           # Type definitions for widgets

