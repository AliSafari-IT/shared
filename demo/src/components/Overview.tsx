import { useTheme, ThemeSelector } from "@asafarim/react-themes";
import { PackageLinks } from "@asafarim/shared";

export default function Overview() {
  const { mode, currentTheme } = useTheme();

  return (
    <div>
      <div className="demo-section">
        <h2 className="demo-title">Welcome to @asafarim/shared</h2>
        <div className="demo-description">
          <p>
            This is a collection of five reusable React components and utilities
            designed for ASafariM web applications. Each component is built with
            TypeScript and follows modern React best practices.
          </p>
          <p>
            Navigate through the menu above to explore individual components and
            see live examples with code snippets. The demo uses{" "}
            <strong>@asafarim/react-themes</strong> for automatic dark/light
            mode switching and responsive design.
          </p>
        </div>
      </div>

      <PackageLinks
        packageName="@asafarim/shared"
        githubPath="https://github.com/AliSafari-IT/shared"
        demoPath="https://alisafari-it.github.io/shared/"
      />

      <div className="demo-section">
        <h3 className="demo-title">🎨 Theme System Demo</h3>
        <div className="demo-description">
          <p>This demo showcases the integration with @asafarim/react-themes package:</p>
          <div className="theme-demo-grid">
            <div className="theme-info-card">
              <h4>Current Theme</h4>
              <p><strong>Mode:</strong> {mode}</p>
              <p><strong>Theme:</strong> {currentTheme.name}</p>
              <p><strong>Primary Color:</strong> {currentTheme.colors.primary}</p>
            </div>
            <div className="theme-info-card">
              <h4>Quick Theme Switch</h4>
              <ThemeSelector showLabels={true} />
              <p className="theme-help-text">
                Try switching themes to see live updates!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3 className="demo-title">Available Components</h3>
        <div className="props-table">
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Component</th>
                <th>Description</th>
                <th>Theme Aware</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PackageLinks</td>
                <td>
                  Displays links to npm package, GitHub repository, and live
                  demo
                </td>
                <td>✅ Yes</td>
                <td>✅ Ready</td>
              </tr>
              <tr>
                <td>ButtonComponent</td>
                <td>
                  Versatile button component with multiple variants, sizes, and states
                </td>
                <td>✅ Yes</td>
                <td>✅ Ready</td>
              </tr>
              <tr>
                <td>SearchItems</td>
                <td>
                  Flexible search input component with multiple visual styles and clear functionality
                </td>
                <td>✅ Yes</td>
                <td>✅ Ready</td>
              </tr>
              <tr>
                <td>DDItems</td>
                <td>
                  Dropdown/select component with customizable options and visual styles
                </td>
                <td>✅ Yes</td>
                <td>✅ Ready</td>
              </tr>
              <tr>
                <td>InputFields</td>
                <td>
                  Comprehensive form input component supporting 10 input types with validation and states
                </td>
                <td>✅ Yes</td>
                <td>✅ Ready</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="demo-section">
        <h3 className="demo-title">🚀 Features</h3>
        <div className="features-grid">
          <div>
            <h4 style={{ color: "var(--theme-color-primary)" }}>
              🎨 Theme Integration
            </h4>
            <ul>
              <li>Automatic dark/light mode detection</li>
              <li>Manual theme switching</li>
              <li>CSS variables for consistent styling</li>
              <li>Smooth transitions between themes</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: "var(--theme-color-primary)" }}>
              📱 Responsive Design
            </h4>
            <ul>
              <li>Mobile-first approach</li>
              <li>Flexible grid layouts</li>
              <li>Touch-friendly controls</li>
              <li>Adaptive typography</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: "var(--theme-color-primary)" }}>
              ♿ Accessibility
            </h4>
            <ul>
              <li>WCAG 2.1 AA compliant</li>
              <li>Keyboard navigation support</li>
              <li>Screen reader friendly</li>
              <li>High contrast mode support</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3 className="demo-title">Installation</h3>
        <div className="demo-code">
          <pre>{`# Install the shared component library
npm install @asafarim/shared

# Install the theme system
npm install @asafarim/react-themes`}</pre>
        </div>
        <p>or with pnpm:</p>
        <div className="demo-code">
          <pre>{`# Install both packages
pnpm add @asafarim/shared @asafarim/react-themes`}</pre>
        </div>
      </div>

      <div className="demo-section">
        <h3 className="demo-title">Basic Usage with Themes</h3>
        <div className="demo-code">
          <pre>{`import React, { useState } from 'react';
import { ThemeProvider } from '@asafarim/react-themes';
import { 
  PackageLinks, 
  ButtonComponent, 
  SearchItems, 
  DDItems, 
  InputFields 
} from '@asafarim/shared';
import '@asafarim/react-themes/styles.css';

function App() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [email, setEmail] = useState('');

  const options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'angular', label: 'Angular' }
  ];

  return (
    <ThemeProvider defaultMode="auto" persistMode={true}>
      <div>
        <PackageLinks 
          packageName="@asafarim/shared" 
          githubPath="https://github.com/AliSafari-IT/shared" 
          demoPath="https://alisafari-it.github.io/shared/" 
        />
        
        <SearchItems
          searchTerm={search}
          onSearchChange={setSearch}
          searchType="outlined"
          placeholder="Search components..."
        />
        
        <DDItems
          selectedValue={category}
          onValueChange={setCategory}
          items={options}
          dropdownType="outlined"
          placeholder="Select framework..."
        />
        
        <InputFields.Email
          styling="outlined"
          label="Email Address"
          value={email}
          onChange={setEmail}
          placeholder="your@email.com"
          required
          icon="📧"
          iconPosition="left"
        />
        
        <ButtonComponent variant="primary" size="lg">
          Get Started
        </ButtonComponent>
      </div>
    </ThemeProvider>
  );
}`}</pre>
        </div>
      </div>
    </div>
  );
}
