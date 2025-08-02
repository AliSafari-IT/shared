import React, { useState } from 'react';
import { 
  DefaultPageHeader, 
  HeroPageHeader, 
  CallToActionPageHeader, 
  FancyPageHeader 
} from '@asafarim/shared';
import { ButtonComponent } from '@asafarim/shared';
import './HeaderWrappersDemo.css';

const HeaderWrappersDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'default' | 'hero' | 'cta' | 'fancy'>('default');

  const renderDefaultPageHeaderExample = () => (
    <DefaultPageHeader
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
      onLogoClick={() => console.log('Logo clicked')}
      onTitleClick={() => console.log('Title clicked')}
    />
  );

  const renderHeroPageHeaderExample = () => (
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
      onLogoClick={() => console.log('Logo clicked')}
      onTitleClick={() => console.log('Title clicked')}
    />
  );

  const renderCallToActionPageHeaderExample = () => (
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
      onLogoClick={() => console.log('Logo clicked')}
      onTitleClick={() => console.log('Title clicked')}
    />
  );

  const renderFancyPageHeaderExample = () => (
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
      onLogoClick={() => console.log('Logo clicked')}
      onTitleClick={() => console.log('Title clicked')}
    />
  );

  const renderCodeExample = (type: 'default' | 'hero' | 'cta' | 'fancy') => {
    const examples = {
      default: `<DefaultPageHeader
  title="Dashboard"
  subtitle="Welcome back, User"
  logoText="D"
  leftContent={
    <div>
      <ButtonComponent size="sm" variant="ghost">Dashboard</ButtonComponent>
      <ButtonComponent size="sm" variant="ghost">Analytics</ButtonComponent>
    </div>
  }
  rightContent={
    <ButtonComponent size="sm" variant="outline">Profile</ButtonComponent>
  }
/>`,
      hero: `<HeroPageHeader
  title="Welcome to Our Platform"
  subtitle="The ultimate solution for your business needs"
  backgroundGradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  cta={
    <ButtonComponent size="lg" variant="primary">
      Get Started
    </ButtonComponent>
  }
/>`,
      cta: `<CallToActionPageHeader
  title="Premium Features"
  subtitle="Unlock the full potential of our platform"
  ctaButton={
    <ButtonComponent size="md" variant="success">
      Upgrade Now
    </ButtonComponent>
  }
/>`,
      fancy: `<FancyPageHeader
  title="Enterprise Solutions"
  subtitle="Built for scale, designed for success"
  gradient="linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)"
  rightContent={
    <ButtonComponent size="sm" variant="outline">
      Contact Sales
    </ButtonComponent>
  }
/>`
    };

    return (
      <pre className="code-example">
        <code>{examples[type]}</code>
      </pre>
    );
  };

  return (
    <div className="header-wrappers-demo">
      <div className="demo-header">
        <h1>Header Wrapper Components Demo</h1>
        <p>Pre-configured header variants for common use cases</p>
      </div>

      <div className="demo-controls">
        <div className="control-group">
          <label>Header Type:</label>
          <div className="button-group">
            {(['default', 'hero', 'cta', 'fancy'] as const).map((type) => (
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
      </div>

      <div className="demo-section">
        <h2>Live Preview</h2>
        <div className="header-preview">
          {activeTab === 'default' && renderDefaultPageHeaderExample()}
          {activeTab === 'hero' && renderHeroPageHeaderExample()}
          {activeTab === 'cta' && renderCallToActionPageHeaderExample()}
          {activeTab === 'fancy' && renderFancyPageHeaderExample()}
        </div>
      </div>

      <div className="demo-section">
        <h2>Header Wrapper Types</h2>
        <div className="header-types">
          <div className="type-example">
            <h3>DefaultPageHeader</h3>
            <p>Standard page header with balanced layout for main applications and dashboards</p>
            <div className="example-header">
              {renderDefaultPageHeaderExample()}
            </div>
          </div>

          <div className="type-example">
            <h3>HeroPageHeader</h3>
            <p>Hero-style header for landing pages with background support and call-to-action</p>
            <div className="example-header">
              {renderHeroPageHeaderExample()}
            </div>
          </div>

          <div className="type-example">
            <h3>CallToActionPageHeader</h3>
            <p>Conversion-focused header optimized for user engagement and sign-ups</p>
            <div className="example-header">
              {renderCallToActionPageHeaderExample()}
            </div>
          </div>

          <div className="type-example">
            <h3>FancyPageHeader</h3>
            <p>Premium header with gradient styling for high-impact designs and corporate sites</p>
            <div className="example-header">
              {renderFancyPageHeaderExample()}
            </div>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>Props & Features</h2>
        <div className="props-grid">
          <div className="prop-group">
            <h3>DefaultPageHeader</h3>
            <ul>
              <li><code>title</code> - Main header title</li>
              <li><code>subtitle</code> - Optional subtitle</li>
              <li><code>logo</code> - Logo icon component</li>
              <li><code>logoText</code> - Logo text</li>
              <li><code>leftContent</code> - Left side content</li>
              <li><code>rightContent</code> - Right side content</li>
              <li><code>fixed</code> - Fixed positioning</li>
            </ul>
          </div>

          <div className="prop-group">
            <h3>HeroPageHeader</h3>
            <ul>
              <li><code>title</code> - Hero title</li>
              <li><code>subtitle</code> - Hero subtitle</li>
              <li><code>backgroundImage</code> - Background image URL</li>
              <li><code>backgroundGradient</code> - CSS gradient string</li>
              <li><code>cta</code> - Call-to-action component</li>
              <li><code>leftContent</code> - Left side content</li>
              <li><code>rightContent</code> - Right side content</li>
            </ul>
          </div>

          <div className="prop-group">
            <h3>CallToActionPageHeader</h3>
            <ul>
              <li><code>title</code> - Header title</li>
              <li><code>subtitle</code> - Header subtitle</li>
              <li><code>ctaButton</code> - Required CTA button</li>
              <li><code>leftContent</code> - Left side content</li>
              <li><code>centerContent</code> - Center content</li>
              <li><code>fixed</code> - Fixed positioning</li>
            </ul>
          </div>

          <div className="prop-group">
            <h3>FancyPageHeader</h3>
            <ul>
              <li><code>title</code> - Header title</li>
              <li><code>subtitle</code> - Header subtitle</li>
              <li><code>icon</code> - Icon component</li>
              <li><code>gradient</code> - Custom gradient background</li>
              <li><code>leftContent</code> - Left side content</li>
              <li><code>rightContent</code> - Right side content</li>
              <li><code>fixed</code> - Fixed positioning</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>Code Example</h2>
        {renderCodeExample(activeTab)}
      </div>

      <div className="demo-section">
        <h2>Use Cases & Examples</h2>
        <div className="use-cases">
          <div className="use-case">
            <h3>Dashboard Application</h3>
            <p>Perfect for admin panels, analytics dashboards, and business applications</p>
            <div className="example-header">
              <DefaultPageHeader
                title="Analytics Dashboard"
                subtitle="Real-time insights and metrics"
                logoText="A"
                leftContent={
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <ButtonComponent size="sm" variant="ghost">Overview</ButtonComponent>
                    <ButtonComponent size="sm" variant="ghost">Reports</ButtonComponent>
                    <ButtonComponent size="sm" variant="ghost">Settings</ButtonComponent>
                  </div>
                }
                rightContent={
                  <ButtonComponent size="sm" variant="outline">Export Data</ButtonComponent>
                }
              />
            </div>
          </div>

          <div className="use-case">
            <h3>Landing Page</h3>
            <p>Ideal for product launches, marketing campaigns, and promotional content</p>
            <div className="example-header">
              <HeroPageHeader
                title="Transform Your Business"
                subtitle="Join thousands of companies using our platform"
                backgroundGradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                cta={
                  <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
                    <ButtonComponent size="lg" variant="primary">Start Free Trial</ButtonComponent>
                    <ButtonComponent size="lg" variant="outline" style={{ color: 'white', borderColor: 'white' }}>
                      Watch Demo
                    </ButtonComponent>
                  </div>
                }
              />
            </div>
          </div>

          <div className="use-case">
            <h3>E-commerce Product Page</h3>
            <p>Optimized for conversion with prominent call-to-action buttons</p>
            <div className="example-header">
              <CallToActionPageHeader
                title="Premium Package"
                subtitle="Everything you need to succeed"
                logoText="P"
                ctaButton={
                  <ButtonComponent size="md" variant="success">
                    Add to Cart - $99
                  </ButtonComponent>
                }
                leftContent={
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <ButtonComponent size="sm" variant="ghost">Features</ButtonComponent>
                    <ButtonComponent size="sm" variant="ghost">Reviews</ButtonComponent>
                  </div>
                }
              />
            </div>
          </div>

          <div className="use-case">
            <h3>Corporate Website</h3>
            <p>Professional appearance with gradient styling for enterprise solutions</p>
            <div className="example-header">
              <FancyPageHeader
                title="Enterprise Solutions"
                subtitle="Built for scale, designed for success"
                gradient="linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)"
                leftContent={
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <ButtonComponent size="sm" variant="ghost" style={{ color: 'white' }}>Solutions</ButtonComponent>
                    <ButtonComponent size="sm" variant="ghost" style={{ color: 'white' }}>Industries</ButtonComponent>
                    <ButtonComponent size="sm" variant="ghost" style={{ color: 'white' }}>About</ButtonComponent>
                  </div>
                }
                rightContent={
                  <ButtonComponent size="sm" variant="outline" style={{ color: 'white', borderColor: 'white' }}>
                    Contact Sales
                  </ButtonComponent>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderWrappersDemo; 