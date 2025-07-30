import { useState } from 'react';
import { ButtonComponent } from '@asafarim/shared';
import { useTheme } from '@asafarim/react-themes';

export default function ButtonComponentDemo() {
  const { mode, currentTheme } = useTheme();
  const [loadingStates, setLoadingStates] = useState<{ [key: string]: boolean }>({});

  const handleClick = (buttonId: string) => {
    setLoadingStates(prev => ({ ...prev, [buttonId]: true }));
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [buttonId]: false }));
    }, 2000);
  };

  // Sample icons
  const HeartIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  );

  const DownloadIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
    </svg>
  );

  const SettingsIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
    </svg>
  );

  return (
    <div>
      <div className="demo-section">
        <h2 className="demo-title">ButtonComponent</h2>
        <div className="demo-description">
          <p>
            The ButtonComponent is a versatile, fully customizable button component with multiple variants, sizes, 
            and states. It supports icons, loading states, and follows accessibility best practices while adapting 
            to the current theme.
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
                <td>children</td>
                <td>React.ReactNode</td>
                <td>-</td>
                <td>Button content (takes precedence over label)</td>
              </tr>
              <tr>
                <td>label</td>
                <td>string</td>
                <td>-</td>
                <td>Button text label</td>
              </tr>
              <tr>
                <td>onClick</td>
                <td>{'() => void'}</td>
                <td>-</td>
                <td>Click handler function</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>boolean</td>
                <td>false</td>
                <td>Disables the button</td>
              </tr>
              <tr>
                <td>loading</td>
                <td>boolean</td>
                <td>false</td>
                <td>Shows loading state with spinner</td>
              </tr>
              <tr>
                <td>variant</td>
                <td>"primary" | "secondary" | "success" | "danger" | "warning" | "info" | "outline" | "ghost"</td>
                <td>"primary"</td>
                <td>Button visual style variant</td>
              </tr>
              <tr>
                <td>outline</td>
                <td>"primary" | "secondary" | "success" | "danger" | "warning" | "info"</td>
                <td>-</td>
                <td>Outline button variant (overrides variant)</td>
              </tr>
              <tr>
                <td>ghost</td>
                <td>"primary"</td>
                <td>-</td>
                <td>Ghost button variant (overrides variant)</td>
              </tr>
              <tr>
                <td>size</td>
                <td>"xs" | "sm" | "md" | "lg" | "xl"</td>
                <td>"md"</td>
                <td>Button size</td>
              </tr>
              <tr>
                <td>icon</td>
                <td>React.ReactNode</td>
                <td>-</td>
                <td>Icon element to display</td>
              </tr>
              <tr>
                <td>iconPosition</td>
                <td>"left" | "right" | "only"</td>
                <td>"left"</td>
                <td>Position of the icon relative to text</td>
              </tr>
              <tr>
                <td>block</td>
                <td>boolean</td>
                <td>false</td>
                <td>Makes button full width</td>
              </tr>
              <tr>
                <td>type</td>
                <td>"button" | "submit" | "reset"</td>
                <td>"button"</td>
                <td>HTML button type</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="demo-section">
        <h3 className="demo-title">Basic Variants</h3>
        <div className="demo-description">
          <p>The component supports multiple visual variants for different use cases.</p>
        </div>
        
        <div className="example-showcase">
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <ButtonComponent variant="primary" label="Primary" onClick={() => handleClick('primary')} />
            <ButtonComponent variant="secondary" label="Secondary" onClick={() => handleClick('secondary')} />
            <ButtonComponent variant="success" label="Success" onClick={() => handleClick('success')} />
            <ButtonComponent variant="danger" label="Danger" onClick={() => handleClick('danger')} />
            <ButtonComponent variant="warning" label="Warning" onClick={() => handleClick('warning')} />
            <ButtonComponent variant="info" label="Info" onClick={() => handleClick('info')} />
          </div>
        </div>

        <div className="demo-code">
          <pre>{`<ButtonComponent variant="primary" label="Primary" />
<ButtonComponent variant="secondary" label="Secondary" />
<ButtonComponent variant="success" label="Success" />
<ButtonComponent variant="danger" label="Danger" />
<ButtonComponent variant="warning" label="Warning" />
<ButtonComponent variant="info" label="Info" />`}</pre>
        </div>
      </div>

      <div className="demo-section">
        <h3 className="demo-title">Outline Variants</h3>
        <div className="demo-description">
          <p>Outline buttons provide a subtle alternative with transparent backgrounds.</p>
        </div>
        
        <div className="example-showcase">
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <ButtonComponent outline="primary" label="Primary" onClick={() => handleClick('outline-primary')} />
            <ButtonComponent outline="secondary" label="Secondary" onClick={() => handleClick('outline-secondary')} />
            <ButtonComponent outline="success" label="Success" onClick={() => handleClick('outline-success')} />
            <ButtonComponent outline="danger" label="Danger" onClick={() => handleClick('outline-danger')} />
            <ButtonComponent outline="warning" label="Warning" onClick={() => handleClick('outline-warning')} />
            <ButtonComponent outline="info" label="Info" onClick={() => handleClick('outline-info')} />
          </div>
        </div>

        <div className="demo-code">
          <pre>{`<ButtonComponent outline="primary" label="Primary" />
<ButtonComponent outline="secondary" label="Secondary" />
<ButtonComponent outline="success" label="Success" />
<ButtonComponent outline="danger" label="Danger" />
<ButtonComponent outline="warning" label="Warning" />
<ButtonComponent outline="info" label="Info" />`}</pre>
        </div>
      </div>

      <div className="demo-section">
        <h3 className="demo-title">Ghost Variants</h3>
        <div className="demo-description">
          <p>Ghost buttons are minimal with no borders or background by default.</p>
        </div>
        
        <div className="example-showcase">
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <ButtonComponent variant="ghost" label="Ghost Default" onClick={() => handleClick('ghost-default')} />
            <ButtonComponent ghost="primary" label="Ghost Primary" onClick={() => handleClick('ghost-primary')} />
          </div>
        </div>

        <div className="demo-code">
          <pre>{`<ButtonComponent variant="ghost" label="Ghost Default" />
<ButtonComponent ghost="primary" label="Ghost Primary" />`}</pre>
        </div>
      </div>

      <div className="demo-section">
        <h3 className="demo-title">Button Sizes</h3>
        <div className="demo-description">
          <p>Five different sizes are available to suit various use cases.</p>
        </div>
        
        <div className="example-showcase">
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
            <ButtonComponent size="xs" variant="primary" label="Extra Small" />
            <ButtonComponent size="sm" variant="primary" label="Small" />
            <ButtonComponent size="md" variant="primary" label="Medium" />
            <ButtonComponent size="lg" variant="primary" label="Large" />
            <ButtonComponent size="xl" variant="primary" label="Extra Large" />
          </div>
        </div>

        <div className="demo-code">
          <pre>{`<ButtonComponent size="xs" variant="primary" label="Extra Small" />
<ButtonComponent size="sm" variant="primary" label="Small" />
<ButtonComponent size="md" variant="primary" label="Medium" />
<ButtonComponent size="lg" variant="primary" label="Large" />
<ButtonComponent size="xl" variant="primary" label="Extra Large" />`}</pre>
        </div>
      </div>

      <div className="demo-section">
        <h3 className="demo-title">Buttons with Icons</h3>
        <div className="demo-description">
          <p>Icons can be positioned on the left, right, or used as icon-only buttons.</p>
        </div>
        
        <div className="example-showcase">
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <ButtonComponent 
              variant="primary" 
              label="Download" 
              icon={<DownloadIcon />} 
              iconPosition="left" 
            />
            <ButtonComponent 
              variant="secondary" 
              label="Settings" 
              icon={<SettingsIcon />} 
              iconPosition="right" 
            />
            <ButtonComponent 
              variant="danger" 
              icon={<HeartIcon />} 
              iconPosition="only" 
              onClick={() => handleClick('heart')}
            />
          </div>
        </div>

        <div className="demo-code">
          <pre>{`<ButtonComponent 
  variant="primary" 
  label="Download" 
  icon={<DownloadIcon />} 
  iconPosition="left" 
/>
<ButtonComponent 
  variant="secondary" 
  label="Settings" 
  icon={<SettingsIcon />} 
  iconPosition="right" 
/>
<ButtonComponent 
  variant="danger" 
  icon={<HeartIcon />} 
  iconPosition="only" 
/>`}</pre>
        </div>
      </div>

      <div className="demo-section">
        <h3 className="demo-title">Button States</h3>
        <div className="demo-description">
          <p>Buttons support disabled and loading states with appropriate visual feedback.</p>
        </div>
        
        <div className="example-showcase">
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <ButtonComponent variant="primary" label="Normal" onClick={() => handleClick('normal')} />
            <ButtonComponent variant="primary" label="Disabled" disabled />
            <ButtonComponent 
              variant="primary" 
              label="Loading" 
              loading={loadingStates['loading-demo'] || false}
              onClick={() => handleClick('loading-demo')}
            />
            <ButtonComponent 
              variant="secondary" 
              label="Click for Loading" 
              loading={loadingStates['click-loading'] || false}
              onClick={() => handleClick('click-loading')}
            />
          </div>
        </div>

        <div className="demo-code">
          <pre>{`<ButtonComponent variant="primary" label="Normal" />
<ButtonComponent variant="primary" label="Disabled" disabled />
<ButtonComponent variant="primary" label="Loading" loading={true} />
<ButtonComponent 
  variant="secondary" 
  label="Click for Loading" 
  loading={loadingState}
  onClick={handleLoadingClick}
/>`}</pre>
        </div>
      </div>

      <div className="demo-section">
        <h3 className="demo-title">Block Button</h3>
        <div className="demo-description">
          <p>Block buttons stretch to fill the full width of their container.</p>
        </div>
        
        <div className="example-showcase">
          <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
            <ButtonComponent 
              variant="primary" 
              label="Full Width Button" 
              block 
              onClick={() => handleClick('block')}
            />
          </div>
        </div>

        <div className="demo-code">
          <pre>{`<ButtonComponent 
  variant="primary" 
  label="Full Width Button" 
  block 
/>`}</pre>
        </div>
      </div>

      <div className="demo-section">
        <h3 className="demo-title">Button Groups</h3>
        <div className="demo-description">
          <p>Multiple buttons can be grouped together for related actions.</p>
        </div>
        
        <div className="example-showcase">
          <div className="button-component-group">
            <ButtonComponent variant="primary" label="First" size="sm" />
            <ButtonComponent outline="primary" label="Second" size="sm" />
            <ButtonComponent outline="primary" label="Third" size="sm" />
          </div>
        </div>

        <div className="demo-code">
          <pre>{`<div className="button-component-group">
  <ButtonComponent variant="primary" label="First" size="sm" />
  <ButtonComponent outline="primary" label="Second" size="sm" />
  <ButtonComponent outline="primary" label="Third" size="sm" />
</div>`}</pre>
        </div>
      </div>

      <div className="demo-section">
        <h3 className="demo-title">Form Integration</h3>
        <div className="demo-description">
          <p>Buttons can be used in forms with different types and behaviors.</p>
        </div>
        
        <div className="example-showcase">
          <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted!'); }} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <ButtonComponent type="submit" variant="primary" label="Submit" />
            <ButtonComponent type="reset" variant="secondary" label="Reset" />
            <ButtonComponent type="button" outline="danger" label="Cancel" />
          </form>
        </div>

        <div className="demo-code">
          <pre>{`<form onSubmit={handleSubmit}>
  <ButtonComponent type="submit" variant="primary" label="Submit" />
  <ButtonComponent type="reset" variant="secondary" label="Reset" />
  <ButtonComponent type="button" outline="danger" label="Cancel" />
</form>`}</pre>
        </div>
      </div>

      <div className="demo-section">
        <h3 className="demo-title">Features</h3>
        <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
          <li>🎨 Multiple variants (primary, secondary, success, danger, warning, info)</li>
          <li>📐 Multiple styles (filled, outline, ghost)</li>
          <li>📏 Five different sizes (xs, sm, md, lg, xl)</li>
          <li>🎯 Icon support with flexible positioning</li>
          <li>⏳ Built-in loading states with spinner</li>
          <li>🚫 Disabled state support</li>
          <li>📱 Responsive design that adapts to screen size</li>
          <li>♿ Full accessibility support with ARIA attributes</li>
          <li>🌙 Theme-aware with automatic dark/light mode adaptation</li>
          <li>🎪 Smooth animations and hover effects</li>
          <li>📦 TypeScript support with comprehensive type definitions</li>
          <li>🔧 Highly customizable with CSS custom properties</li>
        </ul>
      </div>
    </div>
  );
}
