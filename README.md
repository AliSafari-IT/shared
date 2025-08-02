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

## 💻 Code Usage Examples

### Basic Setup with Theme Provider

```tsx
import React from 'react';
import { ThemeProvider } from '@asafarim/react-themes';
import { 
  ButtonComponent, 
  SearchItems, 
  DDItems, 
  InputFields,
  HeaderComponent,
  DefaultPageHeader,
  HeroPageHeader,
  CallToActionPageHeader,
  FancyPageHeader
} from '@asafarim/shared';
import '@asafarim/react-themes/styles.css';
import '@asafarim/shared/dist/styles.css';

function App() {
  return (
    <ThemeProvider defaultMode="auto" persistMode={true}>
      <div className="app">
        {/* Your components here */}
      </div>
    </ThemeProvider>
  );
}
```

### Complete Example with All Components

```tsx
import React, { useState } from 'react';
import { ThemeProvider } from '@asafarim/react-themes';
import { 
  ButtonComponent, 
  SearchItems, 
  DDItems, 
  InputFields,
  HeaderComponent,
  DefaultPageHeader,
  HeroPageHeader,
  CallToActionPageHeader,
  FancyPageHeader,
  PackageLinks
} from '@asafarim/shared';
import '@asafarim/react-themes/styles.css';
import '@asafarim/shared/dist/styles.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFramework, setSelectedFramework] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const frameworkOptions = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' }
  ];

  return (
    <ThemeProvider defaultMode="auto" persistMode={true}>
      <div className="app">
        {/* Header Components */}
        <DefaultPageHeader
          title="My Application"
          subtitle="Welcome to our platform"
          logoText="MA"
          leftContent={
            <div style={{ display: 'flex', gap: '8px' }}>
              <ButtonComponent size="sm" variant="ghost">Dashboard</ButtonComponent>
              <ButtonComponent size="sm" variant="ghost">Analytics</ButtonComponent>
            </div>
          }
          rightContent={
            <ButtonComponent size="sm" variant="outline">Profile</ButtonComponent>
          }
        />

        {/* Hero Header for Landing Page */}
        <HeroPageHeader
          title="Welcome to Our Platform"
          subtitle="The ultimate solution for your business needs"
          backgroundGradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          cta={
            <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
              <ButtonComponent size="lg" variant="primary">Get Started</ButtonComponent>
              <ButtonComponent size="lg" variant="outline" style={{ color: 'white', borderColor: 'white' }}>
                Learn More
              </ButtonComponent>
            </div>
          }
        />

        {/* Main Content */}
        <main style={{ padding: '2rem' }}>
          {/* Search and Filter Section */}
          <div style={{ marginBottom: '2rem' }}>
            <SearchItems
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              placeholder="Search components..."
              searchType="default"
            />
            
            <DDItems
              selectedValue={selectedFramework}
              onValueChange={setSelectedFramework}
              items={frameworkOptions}
              dropdownType="outlined"
              placeholder="Select framework..."
            />
          </div>

          {/* Form Section */}
          <div style={{ marginBottom: '2rem' }}>
            <h2>Contact Form</h2>
            <InputFields
              type="text"
              styling="default"
              label="Full Name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(value) => setFormData(prev => ({ ...prev, name: value }))}
              required
            />

            <InputFields.Email
              styling="outlined"
              label="Email Address"
              placeholder="user@example.com"
              value={formData.email}
              onChange={(value) => setFormData(prev => ({ ...prev, email: value }))}
              validation={{ required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }}
              validateOnChange
              helperText="Enter a valid email address"
            />

            <InputFields.Textarea
              styling="minimal"
              label="Message"
              placeholder="Share your thoughts..."
              value={formData.message}
              onChange={(value) => setFormData(prev => ({ ...prev, message: value }))}
              rows={4}
              validation={{ maxLength: 500 }}
              showCharacterCount
              helperText="Maximum 500 characters"
            />
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            <ButtonComponent variant="primary" size="md">
              Submit Form
            </ButtonComponent>
            
            <ButtonComponent variant="secondary" size="md">
              Save Draft
            </ButtonComponent>
            
            <ButtonComponent variant="outline" size="md">
              Cancel
            </ButtonComponent>
          </div>

          {/* Package Links */}
          <PackageLinks
            packageName="@asafarim/shared"
            githubPath="packages/shared"
            demoPath="packages/shared"
          />
        </main>

        {/* Call to Action Header */}
        <CallToActionPageHeader
          title="Ready to Get Started?"
          subtitle="Join thousands of developers using our platform"
          ctaButton={
            <ButtonComponent size="lg" variant="success">
              Start Free Trial
            </ButtonComponent>
          }
        />

        {/* Fancy Header for Premium Section */}
        <FancyPageHeader
          title="Enterprise Solutions"
          subtitle="Built for scale, designed for success"
          gradient="linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)"
          leftContent={
            <div style={{ display: 'flex', gap: '8px' }}>
              <ButtonComponent size="sm" variant="ghost" style={{ color: 'white' }}>Solutions</ButtonComponent>
              <ButtonComponent size="sm" variant="ghost" style={{ color: 'white' }}>Industries</ButtonComponent>
            </div>
          }
          rightContent={
            <ButtonComponent size="sm" variant="outline" style={{ color: 'white', borderColor: 'white' }}>
              Contact Sales
            </ButtonComponent>
          }
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
```

