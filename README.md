# @asafarim/shared

[![npm version](https://img.shields.io/npm/v/@asafarim/shared?color=4dabf7&label=npm)](https://www.npmjs.com/package/@asafarim/shared)
[![GitHub stars](https://img.shields.io/github/stars/AliSafari-IT/shared?style=social)](https://github.com/AliSafari-IT/shared)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> **A modern collection of reusable React components and utilities for ASafariM web applications with full theme system integration.**

---

## 🚀 Quick Install

```sh
# Install the component library
pnpm add @asafarim/shared

# Install with theme system (recommended)
pnpm add @asafarim/shared @asafarim/react-themes

# or with npm
npm install @asafarim/shared @asafarim/react-themes
```

---

## 🌐 Live Demo & Documentation

- **Live Demo:** [alisafari-it.github.io/shared](https://alisafari-it.github.io/shared/)
- **Source:** [github.com/AliSafari-IT/shared](https://github.com/AliSafari-IT/shared)

Explore all components with interactive examples, theme switching, and comprehensive prop documentation.

---

## 🧩 Components

### `PackageLinks`
A flexible, theme-aware component for displaying links to npm packages, GitHub repositories, and live demos.

#### Usage
```tsx
import React from 'react';
import { ThemeProvider } from '@asafarim/react-themes';
import { PackageLinks } from '@asafarim/shared';
import '@asafarim/react-themes/styles.css';

function App() {
  return (
    <ThemeProvider defaultMode="auto" persistMode={true}>
      <PackageLinks
        packageName="@asafarim/display-code"
        githubPath="packages/display-code"
        demoPath="packages/display-code"
      />
    </ThemeProvider>
  );
}
```

#### Props
| Prop         | Type   | Required | Description                                                        |
|--------------|--------|----------|--------------------------------------------------------------------|
| packageName  | string | Yes      | The npm package name (e.g., `@asafarim/display-code`)              |
| githubPath   | string | Yes      | Path to the package in the GitHub repo (e.g., `packages/display-code`) |
| demoPath     | string | No       | Path to the demo in GitHub Pages (e.g., `packages/display-code`)   |

### `ButtonComponent`
A versatile, professional button component with multiple variants, sizes, and states. Features modern glass morphism effects and full accessibility support.

#### Usage
```tsx
import { ButtonComponent } from '@asafarim/shared';

function App() {
  return (
    <div>
      <ButtonComponent variant="primary" size="md">
        Primary Button
      </ButtonComponent>
      
      <ButtonComponent variant="secondary" size="lg" loading>
        Loading Button
      </ButtonComponent>
      
      <ButtonComponent variant="outline" disabled>
        Disabled Button
      </ButtonComponent>
    </div>
  );
}
```

#### Props
| Prop         | Type                                    | Default     | Description                                    |
|--------------|-----------------------------------------|-------------|------------------------------------------------|
| variant      | `'primary'` \| `'secondary'` \| `'success'` \| `'danger'` \| `'warning'` \| `'info'` \| `'outline'` \| `'ghost'` \| `'link'` | `'primary'` | Button visual style variant |
| size         | `'xs'` \| `'sm'` \| `'md'` \| `'lg'` \| `'xl'` | `'md'`      | Button size                                    |
| loading      | `boolean`                               | `false`     | Shows loading spinner                          |
| disabled     | `boolean`                               | `false`     | Disables the button                            |
| fullWidth    | `boolean`                               | `false`     | Makes button full width                        |
| leftIcon     | `ReactNode`                             | -           | Icon displayed on the left                     |
| rightIcon    | `ReactNode`                             | -           | Icon displayed on the right                    |
| onClick      | `(event: MouseEvent) => void`           | -           | Click handler                                  |
| type         | `'button'` \| `'submit'` \| `'reset'`   | `'button'`  | Button HTML type                               |
| className    | `string`                                | -           | Additional CSS classes                         |
| children     | `ReactNode`                             | -           | Button content                                 |

---

## 🎨 Theme Integration

This library is designed to work seamlessly with **@asafarim/react-themes** for automatic dark/light mode switching and consistent theming across your application.

### Features
- 🌙 **Automatic Dark/Light Mode**: Respects system preferences with manual override
- 🎨 **CSS Variables**: Consistent design system with customizable variables
- ⚡ **Smooth Transitions**: Seamless theme switching animations
- 📱 **Responsive Design**: Mobile-first approach with touch-friendly controls
- ♿ **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation support

### Basic Setup
```tsx
import React from 'react';
import { ThemeProvider } from '@asafarim/react-themes';
import { PackageLinks, ButtonComponent } from '@asafarim/shared';
import '@asafarim/react-themes/styles.css';

function App() {
  return (
    <ThemeProvider defaultMode="auto" persistMode={true}>
      <div>
        <ButtonComponent variant="primary">
          Click me!
        </ButtonComponent>
        
        <PackageLinks 
          packageName="@asafarim/shared" 
          githubPath="https://github.com/AliSafari-IT/shared" 
        />
      </div>
    </ThemeProvider>
  );
}
```

---

## 🛠️ Development

### Build the Library
```sh
pnpm install
pnpm build
```

### Run the Demo App
```sh
# Install demo dependencies
pnpm demo:install

# Start demo in dev mode
pnpm demo:dev

# Build demo for production
pnpm demo:build

# Preview production build
pnpm demo:preview
```

---

## 📁 Project Structure

```
shared/
├── src/            # Library source code
│   ├── components/ # React components
│   │   ├── Button/ # ButtonComponent
│   │   └── Links/  # PackageLinks
│   ├── styles/     # Global CSS variables and theme system
│   ├── index.ts    # Entry point
│   └── types.d.ts  # TypeScript definitions
├── demo/           # Demo app (Vite + React)
│   ├── src/
│   │   ├── components/
│   │   └── pages/
│   └── dist/       # Built demo
├── dist/           # Built library
├── package.json    # v1.1.1
├── rollup.config.js # Build configuration
└── tsconfig.json   # TypeScript configuration
```

---

## 🚢 Deployment

- The demo is auto-deployed to **GitHub Pages** on every push to `main`
- Workflow: Build library → Build demo → Deploy to [https://alisafari-it.github.io/shared/](https://alisafari-it.github.io/shared/)
- Package is published to npm with public access

---

## 📦 Version History

### v1.1.1 (Latest)
- ✨ Added `ButtonComponent` with professional styling and glass morphism effects
- 🎨 Enhanced theme integration with comprehensive CSS variable system
- 📱 Improved responsive design and accessibility features
- 🔧 Fixed build configuration for better CSS handling

### v1.0.x
- � Initial release with `PackageLinks` component
- 📚 Basic demo application and documentation

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## �📄 License

MIT © [AliSafari-IT](https://github.com/AliSafari-IT)

---

## 🔗 Related Packages

- **[@asafarim/react-themes](https://www.npmjs.com/package/@asafarim/react-themes)** - Theme system integration
- **[@asafarim/display-code](https://www.npmjs.com/package/@asafarim/display-code)** - Code syntax highlighting component
