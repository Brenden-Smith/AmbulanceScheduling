# Ambulance Scheduling System

This is a project for the California State University, Long Beach chapter of the Association for Computing Machinery (CSULB ACM). The goal of this project is to create a web application that can be used to schedule EMTs for ambulance shifts.

## Table of Contents

- [Ambulance Scheduling System](#ambulance-scheduling-system)
  - [Table of Contents](#table-of-contents)
  - [Setup](#setup)
    - [Prerequisites](#prerequisites)
    - [Getting Started](#getting-started)
  - [File Structure](#file-structure)
    - [`lib`](#lib)
    - [`pages`](#pages)
      - [Routes](#routes)
      - [Dynamic Routes](#dynamic-routes)
      - [More Information](#more-information)
  - [Resources](#resources)
    - [Next.js](#nextjs)
    - [React](#react)
    - [TypeScript](#typescript)

## Setup

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [pnpm](https://pnpm.io/)
- [Visual Studio Code](https://code.visualstudio.com/)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Getting Started

First, open the Visual Studio Code workspace file: [AmbulanceScheduling.code-workspace](AmbulanceScheduling.code-workspace). This will open the project in Visual Studio Code and install the recommended extensions along with setting up some folder shortcuts.

Then, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## File Structure

All of the code is in the `src` directory.

### `lib`

This directory contains code for supporting the application, including the following:

- `components` - React components, either filed under `components/general` or `components/{route to page}`
- `context` - React context
- `types` - TypeScript types

### `pages`

This directory contains the pages for the application. Each page is a React component exported from a file in this directory. The file name determines the path of the page.

#### Routes

`pages/index.tsx` maps to the `/` route, `pages/about.tsx` maps to the `/about` route, and `pages/posts/[id].tsx` maps to the `/posts/:id` route.

#### Dynamic Routes

Dynamic routes are supported using [bracket syntax](https://nextjs.org/docs/routing/dynamic-routes). For example, `pages/posts/[id].tsx` maps to the `/posts/:id` route.

#### More Information

You can read more about Next.js routing [here](https://nextjs.org/docs/routing/introduction).

## Resources

### Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### React

To learn more about React, take a look at the following resources:

- [React documentation](https://reactjs.org/) - learn about React features and API.
- [Learn React](https://reactjs.org/tutorial/tutorial.html) - an interactive React tutorial.
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) - learn about React Hooks.
- [React Context](https://reactjs.org/docs/context.html) - learn about React Context.

### TypeScript

To learn more about TypeScript, take a look at the following resources:

- [TypeScript documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript features and API.
- [Learn TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) - an interactive TypeScript tutorial.