### Individual Component Examples

#### Header Components

```tsx
// Base Header Component (Highly Customizable)
<HeaderComponent
  type="default"
  title="My Application"
  subtitle="Welcome to our platform"
  logoText="MA"
  size="md"
  align="space-between"
  elevation="medium"
  showBorder
  showShadow
  leftContent={<ButtonComponent size="sm" variant="ghost">Dashboard</ButtonComponent>}
  rightContent={<ButtonComponent size="sm" variant="outline">Profile</ButtonComponent>}
/>

// Pre-configured Header Variants
<DefaultPageHeader
  title="Dashboard"
  subtitle="Welcome back, User"
  logoText="D"
  leftContent={/* navigation items */}
  rightContent={/* user actions */}
/>

<HeroPageHeader
  title="Welcome to Our Platform"
  subtitle="The ultimate solution for your business needs"
  backgroundGradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  cta={/* call-to-action buttons */}
/>

<CallToActionPageHeader
  title="Premium Features"
  subtitle="Unlock the full potential of our platform"
  ctaButton={<ButtonComponent variant="success">Upgrade Now</ButtonComponent>}
/>

<FancyPageHeader
  title="Enterprise Solutions"
  subtitle="Built for scale, designed for success"
  gradient="linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)"
/>
```

#### Form Components

```tsx
// Search Component
<SearchItems
  searchTerm={searchTerm}
  onSearchChange={setSearchTerm}
  placeholder="Search components..."
  searchType="default"
/>

// Dropdown Component
<DDItems
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  items={[
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'angular', label: 'Angular' }
  ]}
  dropdownType="outlined"
  placeholder="Select framework..."
/>

// Input Fields
<InputFields
  type="text"
  styling="default"
  label="Full Name"
  placeholder="Enter your name"
  value={name}
  onChange={setName}
  required
/>

<InputFields.Email
  styling="outlined"
  label="Email Address"
  placeholder="user@example.com"
  value={email}
  onChange={setEmail}
  validation={{ required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }}
  validateOnChange
/>
```

#### Button Component

```tsx
// Different Variants
<ButtonComponent variant="primary" size="md">Primary Button</ButtonComponent>
<ButtonComponent variant="secondary" size="lg">Secondary Button</ButtonComponent>
<ButtonComponent variant="success" size="sm">Success Button</ButtonComponent>
<ButtonComponent variant="outline" disabled>Disabled Button</ButtonComponent>
<ButtonComponent variant="ghost" loading>Loading Button</ButtonComponent>

// With Icons
<ButtonComponent 
  variant="primary" 
  leftIcon={<span>📧</span>}
  rightIcon={<span>→</span>}
>
  Send Email
</ButtonComponent>
```

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
| **HeaderComponent** | Highly customizable header component | Default, Compact, Outlined, Minimal | ✅ Ready |
| **Header Wrappers** | Pre-configured header variants | DefaultPageHeader, HeroPageHeader, CallToActionPageHeader, FancyPageHeader | ✅ Ready |

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
Demonstrating both the generic `InputFields` API and static subcomponents:
```tsx
import React, { useState } from 'react';
import { InputFields } from '@asafarim/shared';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');
  const [volume, setVolume] = useState('50');

  return (
    <div>
      {/* Generic API */}
      <InputFields
        type="text"
        styling="default"
        label="Full Name"
        placeholder="Enter your name"
        value={name}
        onChange={setName}
        required
      />

      {/* Static subcomponents */}
      <InputFields.Email
        styling="outlined"
        label="Email Address"
        placeholder="user@example.com"
        value={email}
        onChange={setEmail}
        validation={{ required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }}
        validateOnChange
        icon="📧"
        iconPosition="left"
        helperText="Enter a valid email address"
      />

      <InputFields.Textarea
        styling="minimal"
        label="Comments"
        placeholder="Share your thoughts..."
        value={comments}
        onChange={setComments}
        rows={4}
        validation={{ maxLength: 500 }}
        showCharacterCount
        helperText="Maximum 500 characters"
      />

      <InputFields.Range
        styling="default"
        label="Volume"
        min={0}
        max={100}
        step={1}
        value={volume}
        onChange={setVolume}
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

### `HeaderComponent`
A highly customizable header component with multiple types, sizes, and layout options. Perfect for creating application headers, navigation bars, and page headers with full theme integration.

#### Usage
```tsx
import { HeaderComponent } from '@asafarim/shared';

