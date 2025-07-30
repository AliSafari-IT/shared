import { useState } from 'react';
import { DDItems } from '@asafarim/shared';
import { useTheme } from '@asafarim/react-themes';

export default function DDItemsDemo() {
  const { mode, currentTheme } = useTheme();
  
  // Dropdown states for different examples
  const [defaultSelection, setDefaultSelection] = useState('');
  const [compactSelection, setCompactSelection] = useState('');
  const [outlinedSelection, setOutlinedSelection] = useState('');
  const [minimalSelection, setMinimalSelection] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('high');
  const [statusFilter, setStatusFilter] = useState('');

  // Sample data for different dropdown scenarios
  const categoryItems = [
    { value: 'ui', label: 'UI Components' },
    { value: 'forms', label: 'Form Elements' },
    { value: 'navigation', label: 'Navigation' },
    { value: 'layout', label: 'Layout' },
    { value: 'data', label: 'Data Display' },
    { value: 'feedback', label: 'Feedback' },
  ];

  const priorityItems = [
    { value: 'low', label: 'Low Priority' },
    { value: 'medium', label: 'Medium Priority' },
    { value: 'high', label: 'High Priority' },
    { value: 'urgent', label: 'Urgent' },
  ];

  const statusItems = [
    { value: 'draft', label: 'Draft' },
    { value: 'review', label: 'In Review' },
    { value: 'approved', label: 'Approved' },
    { value: 'published', label: 'Published' },
    { value: 'archived', label: 'Archived' },
  ];

  const countryItems = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' },
    { value: 'au', label: 'Australia' },
  ];

  const frameworkItems = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'next', label: 'Next.js' },
    { value: 'nuxt', label: 'Nuxt.js' },
  ];

  return (
    <div>
      <div className="demo-section">
        <h2 className="demo-title">DDItems (Dropdown Items)</h2>
        <div className="demo-description">
          <p>
            The DDItems component is a flexible dropdown/select component with multiple visual styles and 
            customizable options. It supports different dropdown types including default, compact, outlined, 
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
                <td>selectedValue</td>
                <td>string</td>
                <td>-</td>
                <td>Currently selected value (controlled)</td>
              </tr>
              <tr>
                <td>onValueChange</td>
                <td>{'(value: string) => void'}</td>
                <td>-</td>
                <td>Callback function when selection changes</td>
              </tr>
              <tr>
                <td>items</td>
                <td>{'DropdownItem[]'}</td>
                <td>-</td>
                <td>Array of dropdown options with value and label</td>
              </tr>
              <tr>
                <td>dropdownType</td>
                <td>"default" | "compact" | "outlined" | "minimal"</td>
                <td>"default"</td>
                <td>Visual style variant of the dropdown</td>
              </tr>
              <tr>
                <td>className</td>
                <td>string</td>
                <td>"filter-select"</td>
                <td>CSS class name for the select element</td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td>string</td>
                <td>"Select an option"</td>
                <td>Placeholder text when no option is selected</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="demo-section">
          <h3 className="demo-title">DropdownItem Interface</h3>
          <div className="demo-code">
            <pre>{`interface DropdownItem {
  value: string;
  label: string;
}`}</pre>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h3 className="demo-title">Dropdown Types</h3>
        <div className="demo-description">
          <p>The component supports four different visual styles to match various design needs.</p>
        </div>
        
        <div className="example-showcase">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
            
            <div style={{ width: '100%', maxWidth: '300px' }}>
              <h4 style={{ marginBottom: '12px', textAlign: 'center' }}>Default</h4>
              <DDItems
                selectedValue={defaultSelection}
                onValueChange={setDefaultSelection}
                items={categoryItems}
                dropdownType="default"
                placeholder="Select category..."
              />
            </div>

            <div style={{ width: '100%', maxWidth: '300px' }}>
              <h4 style={{ marginBottom: '12px', textAlign: 'center' }}>Compact</h4>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <DDItems
                  selectedValue={compactSelection}
                  onValueChange={setCompactSelection}
                  items={priorityItems}
                  dropdownType="compact"
                  placeholder="Priority..."
                />
              </div>
            </div>

            <div style={{ width: '100%', maxWidth: '300px' }}>
              <h4 style={{ marginBottom: '12px', textAlign: 'center' }}>Outlined</h4>
              <DDItems
                selectedValue={outlinedSelection}
                onValueChange={setOutlinedSelection}
                items={statusItems}
                dropdownType="outlined"
                placeholder="Select status..."
              />
            </div>

            <div style={{ width: '100%', maxWidth: '300px' }}>
              <h4 style={{ marginBottom: '12px', textAlign: 'center' }}>Minimal</h4>
              <DDItems
                selectedValue={minimalSelection}
                onValueChange={setMinimalSelection}
                items={countryItems}
                dropdownType="minimal"
                placeholder="Choose country..."
              />
            </div>
          </div>
        </div>

        <div className="demo-code">
          <pre>{`const categoryItems = [
  { value: 'ui', label: 'UI Components' },
  { value: 'forms', label: 'Form Elements' },
  { value: 'navigation', label: 'Navigation' },
];

<DDItems
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  items={categoryItems}
  dropdownType="default"
  placeholder="Select category..."
/>

<DDItems
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  items={priorityItems}
  dropdownType="compact"
  placeholder="Priority..."
/>

<DDItems
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  items={statusItems}
  dropdownType="outlined"
  placeholder="Select status..."
/>

<DDItems
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  items={countryItems}
  dropdownType="minimal"
  placeholder="Choose country..."
/>`}</pre>
        </div>
      </div>

      <div className="demo-section">
        <h3 className="demo-title">Interactive Filter Demo</h3>
        <div className="demo-description">
          <p>See how multiple dropdowns work together for filtering and form controls.</p>
        </div>
        
        <div className="example-showcase">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '16px',
            maxWidth: '600px', 
            margin: '0 auto' 
          }}>
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontSize: '14px', 
                fontWeight: '500',
                color: 'var(--theme-color-text)'
              }}>
                Category
              </label>
              <DDItems
                selectedValue={categoryFilter}
                onValueChange={setCategoryFilter}
                items={categoryItems}
                dropdownType="outlined"
                placeholder="All categories"
              />
            </div>

            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontSize: '14px', 
                fontWeight: '500',
                color: 'var(--theme-color-text)'
              }}>
                Priority
              </label>
              <DDItems
                selectedValue={priorityFilter}
                onValueChange={setPriorityFilter}
                items={priorityItems}
                dropdownType="outlined"
                placeholder="Select priority"
              />
            </div>

            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontSize: '14px', 
                fontWeight: '500',
                color: 'var(--theme-color-text)'
              }}>
                Status
              </label>
              <DDItems
                selectedValue={statusFilter}
                onValueChange={setStatusFilter}
                items={statusItems}
                dropdownType="outlined"
                placeholder="All statuses"
              />
            </div>
          </div>
          
          <div style={{ 
            marginTop: '24px', 
            padding: '16px', 
            backgroundColor: 'var(--theme-color-background-secondary)',
            borderRadius: 'var(--theme-radius-md)',
            border: '1px solid var(--theme-color-border)'
          }}>
            <h4 style={{ marginBottom: '12px', color: 'var(--theme-color-text)' }}>
              Current Filters:
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {categoryFilter && (
                <span style={{ 
                  padding: '4px 12px',
                  backgroundColor: 'var(--theme-color-primary)',
                  color: 'var(--theme-color-primary-contrast)',
                  borderRadius: 'var(--theme-radius-sm)',
                  fontSize: '12px',
                  fontWeight: '500'
                }}>
                  Category: {categoryItems.find(item => item.value === categoryFilter)?.label}
                </span>
              )}
              {priorityFilter && (
                <span style={{ 
                  padding: '4px 12px',
                  backgroundColor: 'var(--theme-color-secondary)',
                  color: 'var(--theme-color-secondary-contrast)',
                  borderRadius: 'var(--theme-radius-sm)',
                  fontSize: '12px',
                  fontWeight: '500'
                }}>
                  Priority: {priorityItems.find(item => item.value === priorityFilter)?.label}
                </span>
              )}
              {statusFilter && (
                <span style={{ 
                  padding: '4px 12px',
                  backgroundColor: 'var(--theme-color-accent)',
                  color: 'var(--theme-color-accent-contrast)',
                  borderRadius: 'var(--theme-radius-sm)',
                  fontSize: '12px',
                  fontWeight: '500'
                }}>
                  Status: {statusItems.find(item => item.value === statusFilter)?.label}
                </span>
              )}
              {!categoryFilter && !priorityFilter && !statusFilter && (
                <span style={{ 
                  color: 'var(--theme-color-text-secondary)',
                  fontSize: '14px',
                  fontStyle: 'italic'
                }}>
                  No filters applied
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="demo-code">
          <pre>{`const [categoryFilter, setCategoryFilter] = useState('');
const [priorityFilter, setPriorityFilter] = useState('');
const [statusFilter, setStatusFilter] = useState('');

return (
  <div className="filter-controls">
    <DDItems
      selectedValue={categoryFilter}
      onValueChange={setCategoryFilter}
      items={categoryItems}
      dropdownType="outlined"
      placeholder="All categories"
    />
    
    <DDItems
      selectedValue={priorityFilter}
      onValueChange={setPriorityFilter}
      items={priorityItems}
      dropdownType="outlined"
      placeholder="Select priority"
    />
    
    <DDItems
      selectedValue={statusFilter}
      onValueChange={setStatusFilter}
      items={statusItems}
      dropdownType="outlined"
      placeholder="All statuses"
    />
  </div>
);`}</pre>
        </div>
      </div>

      <div className="demo-section">
        <h3 className="demo-title">Style Comparison</h3>
        <div className="demo-description">
          <p>Compare all dropdown types side by side to see their differences.</p>
        </div>
        
        <div className="example-showcase">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
            gap: '20px',
            alignItems: 'start'
          }}>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ marginBottom: '12px', fontSize: '14px', color: 'var(--theme-color-text-secondary)' }}>
                Default Style
              </h4>
              <DDItems
                selectedValue=""
                onValueChange={() => {}}
                items={frameworkItems}
                dropdownType="default"
                placeholder="Framework..."
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
              <DDItems
                selectedValue=""
                onValueChange={() => {}}
                items={frameworkItems}
                dropdownType="compact"
                placeholder="Framework..."
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
              <DDItems
                selectedValue=""
                onValueChange={() => {}}
                items={frameworkItems}
                dropdownType="outlined"
                placeholder="Framework..."
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
              <DDItems
                selectedValue=""
                onValueChange={() => {}}
                items={frameworkItems}
                dropdownType="minimal"
                placeholder="Framework..."
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
          <p>Different use cases and implementation patterns for the DDItems component.</p>
        </div>
        
        <div className="example-showcase">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Form Dropdown Example */}
            <div style={{ 
              padding: '20px',
              backgroundColor: 'var(--theme-color-background-secondary)',
              borderRadius: 'var(--theme-radius-md)',
              border: '1px solid var(--theme-color-border)'
            }}>
              <h4 style={{ marginBottom: '16px', color: 'var(--theme-color-text)' }}>
                Form Select
              </h4>
              <DDItems
                selectedValue=""
                onValueChange={() => {}}
                items={countryItems}
                dropdownType="default"
                placeholder="Select your country"
              />
              <div style={{ 
                marginTop: '12px',
                fontSize: '13px',
                color: 'var(--theme-color-text-secondary)'
              }}>
                Standard form dropdown for user inputs
              </div>
            </div>

            {/* Filter Dropdown Example */}
            <div style={{ 
              padding: '20px',
              backgroundColor: 'var(--theme-color-background-secondary)',
              borderRadius: 'var(--theme-radius-md)',
              border: '1px solid var(--theme-color-border)'
            }}>
              <h4 style={{ marginBottom: '16px', color: 'var(--theme-color-text)' }}>
                Filter Control
              </h4>
              <DDItems
                selectedValue=""
                onValueChange={() => {}}
                items={categoryItems}
                dropdownType="compact"
                placeholder="Filter by category"
              />
              <div style={{ 
                marginTop: '12px',
                fontSize: '13px',
                color: 'var(--theme-color-text-secondary)'
              }}>
                Compact style for filtering and toolbar controls
              </div>
            </div>

            {/* Settings Dropdown Example */}
            <div style={{ 
              padding: '20px',
              backgroundColor: 'var(--theme-color-background-secondary)',
              borderRadius: 'var(--theme-radius-md)',
              border: '1px solid var(--theme-color-border)'
            }}>
              <h4 style={{ marginBottom: '16px', color: 'var(--theme-color-text)' }}>
                Settings Panel
              </h4>
              <DDItems
                selectedValue=""
                onValueChange={() => {}}
                items={frameworkItems}
                dropdownType="outlined"
                placeholder="Choose framework"
              />
              <div style={{ 
                marginTop: '12px',
                fontSize: '13px',
                color: 'var(--theme-color-text-secondary)'
              }}>
                Outlined style for prominent settings controls
              </div>
            </div>

            {/* Inline Dropdown Example */}
            <div style={{ 
              padding: '20px',
              backgroundColor: 'var(--theme-color-background-secondary)',
              borderRadius: 'var(--theme-radius-md)',
              border: '1px solid var(--theme-color-border)'
            }}>
              <h4 style={{ marginBottom: '16px', color: 'var(--theme-color-text)' }}>
                Inline Selection
              </h4>
              <DDItems
                selectedValue=""
                onValueChange={() => {}}
                items={priorityItems}
                dropdownType="minimal"
                placeholder="Set priority"
              />
              <div style={{ 
                marginTop: '12px',
                fontSize: '13px',
                color: 'var(--theme-color-text-secondary)'
              }}>
                Minimal style for inline editing and quick selection
              </div>
            </div>
          </div>
        </div>

        <div className="demo-code">
          <pre>{`// Form Select
<DDItems
  selectedValue={country}
  onValueChange={setCountry}
  items={countryItems}
  dropdownType="default"
  placeholder="Select your country"
/>

// Filter Control
<DDItems
  selectedValue={categoryFilter}
  onValueChange={setCategoryFilter}
  items={categoryItems}
  dropdownType="compact"
  placeholder="Filter by category"
/>

// Settings Panel
<DDItems
  selectedValue={framework}
  onValueChange={setFramework}
  items={frameworkItems}
  dropdownType="outlined"
  placeholder="Choose framework"
/>

// Inline Selection
<DDItems
  selectedValue={priority}
  onValueChange={setPriority}
  items={priorityItems}
  dropdownType="minimal"
  placeholder="Set priority"
/>`}</pre>
        </div>
      </div>

      <div className="demo-section">
        <h3 className="demo-title">Features</h3>
        <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
          <li>🎨 Four distinct visual styles (default, compact, outlined, minimal)</li>
          <li>🎯 Custom dropdown arrow with CSS-based styling</li>
          <li>⌨️ Keyboard navigation and accessibility support</li>
          <li>🔍 Focus states with appropriate visual feedback</li>
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
            <li><strong>Data Structure:</strong> Use consistent value/label object structure</li>
            <li><strong>Loading States:</strong> Show loading placeholders during data fetch</li>
            <li><strong>Validation:</strong> Implement proper form validation with error states</li>
            <li><strong>Empty States:</strong> Provide helpful messages when no options available</li>
            <li><strong>Search Integration:</strong> Combine with search for large option lists</li>
            <li><strong>Multi-Select:</strong> Consider separate component for multiple selections</li>
            <li><strong>Performance:</strong> Virtualize large option lists for better performance</li>
            <li><strong>Accessibility:</strong> Ensure proper labeling and keyboard navigation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
