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

## 🎨 Import Styles

**Important:** Components require CSS imports to display correctly.

```tsx
// Import styles in your main entry file
import '@asafarim/shared/dist/styles.css';

// Then use components
import { ButtonComponent, SearchItems, DDItems, InputFields } from '@asafarim/shared';
```

**📖 For detailed styling instructions, see [STYLING.md](./STYLING.md)**

---

## 🌐 Live Demo & Documentation

- **Live Demo:** [alisafari-it.github.io/shared](https://alisafari-it.github.io/shared/)
- **Source:** [github.com/AliSafari-IT/shared](https://github.com/AliSafari-IT/shared)

Explore all components with interactive examples, theme switching, and comprehensive prop documentation.

---

## 🧩 Components

This library currently includes five main components, each with multiple variants and comprehensive theme integration:

| Component | Description | Styles | Status |
|-----------|-------------|---------|--------|
| **PackageLinks** | Display links to npm, GitHub, and demos | Theme-aware styling | ✅ Ready |
| **ButtonComponent** | Versatile button with 9 variants, 5 sizes | Primary, Secondary, Success, Danger, Warning, Info, Outline, Ghost, Link | ✅ Ready |
| **SearchItems** | Flexible search input with clear functionality | Default, Compact, Outlined, Minimal | ✅ Ready |
| **DDItems** | Dropdown/select with customizable options | Default, Compact, Outlined, Minimal | ✅ Ready |
| **InputFields** | Comprehensive form input with 10+ input types | Default, Compact, Outlined, Minimal | ✅ Ready |

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

### `SearchItems`
A flexible search input component with multiple visual styles and built-in clear functionality. Perfect for filtering, searching, and form inputs.

#### Usage
```tsx
import { SearchItems } from '@asafarim/shared';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div>
      <SearchItems
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Search components..."
        searchType="default"
      />
      
      <SearchItems
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Filter results..."
        searchType="outlined"
      />
    </div>
  );
}
```

#### Props
| Prop           | Type                                    | Default             | Description                                    |
|----------------|-----------------------------------------|---------------------|------------------------------------------------|
| searchTerm     | `string`                                | -                   | Current search value (controlled)              |
| onSearchChange | `(value: string) => void`               | -                   | Callback when search value changes             |
| placeholder    | `string`                                | `"Search projects..."` | Placeholder text for the input              |
| className      | `string`                                | `"search-input"`    | CSS class name for the input element          |
| searchType     | `'default'` \| `'compact'` \| `'outlined'` \| `'minimal'` | `'default'` | Visual style variant |

### `DDItems` (Dropdown Items)
A dropdown/select component with customizable options and multiple visual styles. Ideal for forms, filters, and selection controls.

#### Usage
```tsx
import { DDItems } from '@asafarim/shared';

function App() {
  const [selectedValue, setSelectedValue] = useState('');
  
  const options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'angular', label: 'Angular' },
  ];
  
  return (
    <div>
      <DDItems
        selectedValue={selectedValue}
        onValueChange={setSelectedValue}
        items={options}
        dropdownType="default"
        placeholder="Select framework..."
      />
      
      <DDItems
        selectedValue={selectedValue}
        onValueChange={setSelectedValue}
        items={options}
        dropdownType="outlined"
        placeholder="Choose option..."
      />
    </div>
  );
}
```

#### Props
| Prop           | Type                                    | Default             | Description                                    |
|----------------|-----------------------------------------|---------------------|------------------------------------------------|
| selectedValue  | `string`                                | -                   | Currently selected value (controlled)          |
| onValueChange  | `(value: string) => void`               | -                   | Callback when selection changes                |
| items          | `DropdownItem[]`                        | -                   | Array of options with value and label         |
| dropdownType   | `'default'` \| `'compact'` \| `'outlined'` \| `'minimal'` | `'default'` | Visual style variant |
| className      | `string`                                | `"filter-select"`   | CSS class name for the select element         |
| placeholder    | `string`                                | `"Select an option"` | Placeholder text when no option selected     |

#### DropdownItem Interface
```tsx
interface DropdownItem {
  value: string;
  label: string;
}
```

### `InputFields`
A comprehensive form input component supporting 10+ input types with validation, states, and accessibility features. Perfect for building robust forms with consistent styling.

#### Usage
```tsx
import { InputFields } from '@asafarim/shared';

function App() {
  const [value, setValue] = useState('');
  
  return (
    <div>
      {/* Basic text input */}
      <InputFields
        type="text"
        styling="default"
        label="Full Name"
        placeholder="Enter your name"
        value={value}
        onChange={setValue}
        required={true}
      />
      
      {/* Email with validation */}
      <InputFields
        type="email"
        styling="outlined"
        label="Email Address"
        placeholder="user@example.com"
        validation={{
          required: true,
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        }}
        validateOnChange={true}
        icon="📧"
        iconPosition="left"
        helperText="Enter a valid email address"
      />
      
      {/* Textarea with character count */}
      <InputFields
        type="textarea"
        styling="minimal"
        label="Comments"
        placeholder="Share your thoughts..."
        rows={4}
        validation={{ maxLength: 500 }}
        showCharacterCount={true}
        helperText="Maximum 500 characters"
      />
    </div>
  );
}
```

#### Props
| Prop           | Type                                    | Default             | Description                                    |
|----------------|-----------------------------------------|---------------------|------------------------------------------------|
| type           | `InputFieldType`                        | `'text'`           | Input type (text, email, password, number, tel, url, search, date, time, textarea, range) |
| styling        | `'default'` \| `'compact'` \| `'outlined'` \| `'minimal'` | `'default'` | Visual style variant |
| label          | `string`                                | -                   | Input label text                               |
| placeholder    | `string`                                | -                   | Placeholder text                               |
| value          | `string`                                | -                   | Input value (controlled)                       |
| onChange       | `(value: string, name?: string) => void` | -                 | Change handler function                        |
| validation     | `ValidationRule`                        | -                   | Validation configuration                       |
| error          | `string`                                | -                   | Error message to display                       |
| success        | `boolean`                               | `false`             | Success state styling                          |
| loading        | `boolean`                               | `false`             | Loading state with spinner                     |
| disabled       | `boolean`                               | `false`             | Disabled state                                 |
| readOnly       | `boolean`                               | `false`             | Read-only state                                |
| required       | `boolean`                               | `false`             | Required field indicator                       |
| size           | `'sm'` \| `'md'` \| `'lg'`             | `'md'`              | Input size                                     |
| icon           | `React.ReactNode`                       | -                   | Icon element                                   |
| iconPosition   | `'left'` \| `'right'`                  | `'left'`            | Icon position                                  |
| helperText     | `string`                                | -                   | Helper text below input                        |
| showCharacterCount | `boolean`                           | `false`             | Show character counter                         |

#### InputFieldType
```tsx
type InputFieldType = 
  | 'text' | 'email' | 'password' | 'number' | 'tel' 
  | 'url' | 'search' | 'date' | 'time' | 'textarea' | 'range';
```

#### ValidationRule Interface
```tsx
interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}
```

---

## 🎨 Theme Integration

This library is designed to work seamlessly with **@asafarim/react-themes** for automatic dark/light mode switching and consistent theming across your application.

### Features
- 🌙 **Automatic Dark/Light Mode**: Respects system preferences with manual override
- 🎨 **CSS Variables**: Consistent design system with customizable variables
- ⚡ **Smooth Transitions**: Seamless theme switching animations
- 📱 **Responsive Design**: Mobile-first approach with touch-friendly controls
- ♿ **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation support
- 🎯 **Multiple Variants**: Each component offers different visual styles
- 🔧 **TypeScript Support**: Full type definitions for better developer experience
- 📦 **Tree Shaking**: Optimized bundle size with selective imports

### Component Features by Type

#### Form & Input Components
- **SearchItems**: 4 visual styles, built-in clear button, focus states
- **DDItems**: 4 visual styles, custom dropdown arrow, keyboard navigation
- **ButtonComponent**: 9 variants, 5 sizes, loading states, icon support

#### Display Components  
- **PackageLinks**: Automatic link generation, responsive layout, icon integration

### Basic Setup
```tsx
import React, { useState } from 'react';
import { ThemeProvider } from '@asafarim/react-themes';
import { PackageLinks, ButtonComponent, SearchItems, DDItems } from '@asafarim/shared';
import '@asafarim/react-themes/styles.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFramework, setSelectedFramework] = useState('');
  
  const frameworkOptions = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'angular', label: 'Angular' },
  ];

  return (
    <ThemeProvider defaultMode="auto" persistMode={true}>
      <div>
        <ButtonComponent variant="primary">
          Click me!
        </ButtonComponent>
        
        <SearchItems
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Search components..."
          searchType="outlined"
        />
        
        <DDItems
          selectedValue={selectedFramework}
          onValueChange={setSelectedFramework}
          items={frameworkOptions}
          dropdownType="outlined"
          placeholder="Select framework..."
        />
        
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
│   │   ├── Button/     # ButtonComponent
│   │   ├── Links/      # PackageLinks
│   │   ├── SearchBox/  # SearchItems
│   │   ├── Dropdowns/  # DDItems
│   │   └── Inputs/     # InputFields
│   ├── styles/     # Global CSS variables and theme system
│   ├── index.ts    # Entry point
│   └── types.d.ts  # TypeScript definitions
├── demo/           # Demo app (Vite + React)
│   ├── src/
│   │   ├── components/ # Demo components
│   │   │   ├── Overview.tsx
│   │   │   ├── PackageLinksDemo.tsx
│   │   │   ├── ButtonComponentDemo.tsx
│   │   │   ├── SearchItemsDemo.tsx
│   │   │   ├── DDItemsDemo.tsx
│   │   │   └── InputFieldsDemo.tsx
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

---

## 📖 Quick Reference

### All Available Imports
```tsx
import { 
  PackageLinks,      // Link display component
  ButtonComponent,   // Versatile button with variants
  SearchItems,       // Search input with styles
  DDItems,          // Dropdown/select component
  InputFields       // Comprehensive form input with 10+ types
} from '@asafarim/shared';
```

### Common Patterns
```tsx
// Basic form with all components
function ContactForm() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  return (
    <form>
      <SearchItems
        searchTerm={search}
        onSearchChange={setSearch}
        searchType="outlined"
        placeholder="Search..."
      />
      
      <DDItems
        selectedValue={category}
        onValueChange={setCategory}
        items={categoryOptions}
        dropdownType="outlined"
        placeholder="Select category"
      />
      
      <InputFields
        type="email"
        styling="outlined"
        label="Email Address"
        value={email}
        onChange={setEmail}
        placeholder="your@email.com"
        required={true}
      />
      
      <InputFields
        type="textarea"
        styling="outlined"
        label="Message"
        value={message}
        onChange={setMessage}
        placeholder="Your message..."
        rows={4}
      />
      
      <ButtonComponent 
        type="submit" 
        variant="primary"
        size="lg"
      >
        Submit
      </ButtonComponent>
    </form>
  );
}
```

### Style Variants Quick Reference
- **Button Variants**: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `outline`, `ghost`, `link`
- **Button Sizes**: `xs`, `sm`, `md`, `lg`, `xl`
- **Search/Dropdown/Input Types**: `default`, `compact`, `outlined`, `minimal`
- **Input Field Types**: `text`, `email`, `password`, `number`, `tel`, `url`, `search`, `date`, `time`, `textarea`, ...