function App() {
  return (
    <div>
      <HeaderComponent
        type="default"
        title="My Application"
        subtitle="Welcome to our platform"
        logoText="MA"
        size="md"
        align="space-between"
        elevation="medium"
        showBorder
        showShadow
        leftContent={<ButtonComponent size="sm" variant="ghost">Dashboard</ButtonComponent>}
        rightContent={<ButtonComponent size="sm" variant="outline">Profile</ButtonComponent>}
      />
      
      <HeaderComponent
        type="minimal"
        title="Landing Page"
        subtitle="The ultimate solution"
        transparent
        align="center"
        size="lg"
        centerContent={<ButtonComponent size="lg" variant="primary">Get Started</ButtonComponent>}
      />
    </div>
  );
}
```

#### Props
| Prop           | Type                                    | Default             | Description                                    |
|----------------|-----------------------------------------|---------------------|------------------------------------------------|
| type           | `'default'` \| `'compact'` \| `'outlined'` \| `'minimal'` | `'default'` | Header visual style variant |
| title          | `string`                                | -                   | Main header title                              |
| subtitle       | `string`                                | -                   | Optional subtitle                              |
| logo           | `ReactNode`                             | -                   | Logo icon component                            |
| logoText       | `string`                                | -                   | Logo text (fallback)                           |
| size           | `'sm'` \| `'md'` \| `'lg'`              | `'md'`              | Header size                                    |
| align          | `'left'` \| `'center'` \| `'right'` \| `'space-between'` | `'left'` | Content alignment |
| elevation      | `'none'` \| `'low'` \| `'medium'` \| `'high'` | `'none'` | Shadow elevation |
| fixed          | `boolean`                               | `false`             | Fixed positioning                              |
| transparent    | `boolean`                               | `false`             | Transparent background                         |
| showBorder     | `boolean`                               | `false`             | Show bottom border                             |
| showShadow     | `boolean`                               | `false`             | Show shadow                                    |
| backgroundColor | `string`                                | -                   | Custom background color                         |
| textColor      | `string`                                | -                   | Custom text color                              |
| leftContent    | `ReactNode`                             | -                   | Left side content                              |
| rightContent   | `ReactNode`                             | -                   | Right side content                             |
| centerContent  | `ReactNode`                             | -                   | Center content                                 |
| onLogoClick    | `() => void`                            | -                   | Logo click handler                             |
| onTitleClick   | `() => void`                            | -                   | Title click handler                            |
| className      | `string`                                | -                   | Additional CSS classes                         |
| style          | `React.CSSProperties`                   | -                   | Inline styles                                  |

### `DefaultPageHeader`
A pre-configured header component optimized for standard page layouts with balanced design and medium elevation.

#### Usage
```tsx
import { DefaultPageHeader } from '@asafarim/shared';

