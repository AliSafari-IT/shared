import React, { useState, forwardRef, useImperativeHandle } from 'react';
import './InputFields.css';

// Define the styling types
export type InputStylingType = 'default' | 'compact' | 'outlined' | 'minimal';

// Define the input types
export type InputFieldType = 
  | 'text' 
  | 'email' 
  | 'password' 
  | 'number' 
  | 'tel' 
  | 'url' 
  | 'search' 
  | 'date' 
  | 'time' 
  | 'textarea'
  | 'range'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'file'
  | 'hidden';

// Define validation rules
export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}

// Component props interface
export interface InputFieldsProps {
  // Core props
  type?: InputFieldType;
  styling?: InputStylingType;
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  
  // Event handlers
  onChange?: (value: string, name?: string) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  
  // State props
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  error?: string;
  success?: boolean;
  loading?: boolean;
  
  // Styling props
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  style?: React.CSSProperties;
  
  // Form props
  name?: string;
  id?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  
  // Validation
  validation?: ValidationRule;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  
  // Specific to textarea
  rows?: number;
  cols?: number;
  resize?: boolean;
  
  // Specific to number
  min?: number;
  max?: number;
  step?: number;
  
  // Helper text
  helperText?: string;
  showCharacterCount?: boolean;
  
  // Additional HTML attributes
  [key: string]: any;
}

// Ref interface for imperative methods
export interface InputFieldsRef {
  focus: () => void;
  blur: () => void;
  clear: () => void;
  validate: () => boolean;
  getValue: () => string;
  setValue: (value: string) => void;
}

const InputFields = forwardRef<InputFieldsRef, InputFieldsProps>(({
  type = 'text',
  styling = 'default',
  label,
  placeholder,
  value,
  defaultValue = '',
  onChange,
  onBlur,
  onFocus,
  onKeyPress,
  disabled = false,
  readOnly = false,
  required = false,
  error,
  success = false,
  loading = false,
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className = '',
  style = {},
  name,
  id,
  autoComplete,
  autoFocus = false,
  validation,
  validateOnChange = false,
  validateOnBlur = true,
  rows = 4,
  cols,
  resize = true,
  min,
  max,
  step,
  helperText,
  showCharacterCount = false,
  ...rest
}, ref) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [internalError, setInternalError] = useState<string>('');
  const [isFocused, setIsFocused] = useState(false);
  
  const inputRef = React.useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  
  // Use controlled value if provided, otherwise use internal state
  const currentValue = value !== undefined ? value : internalValue;
  const currentError = error || internalError;
  
  // Validation function
  const validateValue = (val: string): string | null => {
    if (!validation) return null;
    
    if (validation.required && !val.trim()) {
      return 'This field is required';
    }
    
    if (validation.minLength && val.length < validation.minLength) {
      return `Minimum length is ${validation.minLength} characters`;
    }
    
    if (validation.maxLength && val.length > validation.maxLength) {
      return `Maximum length is ${validation.maxLength} characters`;
    }
    
    if (validation.pattern && !validation.pattern.test(val)) {
      return 'Invalid format';
    }
    
    if (validation.custom) {
      return validation.custom(val);
    }
    
    return null;
  };
  
  // Handle value change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    
    if (value === undefined) {
      setInternalValue(newValue);
    }
    
    if (validateOnChange) {
      const validationError = validateValue(newValue);
      setInternalError(validationError || '');
    }
    
    onChange?.(newValue, name);
  };
  
  // Handle blur event
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(false);
    
    if (validateOnBlur) {
      const validationError = validateValue(currentValue);
      setInternalError(validationError || '');
    }
    
    onBlur?.(e);
  };
  
  // Handle focus event
  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };
  
  // Imperative methods
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    clear: () => {
      const newValue = '';
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue, name);
    },
    validate: () => {
      const validationError = validateValue(currentValue);
      setInternalError(validationError || '');
      return !validationError;
    },
    getValue: () => currentValue,
    setValue: (newValue: string) => {
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue, name);
    }
  }));
  
  // Build CSS classes
  const containerClasses = [
    'input-field-container',
    `input-field-${styling}`,
    `input-field-size-${size}`,
    fullWidth ? 'input-field-full-width' : '',
    disabled ? 'input-field-disabled' : '',
    readOnly ? 'input-field-readonly' : '',
    currentError ? 'input-field-error' : '',
    success && !currentError ? 'input-field-success' : '',
    loading ? 'input-field-loading' : '',
    isFocused ? 'input-field-focused' : '',
    icon ? `input-field-with-icon input-field-icon-${iconPosition}` : '',
    className
  ].filter(Boolean).join(' ');
  
  const inputClasses = [
    'input-field',
    type === 'textarea' ? 'input-field-textarea' : '',
    !resize && type === 'textarea' ? 'input-field-no-resize' : ''
  ].filter(Boolean).join(' ');
  
  // Common input props
  const commonProps = {
    ref: inputRef as any,
    className: inputClasses,
    value: currentValue,
    onChange: handleChange,
    onBlur: handleBlur,
    onFocus: handleFocus,
    onKeyPress,
    disabled,
    readOnly,
    required,
    name,
    id: id || name,
    autoComplete,
    autoFocus,
    placeholder,
    'aria-invalid': !!currentError,
    'aria-describedby': currentError ? `${id || name}-error` : helperText ? `${id || name}-helper` : undefined,
    ...rest
  };
  
  // Render input element based on type
  const renderInput = () => {
    if (type === 'textarea') {
      return (
        <textarea
          {...commonProps}
          rows={rows}
          cols={cols}
        />
      );
    }
    
    return (
      <input
        {...commonProps}
        type={type}
        min={min}
        max={max}
        step={step}
      />
    );
  };
  
  // Character count
  const characterCount = validation?.maxLength ? `${currentValue.length}/${validation.maxLength}` : currentValue.length;
  
  return (
    <div className={containerClasses} style={style}>
      {label && (
        <label 
          htmlFor={id || name} 
          className="input-field-label"
        >
          {label}
          {required && <span className="input-field-required">*</span>}
        </label>
      )}
      
      <div className="input-field-wrapper">
        {icon && iconPosition === 'left' && (
          <div className="input-field-icon input-field-icon-left">
            {icon}
          </div>
        )}
        
        {renderInput()}
        
        {icon && iconPosition === 'right' && (
          <div className="input-field-icon input-field-icon-right">
            {icon}
          </div>
        )}
        
        {loading && (
          <div className="input-field-loading-spinner">
            <div className="spinner" />
          </div>
        )}
      </div>
      
      {(currentError || helperText || showCharacterCount) && (
        <div className="input-field-footer">
          {currentError && (
            <div 
              className="input-field-error-text" 
              id={`${id || name}-error`}
              role="alert"
            >
              {currentError}
            </div>
          )}
          
          {!currentError && helperText && (
            <div 
              className="input-field-helper-text" 
              id={`${id || name}-helper`}
            >
              {helperText}
            </div>
          )}
          
          {showCharacterCount && (
            <div className="input-field-character-count">
              {characterCount}
            </div>
          )}
        </div>
      )}
    </div>
  );
});

InputFields.displayName = 'InputFields';

export default InputFields;
