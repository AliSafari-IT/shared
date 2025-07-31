import React, { useState, useRef } from 'react';
import InputFields, { InputFieldsRef, InputStylingType, InputFieldType } from '../../../src/components/Inputs/InputFields';
import './InputFieldsDemo.css';

const InputFieldsDemo: React.FC = () => {
  const [demoValues, setDemoValues] = useState<Record<string, string>>({});
  const [currentStyling, setCurrentStyling] = useState<InputStylingType>('default');
  const inputRef = useRef<InputFieldsRef>(null);

  const handleValueChange = (value: string, name?: string) => {
    if (name) {
      setDemoValues(prev => ({ ...prev, [name]: value }));
    }
  };

  const clearAllInputs = () => {
    setDemoValues({});
  };

  const validateEmail = (value: string): string | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
      return 'Please enter a valid email address';
    }
    return null;
  };

  const validatePassword = (value: string): string | null => {
    if (value.length > 0 && value.length < 8) {
      return 'Password must be at least 8 characters long';
    }
    return null;
  };

  const inputTypes: { type: InputFieldType; label: string; icon?: React.ReactNode }[] = [
    { type: 'text', label: 'Text Input', icon: '📝' },
    { type: 'email', label: 'Email Input', icon: '📧' },
    { type: 'password', label: 'Password Input', icon: '🔒' },
    { type: 'number', label: 'Number Input', icon: '#️⃣' },
    { type: 'range', label: 'Range Slider', icon: '🎚️' },
    { type: 'tel', label: 'Phone Input', icon: '📞' },
    { type: 'url', label: 'URL Input', icon: '🌐' },
    { type: 'search', label: 'Search Input', icon: '🔍' },
    { type: 'date', label: 'Date Input', icon: '📅' },
    { type: 'time', label: 'Time Input', icon: '⏰' },
    { type: 'textarea', label: 'Textarea', icon: '📄' },
    { type: 'select', label: 'Select Dropdown', icon: '📋' },
    { type: 'checkbox', label: 'Checkbox', icon: '☑️' },
    { type: 'radio', label: 'Radio Button', icon: '🔘' },
    { type: 'file', label: 'File Upload', icon: '📁' },
    { type: 'hidden', label: 'Hidden Input', icon: '🔒' }
  ];

  const stylingTypes: InputStylingType[] = ['default', 'compact', 'outlined', 'minimal'];

  return (
    <div className="input-fields-demo">
      <div className="demo-header">
        <h1>InputFields Component Demo</h1>
        <p>
          A comprehensive form input component supporting 10 input types with 4 styling variants,
          validation, states, and accessibility features.
        </p>
      </div>

      {/* Styling Selector */}
      <div className="demo-section">
        <h2>🎨 Styling Types</h2>
        <div className="styling-selector">
          {stylingTypes.map((style) => (
            <button
              key={style}
              className={`styling-btn ${currentStyling === style ? 'active' : ''}`}
              onClick={() => setCurrentStyling(style)}
            >
              {style.charAt(0).toUpperCase() + style.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* All Input Types */}
      <div className="demo-section">
        <h2>🔧 All Input Types</h2>
        <div className="inputs-grid">
          {inputTypes.map(({ type, label, icon }) => (
            <div key={type} className="input-demo-item">
              <h3>{icon} {label}</h3>
              <InputFields
                type={type}
                styling={currentStyling}
                label={label}
                placeholder={`Enter ${label.toLowerCase()}...`}
                value={demoValues[type] || ''}
                onChange={(value: string) => handleValueChange(value, type)}
                name={type}
                helperText={`This is a ${type} input field`}
                {...(type === 'textarea' && { rows: 3 })}
                {...(type === 'number' && { min: 0, max: 100, step: 1 })}
                {...(type === 'range' && { min: 0, max: 100, step: 1 })}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Size Variations */}
      <div className="demo-section">
        <h2>📏 Size Variations</h2>
        <div className="size-demo">
          {(['sm', 'md', 'lg'] as const).map((size) => (
            <div key={size} className="size-demo-item">
              <InputFields
                type="text"
                styling={currentStyling}
                label={`Size: ${size.toUpperCase()}`}
                placeholder={`${size.toUpperCase()} sized input`}
                size={size}
                value={demoValues[`size-${size}`] || ''}
                onChange={(value: string) => handleValueChange(value, `size-${size}`)}
                name={`size-${size}`}
                icon="📝"
                iconPosition="left"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Input States */}
      <div className="demo-section">
        <h2>🎯 Input States</h2>
        <div className="states-grid">
          <div className="state-demo-item">
            <h3>✅ Success State</h3>
            <InputFields
              type="text"
              styling={currentStyling}
              label="Success Input"
              placeholder="This input is in success state"
              value="Valid input"
              success={true}
              icon="✅"
              iconPosition="right"
              helperText="This input has been validated successfully"
            />
          </div>

          <div className="state-demo-item">
            <h3>❌ Error State</h3>
            <InputFields
              type="text"
              styling={currentStyling}
              label="Error Input"
              placeholder="This input has an error"
              value="Invalid"
              error="This field contains an error"
              icon="❌"
              iconPosition="right"
            />
          </div>

          <div className="state-demo-item">
            <h3>⏳ Loading State</h3>
            <InputFields
              type="text"
              styling={currentStyling}
              label="Loading Input"
              placeholder="This input is loading"
              value="Processing..."
              loading={true}
              helperText="Please wait while we process your input"
            />
          </div>

          <div className="state-demo-item">
            <h3>🚫 Disabled State</h3>
            <InputFields
              type="text"
              styling={currentStyling}
              label="Disabled Input"
              placeholder="This input is disabled"
              value="Cannot edit this"
              disabled={true}
              helperText="This input is currently disabled"
            />
          </div>

          <div className="state-demo-item">
            <h3>👁️ Read-only State</h3>
            <InputFields
              type="text"
              styling={currentStyling}
              label="Read-only Input"
              placeholder="This input is read-only"
              value="Read-only value"
              readOnly={true}
              helperText="This input is read-only"
            />
          </div>

          <div className="state-demo-item">
            <h3>📊 Character Count</h3>
            <InputFields
              type="text"
              styling={currentStyling}
              label="Text with Counter"
              placeholder="Type something..."
              value={demoValues['counter'] || ''}
              onChange={(value: string) => handleValueChange(value, 'counter')}
              name="counter"
              validation={{ maxLength: 50 }}
              showCharacterCount={true}
              helperText="Maximum 50 characters allowed"
            />
          </div>
        </div>
      </div>

      {/* Validation Examples */}
      <div className="demo-section">
        <h2>✅ Validation Examples</h2>
        <div className="validation-grid">
          <div className="validation-demo-item">
            <h3>📧 Email Validation</h3>
            <InputFields
              type="email"
              styling={currentStyling}
              label="Email Address"
              placeholder="user@example.com"
              value={demoValues['email-validation'] || ''}
              onChange={(value: string) => handleValueChange(value, 'email-validation')}
              name="email-validation"
              required={true}
              validation={{
                required: true,
                custom: validateEmail
              }}
              validateOnChange={true}
              icon="📧"
              iconPosition="left"
              helperText="Enter a valid email address"
            />
          </div>

          <div className="validation-demo-item">
            <h3>🔒 Password Validation</h3>
            <InputFields
              type="password"
              styling={currentStyling}
              label="Password"
              placeholder="Enter secure password"
              value={demoValues['password-validation'] || ''}
              onChange={(value: string) => handleValueChange(value, 'password-validation')}
              name="password-validation"
              required={true}
              validation={{
                required: true,
                minLength: 8,
                custom: validatePassword
              }}
              validateOnChange={true}
              icon="🔒"
              iconPosition="left"
              helperText="Password must be at least 8 characters"
            />
          </div>

          <div className="validation-demo-item">
            <h3>📝 Required Text</h3>
            <InputFields
              type="text"
              styling={currentStyling}
              label="Required Field"
              placeholder="This field is required"
              value={demoValues['required-text'] || ''}
              onChange={(value: string) => handleValueChange(value, 'required-text')}
              name="required-text"
              required={true}
              validation={{ required: true }}
              validateOnBlur={true}
              icon="📝"
              iconPosition="left"
              helperText="This field cannot be empty"
            />
          </div>

          <div className="validation-demo-item">
            <h3>📱 Phone Number</h3>
            <InputFields
              type="tel"
              styling={currentStyling}
              label="Phone Number"
              placeholder="+1 (555) 123-4567"
              value={demoValues['phone-validation'] || ''}
              onChange={(value: string) => handleValueChange(value, 'phone-validation')}
              name="phone-validation"
              validation={{
                pattern: /^[\+]?[\d\s\(\)\-]+$/,
                minLength: 10
              }}
              validateOnChange={true}
              icon="📱"
              iconPosition="left"
              helperText="Enter a valid phone number"
            />
          </div>
        </div>
      </div>

      {/* Advanced Features */}
      <div className="demo-section">
        <h2>🚀 Advanced Features</h2>
        <div className="advanced-grid">
          <div className="advanced-demo-item">
            <h3>🎯 Imperative Methods</h3>
            <InputFields
              ref={inputRef}
              type="text"
              styling={currentStyling}
              label="Controlled via Ref"
              placeholder="Use buttons below to control this input"
              value={demoValues['ref-controlled'] || ''}
              onChange={(value: string) => handleValueChange(value, 'ref-controlled')}
              name="ref-controlled"
              helperText="This input is controlled using imperative methods"
            />
            <div className="ref-controls">
              <button onClick={() => inputRef.current?.focus()}>Focus</button>
              <button onClick={() => inputRef.current?.clear()}>Clear</button>
              <button onClick={() => inputRef.current?.setValue('Set by ref!')}>Set Value</button>
              <button onClick={() => alert(inputRef.current?.getValue())}>Get Value</button>
              <button onClick={() => inputRef.current?.validate()}>Validate</button>
            </div>
          </div>

          <div className="advanced-demo-item">
            <h3>📱 Full Width</h3>
            <InputFields
              type="text"
              styling={currentStyling}
              label="Full Width Input"
              placeholder="This input takes full width of its container"
              value={demoValues['full-width'] || ''}
              onChange={(value: string) => handleValueChange(value, 'full-width')}
              name="full-width"
              fullWidth={true}
              icon="📱"
              iconPosition="left"
              helperText="This input spans the full width"
            />
          </div>

          <div className="advanced-demo-item">
            <h3>📝 Large Textarea</h3>
            <InputFields
              type="textarea"
              styling={currentStyling}
              label="Comments"
              placeholder="Enter your detailed comments here..."
              value={demoValues['large-textarea'] || ''}
              onChange={(value: string) => handleValueChange(value, 'large-textarea')}
              name="large-textarea"
              rows={6}
              resize={true}
              validation={{ maxLength: 500 }}
              showCharacterCount={true}
              helperText="Share your thoughts (max 500 characters)"
            />
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="demo-section">
        <h2>📖 Usage Examples</h2>
        <div className="usage-examples">
          <div className="usage-example">
            <h3>Basic Usage</h3>
            <pre><code>{`import InputFields from '@asafarim/shared';

<InputFields
  type="text"
  styling="default"
  label="Your Name"
  placeholder="Enter your name"
  value={value}
  onChange={setValue}
  required={true}
/>`}</code></pre>
          </div>

          <div className="usage-example">
            <h3>With Validation</h3>
            <pre><code>{`<InputFields
  type="email"
  styling="outlined"
  label="Email"
  validation={{
    required: true,
    pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
  }}
  validateOnChange={true}
  icon="📧"
  helperText="Enter a valid email"
/>`}</code></pre>
          </div>

          <div className="usage-example">
            <h3>With States</h3>
            <pre><code>{`<InputFields
  type="password"
  styling="minimal"
  label="Password"
  error={errors.password}
  loading={isValidating}
  success={isValid}
  showCharacterCount={true}
/>`}</code></pre>
          </div>
        </div>
      </div>

      {/* Demo Controls */}
      <div className="demo-controls">
        <button onClick={clearAllInputs} className="clear-all-btn">
          🗑️ Clear All Inputs
        </button>
        <div className="demo-info">
          <p><strong>Total Inputs:</strong> {Object.keys(demoValues).length}</p>
          <p><strong>Current Styling:</strong> {currentStyling}</p>
        </div>
      </div>
    </div>
  );
};

export default InputFieldsDemo;