function App() {
  return (
    <DefaultPageHeader
      title="Dashboard"
      subtitle="Welcome back, User"
      logoText="D"
      leftContent={
        <div style={{ display: 'flex', gap: '8px' }}>
          <ButtonComponent size="sm" variant="ghost">Dashboard</ButtonComponent>
          <ButtonComponent size="sm" variant="ghost">Analytics</ButtonComponent>
        </div>
      }
      rightContent={
        <ButtonComponent size="sm" variant="outline">Profile</ButtonComponent>
      }
      onLogoClick={() => console.log('Logo clicked')}
      onTitleClick={() => console.log('Title clicked')}
    />
  );
}
```

#### Props
| Prop           | Type                                    | Default             | Description                                    |
|----------------|-----------------------------------------|---------------------|------------------------------------------------|
| title          | `string`                                | -                   | Main header title                              |
| subtitle       | `string`                                | -                   | Optional subtitle                              |
| logo           | `ReactNode`                             | -                   | Logo icon component                            |
| logoText       | `string`                                | -                   | Logo text (fallback)                           |
| leftContent    | `ReactNode`                             | -                   | Left side content                              |
| rightContent   | `ReactNode`                             | -                   | Right side content                             |
| centerContent  | `ReactNode`                             | -                   | Center content                                 |
| onLogoClick    | `() => void`                            | -                   | Logo click handler                             |
| onTitleClick   | `() => void`                            | -                   | Title click handler                            |
| fixed          | `boolean`                               | `false`             | Fixed positioning                              |
| className      | `string`                                | -                   | Additional CSS classes                         |
| style          | `React.CSSProperties`                   | -                   | Inline styles                                  |

### `HeroPageHeader`
A hero-style header component designed for landing pages with background support and prominent call-to-action integration.

#### Usage
```tsx
import { HeroPageHeader } from '@asafarim/shared';

function App() {
  return (
    <HeroPageHeader
      title="Welcome to Our Platform"
      subtitle="The ultimate solution for your business needs"
      logoText="P"
      backgroundGradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      cta={
        <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
          <ButtonComponent size="lg" variant="primary">Get Started</ButtonComponent>
          <ButtonComponent size="lg" variant="outline" style={{ color: 'white', borderColor: 'white' }}>
            Learn More
          </ButtonComponent>
        </div>
      }
      leftContent={<ButtonComponent size="sm" variant="ghost" style={{ color: 'white' }}>About</ButtonComponent>}
      rightContent={<ButtonComponent size="sm" variant="outline" style={{ color: 'white', borderColor: 'white' }}>Contact</ButtonComponent>}
    />
  );
}
```

#### Props
| Prop               | Type                                    | Default             | Description                                    |
|--------------------|-----------------------------------------|---------------------|------------------------------------------------|
| title              | `string`                                | -                   | Hero title                                     |
| subtitle           | `string`                                | -                   | Hero subtitle                                  |
| logo               | `ReactNode`                             | -                   | Logo icon component                            |
| logoText           | `string`                                | -                   | Logo text (fallback)                           |
| backgroundImage    | `string`                                | -                   | Background image URL                           |
| backgroundGradient | `string`                                | -                   | CSS gradient string                            |
| cta                | `ReactNode`                             | -                   | Call-to-action component                       |
| leftContent        | `ReactNode`                             | -                   | Left side content                              |
| rightContent       | `ReactNode`                             | -                   | Right side content                             |
| onLogoClick        | `() => void`                            | -                   | Logo click handler                             |
| onTitleClick       | `() => void`                            | -                   | Title click handler                            |
| className          | `string`                                | -                   | Additional CSS classes                         |
| style              | `React.CSSProperties`                   | -                   | Inline styles                                  |

### `CallToActionPageHeader`
A conversion-focused header component optimized for user engagement and sign-up flows with prominent call-to-action button placement.

#### Usage
```tsx
import { CallToActionPageHeader } from '@asafarim/shared';

function App() {
  return (
    <CallToActionPageHeader
      title="Premium Features"
      subtitle="Unlock the full potential of our platform"
      logoText="PF"
      ctaButton={
        <ButtonComponent size="md" variant="success">
          Upgrade Now
        </ButtonComponent>
      }
      leftContent={
        <div style={{ display: 'flex', gap: '8px' }}>
          <ButtonComponent size="sm" variant="ghost">Features</ButtonComponent>
          <ButtonComponent size="sm" variant="ghost">Pricing</ButtonComponent>
        </div>
      }
      centerContent={<span>Limited time offer!</span>}
    />
  );
}
```

#### Props
| Prop           | Type                                    | Default             | Description                                    |
|----------------|-----------------------------------------|---------------------|------------------------------------------------|
| title          | `string`                                | -                   | Header title                                   |
| subtitle       | `string`                                | -                   | Header subtitle                                |
| logo           | `ReactNode`                             | -                   | Logo icon component                            |
| logoText       | `string`                                | -                   | Logo text (fallback)                           |
| ctaButton      | `ReactNode`                             | -                   | Required CTA button                            |
| leftContent    | `ReactNode`                             | -                   | Left side content                              |
| centerContent  | `ReactNode`                             | -                   | Center content                                 |
| onLogoClick    | `() => void`                            | -                   | Logo click handler                             |
| onTitleClick   | `() => void`                            | -                   | Title click handler                            |
| fixed          | `boolean`                               | `false`             | Fixed positioning                              |
| className      | `string`                                | -                   | Additional CSS classes                         |
| style          | `React.CSSProperties`                   | -                   | Inline styles                                  |

### `FancyPageHeader`
A premium header component with gradient styling and visual impact, perfect for high-impact designs and corporate websites.

#### Usage
```tsx
import { FancyPageHeader } from '@asafarim/shared';

