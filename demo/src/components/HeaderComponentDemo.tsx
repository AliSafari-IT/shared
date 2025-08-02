import React, { useState } from 'react';
import { HeaderComponent } from '@asafarim/shared';
import { ButtonComponent } from '@asafarim/shared';
import './HeaderComponentDemo.css';

const HeaderComponentDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'default' | 'compact' | 'outlined' | 'minimal'>('default');
  const [showFixed, setShowFixed] = useState(false);
  const [showTransparent, setShowTransparent] = useState(false);

  const renderHeaderExample = (type: 'default' | 'compact' | 'outlined' | 'minimal') => {
    const baseProps = {
      type,
      fixed: showFixed,
      transparent: showTransparent,
      title: "My Application",
      subtitle: "A beautiful header component",
      logoText: "App",
      onLogoClick: () => console.log('Logo clicked'),
      onTitleClick: () => console.log('Title clicked'),
    };

    const leftContent = (
      <div style={{ display: 'flex', gap: '8px' }}>
        <ButtonComponent size="sm" variant="ghost">Menu</ButtonComponent>
        <ButtonComponent size="sm" variant="ghost">Home</ButtonComponent>
      </div>
    );

    const rightContent = (
      <div style={{ display: 'flex', gap: '8px' }}>
        <ButtonComponent size="sm" variant="outline">Login</ButtonComponent>
        <ButtonComponent size="sm" variant="primary">Sign Up</ButtonComponent>
      </div>
    );

    const centerContent = (
      <div style={{ display: 'flex', gap: '16px' }}>
        <ButtonComponent size="sm" variant="ghost">Dashboard</ButtonComponent>
        <ButtonComponent size="sm" variant="ghost">Profile</ButtonComponent>
        <ButtonComponent size="sm" variant="ghost">Settings</ButtonComponent>
      </div>
    );

    return (
      <HeaderComponent
        {...baseProps}
        leftContent={leftContent}
        rightContent={rightContent}
        centerContent={centerContent}
      />
    );
  };

  const renderCodeExample = (type: 'default' | 'compact' | 'outlined' | 'minimal') => {
    return (
      <pre className="code-example">
        <code>{`<HeaderComponent
  type="${type}"
  title="My Application"
  subtitle="A beautiful header component"
  logoText="App"
  leftContent={
    <div>
      <ButtonComponent size="sm" variant="ghost">Menu</ButtonComponent>
      <ButtonComponent size="sm" variant="ghost">Home</ButtonComponent>
    </div>
  }
  rightContent={
    <div>
      <ButtonComponent size="sm" variant="outline">Login</ButtonComponent>
      <ButtonComponent size="sm" variant="primary">Sign Up</ButtonComponent>
    </div>
  }
  centerContent={
    <div>
      <ButtonComponent size="sm" variant="ghost">Dashboard</ButtonComponent>
      <ButtonComponent size="sm" variant="ghost">Profile</ButtonComponent>
      <ButtonComponent size="sm" variant="ghost">Settings</ButtonComponent>
    </div>
  }
/>`}</code>
      </pre>
    );
  };

  return (
    <div className="header-demo">
      <div className="demo-header">
        <h1>Header Component Demo</h1>
        <p>A customizable, reusable header component with four different types</p>
      </div>

      <div className="demo-controls">
        <div className="control-group">
          <label>Header Type:</label>
          <div className="button-group">
            {(['default', 'compact', 'outlined', 'minimal'] as const).map((type) => (
              <ButtonComponent
                key={type}
                variant={activeTab === type ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setActiveTab(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </ButtonComponent>
            ))}
          </div>
        </div>

        <div className="control-group">
          <label>Options:</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={showFixed}
                onChange={(e) => setShowFixed(e.target.checked)}
              />
              Fixed Position
            </label>
            <label>
              <input
                type="checkbox"
                checked={showTransparent}
                onChange={(e) => setShowTransparent(e.target.checked)}
              />
              Transparent Background
            </label>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>Live Preview</h2>
        <div className="header-preview">
          {renderHeaderExample(activeTab)}
        </div>
      </div>

      <div className="demo-section">
        <h2>Header Types</h2>
        <div className="header-types">
          <div className="type-example">
            <h3>Default Header</h3>
            <p>Standard header with gradient background and subtle shadow</p>
            <div className="example-header">
              {renderHeaderExample('default')}
            </div>
          </div>

          <div className="type-example">
            <h3>Compact Header</h3>
            <p>Minimal height header for space-constrained layouts</p>
            <div className="example-header">
              {renderHeaderExample('compact')}
            </div>
          </div>

          <div className="type-example">
            <h3>Outlined Header</h3>
            <p>Header with border outline and rounded corners</p>
            <div className="example-header">
              {renderHeaderExample('outlined')}
            </div>
          </div>

          <div className="type-example">
            <h3>Minimal Header</h3>
            <p>Clean, borderless header with minimal styling</p>
            <div className="example-header">
              {renderHeaderExample('minimal')}
            </div>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>Props & Customization</h2>
        <div className="props-grid">
          <div className="prop-group">
            <h3>Basic Props</h3>
            <ul>
              <li><code>type</code> - Header type: 'default' | 'compact' | 'outlined' | 'minimal'</li>
              <li><code>title</code> - Main header title</li>
              <li><code>subtitle</code> - Optional subtitle</li>
              <li><code>logo</code> - Logo icon component</li>
              <li><code>logoText</code> - Logo text</li>
            </ul>
          </div>

          <div className="prop-group">
            <h3>Layout Props</h3>
            <ul>
              <li><code>size</code> - Size: 'sm' | 'md' | 'lg'</li>
              <li><code>align</code> - Alignment: 'left' | 'center' | 'right' | 'space-between'</li>
              <li><code>fixed</code> - Fixed positioning</li>
              <li><code>transparent</code> - Transparent background</li>
            </ul>
          </div>

          <div className="prop-group">
            <h3>Content Props</h3>
            <ul>
              <li><code>leftContent</code> - Left side content</li>
              <li><code>centerContent</code> - Center content</li>
              <li><code>rightContent</code> - Right side content</li>
              <li><code>children</code> - Additional content</li>
            </ul>
          </div>

          <div className="prop-group">
            <h3>Styling Props</h3>
            <ul>
              <li><code>elevation</code> - Shadow level: 'none' | 'low' | 'medium' | 'high'</li>
              <li><code>showBorder</code> - Show bottom border</li>
              <li><code>showShadow</code> - Show shadow</li>
              <li><code>backgroundColor</code> - Custom background color</li>
              <li><code>textColor</code> - Custom text color</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>Code Example</h2>
        {renderCodeExample(activeTab)}
      </div>

      <div className="demo-section">
        <h2>Advanced Examples</h2>
        <div className="advanced-examples">
          <div className="example">
            <h3>Fixed Header with Navigation</h3>
            <div className="example-header">
              <HeaderComponent
                type="default"
                fixed
                title="Dashboard"
                subtitle="Welcome back, User"
                logoText="D"
                leftContent={
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <ButtonComponent size="sm" variant="ghost">Dashboard</ButtonComponent>
                    <ButtonComponent size="sm" variant="ghost">Analytics</ButtonComponent>
                    <ButtonComponent size="sm" variant="ghost">Reports</ButtonComponent>
                  </div>
                }
                rightContent={
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ fontSize: '14px', opacity: 0.7 }}>Notifications</span>
                    <ButtonComponent size="sm" variant="outline">Profile</ButtonComponent>
                  </div>
                }
              />
            </div>
          </div>

          <div className="example">
            <h3>Transparent Minimal Header</h3>
            <div className="example-header" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '20px' }}>
              <HeaderComponent
                type="minimal"
                transparent
                title="Creative Studio"
                logoText="CS"
                align="center"
                leftContent={
                  <ButtonComponent size="sm" variant="ghost" style={{ color: 'white' }}>Portfolio</ButtonComponent>
                }
                rightContent={
                  <ButtonComponent size="sm" variant="outline" style={{ color: 'white', borderColor: 'white' }}>Contact</ButtonComponent>
                }
              />
            </div>
          </div>

          <div className="example">
            <h3>Outlined Header with Custom Colors</h3>
            <div className="example-header">
              <HeaderComponent
                type="outlined"
                title="Custom Brand"
                subtitle="Premium Experience"
                logoText="CB"
                backgroundColor="#f8f9fa"
                textColor="#2c3e50"
                leftContent={
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <ButtonComponent size="sm" variant="primary">Products</ButtonComponent>
                    <ButtonComponent size="sm" variant="ghost">About</ButtonComponent>
                  </div>
                }
                rightContent={
                  <ButtonComponent size="sm" variant="success">Get Started</ButtonComponent>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponentDemo; 