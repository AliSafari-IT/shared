import { useState } from 'react';
import { SearchItems } from '@asafarim/shared';
import { useTheme } from '@asafarim/react-themes';

export default function SearchItemsDemo() {
  const { mode, currentTheme } = useTheme();
  
  // Search states for different examples
  const [defaultSearch, setDefaultSearch] = useState('');
  const [compactSearch, setCompactSearch] = useState('');
  const [outlinedSearch, setOutlinedSearch] = useState('');
  const [minimalSearch, setMinimalSearch] = useState('');
  const [demoSearch, setDemoSearch] = useState('React components');

  // Sample data for search demonstration
  const sampleItems = [
    { id: 1, name: 'React Components', category: 'UI', description: 'Reusable React components for modern web apps' },
    { id: 2, name: 'Button Component', category: 'UI', description: 'Versatile button with multiple variants and states' },
    { id: 3, name: 'SearchBox', category: 'UI', description: 'Flexible search input with multiple styles' },
    { id: 4, name: 'PackageLinks', category: 'UI', description: 'Component for displaying package links' },
    { id: 5, name: 'Theme System', category: 'System', description: 'Dark/light mode theme integration' },
    { id: 6, name: 'TypeScript Support', category: 'Dev', description: 'Full TypeScript definitions and support' },
    { id: 7, name: 'CSS Variables', category: 'Styling', description: 'Consistent design system variables' },
    { id: 8, name: 'Accessibility', category: 'A11y', description: 'WCAG 2.1 AA compliant components' },
  ];

  const filteredItems = sampleItems.filter(item =>
    item.name.toLowerCase().includes(demoSearch.toLowerCase()) ||
    item.description.toLowerCase().includes(demoSearch.toLowerCase()) ||
    item.category.toLowerCase().includes(demoSearch.toLowerCase())
  );

  return (
    <div>
      <div className="demo-section">
        <h2 className="demo-title">SearchItems</h2>
        <div className="demo-description">
          <p>
            The SearchItems component is a flexible search input with multiple visual styles and built-in 
            clear functionality. It supports different search types including default, compact, outlined, 
            and minimal styles, all fully theme-aware and accessible.
          </p>
          <div style={{ 
            padding: 'var(--theme-spacing-md)', 
            backgroundColor: 'var(--theme-color-background-secondary)',
            borderRadius: 'var(--theme-radius-md)',
            marginTop: 'var(--theme-spacing-lg)'
          }}>
            <strong>Current Theme Mode:</strong> {mode} | <strong>Theme:</strong> {currentTheme.name}
          </div>
        </div>

        <div className="demo-section">
          <h3 className="demo-title">Props</h3>
          <table className="props-table">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>searchTerm</td>
                <td>string</td>
                <td>-</td>
                <td>Current search value (controlled)</td>
              </tr>
              <tr>
                <td>onSearchChange</td>
                <td>{'(value: string) => void'}</td>
                <td>-</td>
                <td>Callback function when search value changes</td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td>string</td>
                <td>"Search projects..."</td>
                <td>Placeholder text for the input</td>
              </tr>
              <tr>
                <td>className</td>
                <td>string</td>
                <td>"search-input"</td>
                <td>CSS class name for the input element</td>
              </tr>
              <tr>
                <td>searchType</td>
                <td>"default" | "compact" | "outlined" | "minimal"</td>
                <td>"default"</td>
                <td>Visual style variant of the search input</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="demo-section">
        <h3 className="demo-title">Search Types</h3>
        <div className="demo-description">
          <p>The component supports four different visual styles to match various design needs.</p>
        </div>
        
        <div className="example-showcase">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
            
            <div style={{ width: '100%', maxWidth: '400px' }}>
              <h4 style={{ marginBottom: '12px', textAlign: 'center' }}>Default</h4>
              <SearchItems
                searchTerm={defaultSearch}
                onSearchChange={setDefaultSearch}
                placeholder="Search with default style..."
                searchType="default"
              />
            </div>

            <div style={{ width: '100%', maxWidth: '400px' }}>
              <h4 style={{ marginBottom: '12px', textAlign: 'center' }}>Compact</h4>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <SearchItems
                  searchTerm={compactSearch}
                  onSearchChange={setCompactSearch}
                  placeholder="Compact search..."
                  searchType="compact"
                />
              </div>
            </div>

            <div style={{ width: '100%', maxWidth: '400px' }}>
              <h4 style={{ marginBottom: '12px', textAlign: 'center' }}>Outlined</h4>
              <SearchItems
                searchTerm={outlinedSearch}
                onSearchChange={setOutlinedSearch}
                placeholder="Search with outlined style..."
                searchType="outlined"
              />
            </div>

            <div style={{ width: '100%', maxWidth: '400px' }}>
              <h4 style={{ marginBottom: '12px', textAlign: 'center' }}>Minimal</h4>
              <SearchItems
                searchTerm={minimalSearch}
                onSearchChange={setMinimalSearch}
                placeholder="Minimal search style..."
                searchType="minimal"
              />
            </div>
          </div>
        </div>

        <div className="demo-code">
          <pre>{`<SearchItems
  searchTerm={searchTerm}
  onSearchChange={setSearchTerm}
  placeholder="Search with default style..."
  searchType="default"
/>

<SearchItems
  searchTerm={searchTerm}
  onSearchChange={setSearchTerm}
  placeholder="Compact search..."
  searchType="compact"
/>

<SearchItems
  searchTerm={searchTerm}
  onSearchChange={setSearchTerm}
  placeholder="Search with outlined style..."
  searchType="outlined"
/>

<SearchItems
  searchTerm={searchTerm}
  onSearchChange={setSearchTerm}
  placeholder="Minimal search style..."
  searchType="minimal"
/>`}</pre>
        </div>
      </div>

      <div className="demo-section">
        <h3 className="demo-title">Interactive Search Demo</h3>
        <div className="demo-description">
          <p>Try searching through our sample data to see the component in action. The search includes name, description, and category matching.</p>
        </div>
        
        <div className="example-showcase">
          <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
            <SearchItems
              searchTerm={demoSearch}
              onSearchChange={setDemoSearch}
              placeholder="Search components, features, or categories..."
              searchType="outlined"
            />
            
            <div style={{ 
              marginTop: '20px', 
              padding: '16px', 
              backgroundColor: 'var(--theme-color-background-secondary)',
              borderRadius: 'var(--theme-radius-md)',
              minHeight: '100px'
            }}>
              <div style={{ 
                marginBottom: '12px', 
                fontSize: '14px', 
                color: 'var(--theme-color-text-secondary)',
                fontWeight: '500'
              }}>
                {filteredItems.length} result{filteredItems.length !== 1 ? 's' : ''} found
                {demoSearch && ` for "${demoSearch}"`}
              </div>
              
              {filteredItems.length === 0 ? (
                <div style={{ 
                  textAlign: 'center', 
                  padding: '20px',
                  color: 'var(--theme-color-text-secondary)'
                }}>
                  No items found. Try searching for "component", "theme", or "button".
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {filteredItems.map(item => (
                    <div 
                      key={item.id}
                      style={{ 
                        padding: '12px',
                        backgroundColor: 'var(--theme-color-background)',
                        borderRadius: 'var(--theme-radius-sm)',
                        border: '1px solid var(--theme-color-border)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'flex-start',
                        marginBottom: '4px'
                      }}>
                        <span style={{ 
                          fontWeight: '600',
                          color: 'var(--theme-color-text)'
                        }}>
                          {item.name}
                        </span>
                        <span style={{ 
                          fontSize: '12px',
                          padding: '2px 8px',
                          backgroundColor: 'var(--theme-color-primary)',
                          color: 'var(--theme-color-primary-contrast)',
                          borderRadius: 'var(--theme-radius-sm)',
                          fontWeight: '500'
                        }}>
                          {item.category}
                        </span>
                      </div>
                      <div style={{ 
                        fontSize: '14px',
                        color: 'var(--theme-color-text-secondary)',
                        lineHeight: '1.4'
                      }}>
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="demo-code">
          <pre>{`const [searchTerm, setSearchTerm] = useState('');

const filteredItems = items.filter(item =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  item.description.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
  <div>
    <SearchItems
      searchTerm={searchTerm}
      onSearchChange={setSearchTerm}
      placeholder="Search components..."
      searchType="outlined"
    />
    
    <div className="search-results">
      {filteredItems.map(item => (
        <div key={item.id} className="search-result-item">
          <h4>{item.name}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);`}</pre>
        </div>
      </div>

      <div className="demo-section">
        <h3 className="demo-title">Style Comparison</h3>
        <div className="demo-description">
          <p>Compare all search types side by side to see their differences.</p>
        </div>
        
        <div className="example-showcase">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '20px',
            alignItems: 'start'
          }}>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ marginBottom: '12px', fontSize: '14px', color: 'var(--theme-color-text-secondary)' }}>
                Default Style
              </h4>
              <SearchItems
                searchTerm=""
                onSearchChange={() => {}}
                placeholder="Default..."
                searchType="default"
              />
              <p style={{ 
                fontSize: '12px', 
                marginTop: '8px',
                color: 'var(--theme-color-text-secondary)',
                lineHeight: '1.3'
              }}>
                Standard border with subtle styling
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <h4 style={{ marginBottom: '12px', fontSize: '14px', color: 'var(--theme-color-text-secondary)' }}>
                Compact Style
              </h4>
              <SearchItems
                searchTerm=""
                onSearchChange={() => {}}
                placeholder="Compact..."
                searchType="compact"
              />
              <p style={{ 
                fontSize: '12px', 
                marginTop: '8px',
                color: 'var(--theme-color-text-secondary)',
                lineHeight: '1.3'
              }}>
                Smaller size for tight spaces
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <h4 style={{ marginBottom: '12px', fontSize: '14px', color: 'var(--theme-color-text-secondary)' }}>
                Outlined Style
              </h4>
              <SearchItems
                searchTerm=""
                onSearchChange={() => {}}
                placeholder="Outlined..."
                searchType="outlined"
              />
              <p style={{ 
                fontSize: '12px', 
                marginTop: '8px',
                color: 'var(--theme-color-text-secondary)',
                lineHeight: '1.3'
              }}>
                Prominent border with focus effects
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <h4 style={{ marginBottom: '12px', fontSize: '14px', color: 'var(--theme-color-text-secondary)' }}>
                Minimal Style
              </h4>
              <SearchItems
                searchTerm=""
                onSearchChange={() => {}}
                placeholder="Minimal..."
                searchType="minimal"
              />
              <p style={{ 
                fontSize: '12px', 
                marginTop: '8px',
                color: 'var(--theme-color-text-secondary)',
                lineHeight: '1.3'
              }}>
                Clean underline design
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3 className="demo-title">Usage Examples</h3>
        <div className="demo-description">
          <p>Different use cases and implementation patterns for the SearchItems component.</p>
        </div>
        
        <div className="example-showcase">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Table Filter Example */}
            <div style={{ 
              padding: '20px',
              backgroundColor: 'var(--theme-color-background-secondary)',
              borderRadius: 'var(--theme-radius-md)',
              border: '1px solid var(--theme-color-border)'
            }}>
              <h4 style={{ marginBottom: '16px', color: 'var(--theme-color-text)' }}>
                Table Filter
              </h4>
              <SearchItems
                searchTerm=""
                onSearchChange={() => {}}
                placeholder="Filter table rows..."
                searchType="default"
              />
              <div style={{ 
                marginTop: '12px',
                fontSize: '13px',
                color: 'var(--theme-color-text-secondary)'
              }}>
                Perfect for filtering data tables and lists
              </div>
            </div>

            {/* Sidebar Search Example */}
            <div style={{ 
              padding: '20px',
              backgroundColor: 'var(--theme-color-background-secondary)',
              borderRadius: 'var(--theme-radius-md)',
              border: '1px solid var(--theme-color-border)'
            }}>
              <h4 style={{ marginBottom: '16px', color: 'var(--theme-color-text)' }}>
                Sidebar Navigation
              </h4>
              <SearchItems
                searchTerm=""
                onSearchChange={() => {}}
                placeholder="Find menu items..."
                searchType="compact"
              />
              <div style={{ 
                marginTop: '12px',
                fontSize: '13px',
                color: 'var(--theme-color-text-secondary)'
              }}>
                Compact style ideal for sidebar navigation
              </div>
            </div>

            {/* Hero Search Example */}
            <div style={{ 
              padding: '20px',
              backgroundColor: 'var(--theme-color-background-secondary)',
              borderRadius: 'var(--theme-radius-md)',
              border: '1px solid var(--theme-color-border)'
            }}>
              <h4 style={{ marginBottom: '16px', color: 'var(--theme-color-text)' }}>
                Hero Section Search
              </h4>
              <SearchItems
                searchTerm=""
                onSearchChange={() => {}}
                placeholder="What are you looking for?"
                searchType="outlined"
              />
              <div style={{ 
                marginTop: '12px',
                fontSize: '13px',
                color: 'var(--theme-color-text-secondary)'
              }}>
                Outlined style for prominent search bars
              </div>
            </div>

            {/* Form Search Example */}
            <div style={{ 
              padding: '20px',
              backgroundColor: 'var(--theme-color-background-secondary)',
              borderRadius: 'var(--theme-radius-md)',
              border: '1px solid var(--theme-color-border)'
            }}>
              <h4 style={{ marginBottom: '16px', color: 'var(--theme-color-text)' }}>
                Form Integration
              </h4>
              <SearchItems
                searchTerm=""
                onSearchChange={() => {}}
                placeholder="Search location..."
                searchType="minimal"
              />
              <div style={{ 
                marginTop: '12px',
                fontSize: '13px',
                color: 'var(--theme-color-text-secondary)'
              }}>
                Minimal style blends well with form fields
              </div>
            </div>
          </div>
        </div>

        <div className="demo-code">
          <pre>{`// Table Filter
<SearchItems
  searchTerm={filterTerm}
  onSearchChange={setFilterTerm}
  placeholder="Filter table rows..."
  searchType="default"
/>

// Sidebar Navigation
<SearchItems
  searchTerm={navSearch}
  onSearchChange={setNavSearch}
  placeholder="Find menu items..."
  searchType="compact"
/>

// Hero Section Search
<SearchItems
  searchTerm={heroSearch}
  onSearchChange={setHeroSearch}
  placeholder="What are you looking for?"
  searchType="outlined"
/>

// Form Integration
<SearchItems
  searchTerm={formSearch}
  onSearchChange={setFormSearch}
  placeholder="Search location..."
  searchType="minimal"
/>`}</pre>
        </div>
      </div>

      <div className="demo-section">
        <h3 className="demo-title">Features</h3>
        <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
          <li>🎨 Four distinct visual styles (default, compact, outlined, minimal)</li>
          <li>🔍 Built-in search and clear icons with smooth transitions</li>
          <li>⌨️ Keyboard navigation and accessibility support</li>
          <li>🎯 Focus states with appropriate visual feedback</li>
          <li>📱 Responsive design that adapts to container width</li>
          <li>🌙 Theme-aware with automatic dark/light mode adaptation</li>
          <li>🎪 Smooth hover and focus animations</li>
          <li>🔧 Customizable placeholder text and CSS classes</li>
          <li>📦 TypeScript support with comprehensive type definitions</li>
          <li>♿ WCAG 2.1 AA compliant with proper ARIA attributes</li>
          <li>🎨 CSS custom properties for easy theming</li>
          <li>⚡ Optimized performance with minimal re-renders</li>
        </ul>
      </div>

      <div className="demo-section">
        <h3 className="demo-title">Integration Tips</h3>
        <div style={{ 
          padding: '20px',
          backgroundColor: 'var(--theme-color-background-secondary)',
          borderRadius: 'var(--theme-radius-md)',
          textAlign: 'left',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <h4 style={{ marginBottom: '12px', color: 'var(--theme-color-text)' }}>Best Practices:</h4>
          <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
            <li><strong>Debouncing:</strong> Consider debouncing the search input for API calls</li>
            <li><strong>Loading States:</strong> Show loading indicators during search operations</li>
            <li><strong>Empty States:</strong> Provide helpful messages when no results are found</li>
            <li><strong>Keyboard Shortcuts:</strong> Consider adding focus shortcuts (Ctrl+K, etc.)</li>
            <li><strong>Search History:</strong> Implement recent searches for better UX</li>
            <li><strong>Auto-suggestions:</strong> Combine with dropdown for search suggestions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