function App() {
  return (
    <FancyPageHeader
      title="Enterprise Solutions"
      subtitle="Built for scale, designed for success"
      logoText="ES"
      gradient="linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)"
      leftContent={
        <div style={{ display: 'flex', gap: '8px' }}>
          <ButtonComponent size="sm" variant="ghost" style={{ color: 'white' }}>Solutions</ButtonComponent>
          <ButtonComponent size="sm" variant="ghost" style={{ color: 'white' }}>Industries</ButtonComponent>
        </div>
      }
      rightContent={
        <ButtonComponent size="sm" variant="outline" style={{ color: 'white', borderColor: 'white' }}>
          Contact Sales
        </ButtonComponent>
      }
    />
  );
}
```

#### Props
| Prop           | Type                                    | Default             | Description                                    |
|----------------|-----------------------------------------|---------------------|------------------------------------------------|
| title          | `string`                                | -                   | Header title                                   |
| subtitle       | `string`                                | -                   | Header subtitle                                |
| logo           | `ReactNode`                             | -                   | Logo icon component                            |
| logoText       | `string`                                | -                   | Logo text (fallback)                           |
| icon           | `ReactNode`                             | -                   | Icon component                                 |
| gradient       | `string`                                | -                   | Custom gradient background                     |
| leftContent    | `ReactNode`                             | -                   | Left side content                              |
| rightContent   | `ReactNode`                             | -                   | Right side content                             |
| centerContent  | `ReactNode`                             | -                   | Center content                                 |
| onLogoClick    | `() => void`                            | -                   | Logo click handler                             |
| onTitleClick   | `() => void`                            | -                   | Title click handler                            |
| fixed          | `boolean`                               | `false`             | Fixed positioning                              |
| className      | `string`                                | -                   | Additional CSS classes                         |
| style          | `React.CSSProperties`                   | -                   | Inline styles                                  |

### `AdminHeader`
A specialized header component designed for admin interfaces and dashboards with built-in stats, pagination, and action buttons.

#### Usage
```tsx
import { AdminHeader, ButtonComponent } from '@asafarim/shared';

function App() {
  return (
    <AdminHeader
      title="User Management"
      subtitle="Manage all user accounts and permissions"
      icon={
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
        </svg>
      }
      totalCount={1247}
      itemName="Users"
      currentPage={1}
      totalPages={5}
      showPagination={true}
      actions={
        <div style={{ display: 'flex', gap: '8px' }}>
          <ButtonComponent size="sm" variant="primary">Add User</ButtonComponent>
          <ButtonComponent size="sm" variant="outline">Export</ButtonComponent>
          <ButtonComponent size="sm" variant="ghost">Settings</ButtonComponent>
        </div>
      }
    />
  );
}
```

#### Props
| Prop           | Type                                    | Default             | Description                                    |
|----------------|-----------------------------------------|---------------------|------------------------------------------------|
| title          | `string`                                | -                   | Main header title                              |
| subtitle       | `string`                                | -                   | Optional subtitle                              |
| icon           | `ReactNode`                             | -                   | Custom icon component                          |
| totalCount     | `number`                                | -                   | Total number of items                          |
| itemName       | `string`                                | -                   | Name of the item type (e.g., "Users", "Products") |
| currentPage    | `number`                                | `1`                 | Current page number                            |
| totalPages     | `number`                                | `1`                 | Total number of pages                          |
| showPagination | `boolean`                               | `false`             | Show pagination information                    |
| actions        | `ReactNode`                             | -                   | Action buttons or elements                     |
| className      | `string`                                | -                   | Additional CSS classes                         |
| style          | `React.CSSProperties`                   | -                   | Inline styles                                  |

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
