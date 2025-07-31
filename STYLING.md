# @asafarim/shared - Component Styling Guide

## 🎨 Using Component Styles

When you import components from `@asafarim/shared`, you need to also import the CSS styles for them to appear correctly.

### Method 1: Import the Complete Stylesheet (Recommended)

Import the complete stylesheet in your main CSS file or at the root of your application:

```css
/* In your main CSS file (e.g., App.css, index.css, or globals.css) */
@import '@asafarim/shared/dist/styles.css';
```

Or import it in your JavaScript/TypeScript entry point:

```javascript
// In your main entry file (e.g., main.tsx, index.tsx, App.tsx)
import '@asafarim/shared/dist/styles.css';
```

### Method 2: Import Individual Component Styles

If you prefer to import only specific component styles:

```css
/* Import specific component styles */
@import '@asafarim/shared/src/components/Button/ButtonComponent.css';
@import '@asafarim/shared/src/components/SearchBox/SearchItems.css';
@import '@asafarim/shared/src/components/Dropdowns/DDItems.css';
@import '@asafarim/shared/src/components/Links/PackageLinks.css';

/* Important: Always import the design system variables */
@import '@asafarim/shared/src/styles/index.css';
```

### Method 3: Webpack/Vite Auto-Import

Some bundlers can automatically detect and import CSS when you import components. Add this to your bundler configuration:

```javascript
// webpack.config.js or vite.config.js
{
  resolve: {
    alias: {
      '@asafarim/shared/styles': '@asafarim/shared/dist/styles.css'
    }
  }
}
```

## 🎨 Component Examples

### ButtonComponent

```tsx
import React from 'react';
import { ButtonComponent } from '@asafarim/shared';
import '@asafarim/shared/dist/styles.css'; // Import styles

function MyApp() {
  return (
    <div>
      <ButtonComponent variant="primary" size="md">
        Click Me
      </ButtonComponent>
      <ButtonComponent variant="secondary" outline="primary">
        Outlined Button
      </ButtonComponent>
    </div>
  );
}
```

### SearchItems

```tsx
import React, { useState } from 'react';
import { SearchItems } from '@asafarim/shared';
import '@asafarim/shared/dist/styles.css';

function SearchDemo() {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <SearchItems
      searchTerm={searchTerm}
      onSearchChange={setSearchTerm}
      placeholder="Search items..."
      type="default"
    />
  );
}
```

### DDItems (Dropdown)

```tsx
import React, { useState } from 'react';
import { DDItems } from '@asafarim/shared';
import '@asafarim/shared/dist/styles.css';

function DropdownDemo() {
  const [selected, setSelected] = useState('');
  
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  
  return (
    <DDItems
      options={options}
      value={selected}
      onChange={setSelected}
      placeholder="Select an option"
    />
  );
}
```

## 🎨 Theme Integration

The components use CSS variables for theming. You can customize the appearance by overriding these variables:

```css
/* Custom theme overrides */
:root {
  --theme-color-primary: #your-brand-color;
  --theme-color-secondary: #your-secondary-color;
  --theme-radius-md: 12px; /* Custom border radius */
  --theme-font-size-base: 16px; /* Custom font size */
}

/* Dark theme customizations */
[data-theme="dark"] {
  --theme-color-background: #your-dark-bg;
  --theme-color-text: #your-dark-text;
}
```

## 🚨 Troubleshooting

### Styles Not Applied

If your components appear unstyled:

1. ✅ **Check CSS Import**: Ensure you've imported `@asafarim/shared/dist/styles.css`
2. ✅ **Import Order**: Import the CSS before or in the same file where you use components
3. ✅ **Build Process**: Make sure your bundler processes CSS imports
4. ✅ **CSS Variables**: Verify that CSS variables are supported in your target browsers

### Component Appears Different

If components look different from the demo:

1. ✅ **CSS Conflicts**: Check for conflicting CSS rules in your application
2. ✅ **CSS Reset**: Consider using a CSS reset or normalize.css
3. ✅ **Theme Context**: Ensure theme provider is properly configured if using themes
4. ✅ **CSS Specificity**: The component styles might be overridden by more specific selectors

### CSS Variables Not Working

If theming doesn't work:

1. ✅ **Browser Support**: CSS variables require modern browsers (IE11+ with polyfill)
2. ✅ **Variable Definition**: Ensure CSS variables are defined in `:root` or appropriate selectors
3. ✅ **Import Order**: Import the design system CSS before component-specific CSS

## 📦 Build Information

- **CSS Bundle Size**: ~30KB minified
- **CSS Variables**: 200+ theme variables included
- **Browser Support**: Modern browsers (Chrome 49+, Firefox 31+, Safari 9.1+)
- **Framework Agnostic**: Works with any CSS-in-JS solution or CSS preprocessor

## 🔧 Development

If you're contributing to the library or need to modify styles:

```bash
# Install dependencies
pnpm install

# Build the library
pnpm build

# Run the demo with your changes
pnpm demo:dev
```

## 📚 Resources

- [Demo Application](https://alisafari-it.github.io/shared/)
- [GitHub Repository](https://github.com/AliSafari-IT/shared)
- [NPM Package](https://www.npmjs.com/package/@asafarim/shared)
- [CSS Variables Reference](./src/styles/index.css)
