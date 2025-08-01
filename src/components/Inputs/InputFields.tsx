import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./InputFields.css";

// Define the styling types
export type InputStylingType = "default" | "compact" | "outlined" | "minimal";

// Define the input types
export type InputFieldType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "tel"
  | "url"
  | "search"
  | "date"
  | "time"
  | "textarea"
  | "range"
  | "select"
  | "checkbox"
  | "radio"
  | "file"
  | "hidden"
  | "color"
  | "reset"
  | "button"
  | "submit";

// Define the option type for select inputs
export interface Option {
  value: string;
  label: string;
}
// Define the checkbox props
// Checkbox-specific props: use `checked` boolean and callback
type CheckboxProps = Omit<InputFieldsProps, "value" | "onChange"> & {
  checked?: boolean;
  onChange?: (checked: boolean, name?: string) => void;
};

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
  onCheckboxChange?: (checked: boolean, name?: string) => void;

  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onFocus?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onKeyPress?: (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;

  // State props
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  error?: string;
  success?: boolean;
  loading?: boolean;

  // Styling props
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
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

  // Specific to select
  options?: Option[];

  // Specific to select dropdowns
  isMulti?: boolean;

  // Specific to checkbox and radio
  // Use `checked` boolean and callback
  checked?: boolean;

  // Specific to file inputs
  accept?: string; // File types accepted
  multiple?: boolean; // Allow multiple files

  // Specific to hidden inputs

  // Specific to color inputs
  color?: string; // Color input value

  // Specific to reset and button inputs
  reset?: boolean; // Reset button
  button?: boolean; // Button input
  submit?: boolean; // Submit button

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
  reset: () => void;
    // Additional methods can be added as needed
}

// Base implementation as internal component
const BaseInputFields = forwardRef<InputFieldsRef, InputFieldsProps>(
  (
    {
      type = "text",
      styling = "default",
      label,
      placeholder,
      value,
      defaultValue = "",
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
      size = "md",
      fullWidth = false,
      icon,
      iconPosition = "left",
      className = "",
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
      options = [],
        isMulti = false,
        accept,
        multiple = false,
        checked,
        color,
        reset = false,
        button = false,
        submit = false,

      ...rest
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [internalError, setInternalError] = useState<string>("");
    const [isFocused, setIsFocused] = useState(false);
    // Use a ref to access the input element directly
    // This allows us to implement imperative methods like focus, blur, etc.


    const inputRef = React.useRef<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >(null);

    // Use controlled value if provided, otherwise use internal state
    const currentValue = value !== undefined ? value : internalValue;
    const currentError = error || internalError;

    // Validation function
    const validateValue = (val: string): string | null => {
      if (!validation) return null;

      if (validation.required && !val.trim()) {
        return "This field is required";
      }

      if (validation.minLength && val.length < validation.minLength) {
        return `Minimum length is ${validation.minLength} characters`;
      }

      if (validation.maxLength && val.length > validation.maxLength) {
        return `Maximum length is ${validation.maxLength} characters`;
      }

      if (validation.pattern && !validation.pattern.test(val)) {
        return "Invalid format";
      }

      if (validation.custom) {
        return validation.custom(val);
      }

      return null;
    };

    // Handle value change
    const handleChange = (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const newValue = e.target.value;

      if (value === undefined) {
        setInternalValue(newValue);
      }

      if (validateOnChange) {
        const validationError = validateValue(newValue);
        setInternalError(validationError || "");
      }

      onChange?.(newValue, name);
    };

    // Handle blur event
    const handleBlur = (
      e: React.FocusEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setIsFocused(false);

      if (validateOnBlur) {
        const validationError = validateValue(currentValue);
        setInternalError(validationError || "");
      }

      onBlur?.(e as React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>);
    };

    // Handle focus event
    const handleFocus = (
      e: React.FocusEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setIsFocused(true);
      onFocus?.(e as React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>);
    };

    // Imperative methods
    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      blur: () => inputRef.current?.blur(),
      clear: () => {
        const newValue = "";
        if (value === undefined) {
          setInternalValue(newValue);
        }
        onChange?.(newValue, name);
      },
      validate: () => {
        const validationError = validateValue(currentValue);
        setInternalError(validationError || "");
        return !validationError;
      },
      getValue: () => currentValue,
      setValue: (newValue: string) => {
        if (value === undefined) {
          setInternalValue(newValue);
        }
        onChange?.(newValue, name);
      },
      reset: () => {
        if (value === undefined) {
          setInternalValue("");
        }
        onChange?.("", name);
      },
    }));

    // Build CSS classes
    const containerClasses = [
      "input-field-container",
      `input-field-${styling}`,
      `input-field-size-${size}`,
      fullWidth ? "input-field-full-width" : "",
      disabled ? "input-field-disabled" : "",
      readOnly ? "input-field-readonly" : "",
      currentError ? "input-field-error" : "",
      success && !currentError ? "input-field-success" : "",
      loading ? "input-field-loading" : "",
      isFocused ? "input-field-focused" : "",
      icon ? `input-field-with-icon input-field-icon-${iconPosition}` : "",
        // Add custom className if provided
        reset ? "input-field-reset" : "",
        button ? "input-field-button" : "",
        submit ? "input-field-submit" : "",
        color ? "input-field-color" : "",
        // Combine with any additional className
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const inputClasses = [
      "input-field",
      type === "textarea" ? "input-field-textarea" : "",
      !resize && type === "textarea" ? "input-field-no-resize" : "",
        `input-field-${styling}`,
        isMulti ? "input-field-multi" : "",
        accept ? "input-field-accept" : "",
        multiple ? "input-field-multiple" : "",
        checked ? "input-field-checked" : "",
        color ? "input-field-color" : "",
        `input-field-${type}`,
        reset ? "input-field-reset" : "",
        button ? "input-field-button" : "",
        submit ? "input-field-submit" : "",
        size ? `input-field-size-${size}` : "",
        disabled ? "input-field-disabled" : "",
        readOnly ? "input-field-readonly" : "",
        currentError ? "input-field-error" : "",
        success && !currentError ? "input-field-success" : "",
        loading ? "input-field-loading" : "",
        isFocused ? "input-field-focused" : "",
        icon ? `input-field-with-icon input-field-icon-${iconPosition}` : "",
        // Add custom className if provided
        className,
    ]
      .filter(Boolean)
      .join(" ");

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
        style,
        placeholder: type === "select" ? undefined : placeholder,
      "aria-invalid": !!currentError,
      "aria-describedby": currentError
        ? `${id || name}-error`
        : helperText
        ? `${id || name}-helper`
        : undefined,
        // Additional HTML attributes
      ...rest,
    };

    // Render input element based on type
    const renderInput = () => {
      if (type === "textarea") {
        return <textarea {...commonProps} rows={rows} cols={cols} />;
      }

      if (type === "select") {
        return (
          <select
            // assert that these are valid select‐props
            {...(commonProps as React.SelectHTMLAttributes<HTMLSelectElement>)}
          >
            {options.map((option: Option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      }

      if (type === "checkbox" || type === "radio") {
        const isChecked = currentValue === "true" || currentValue === "on";
        return (
          <input
            ref={inputRef as any}
            className={inputClasses}
            type={type}
            checked={isChecked}
            onChange={(e) =>
              handleChange({
                target: { value: e.target.checked.toString() },
              } as any)
            }
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            name={name}
            id={id || name}
            autoFocus={autoFocus}
            {...rest}
          />
        );
      }
      if (type === "file") {
        // File inputs cannot be controlled with a non-empty value
        const { value: _omitValue, ...fileProps } = commonProps as any;
        return (
          <input
            {...fileProps}
            ref={inputRef as any}
            className={inputClasses}
            type="file"
            accept={accept}
            multiple={multiple}
          />
        );
      }
      // For reset, button, and submit, use a <button> to display text
      if (type === "reset" || type === "button" || type === "submit") {
        const buttonText = label || type.charAt(0).toUpperCase() + type.slice(1);
        // Omit non-button-specific props
        const {
          value: _omitValue,
          onChange: _omitChange,
          placeholder: _omitPlaceholder,
          min: _omitMin,
          max: _omitMax,
          step: _omitStep,
          accept: _omitAccept,
          multiple: _omitMultiple,
          ...buttonProps
        } = commonProps as any;
        return (
          <button
            {...buttonProps}
            type={type}
            className={inputClasses}
          >
            {buttonText}
          </button>
        );
      }
      // Default input rendering
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
    const characterCount = validation?.maxLength
      ? `${currentValue.length}/${validation.maxLength}`
      : currentValue.length;

    return (
      <div className={containerClasses} style={style}>
        {/* Skip top label for reset/button/submit since the button shows its own text */}
        {label && type !== "reset" && type !== "button" && type !== "submit" && (
          <label htmlFor={id || name} className="input-field-label">
            {label}
            {required && <span className="input-field-required">*</span>}
          </label>
        )}

        <div className="input-field-wrapper">
          {icon && iconPosition === "left" && (
            <div className="input-field-icon input-field-icon-left">{icon}</div>
          )}

          {renderInput()}

          {icon && iconPosition === "right" && (
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
  }
);

// Display name for React DevTools
BaseInputFields.displayName = "InputFields";

// Create type-specific wrappers
const Text = React.forwardRef<InputFieldsRef, InputFieldsProps>(
  (props, ref) => <BaseInputFields {...props} ref={ref} type="text" />
);
const Email = React.forwardRef<InputFieldsRef, InputFieldsProps>(
  (props, ref) => <BaseInputFields {...props} ref={ref} type="email" />
);
const Password = React.forwardRef<InputFieldsRef, InputFieldsProps>(
  (props, ref) => <BaseInputFields {...props} ref={ref} type="password" />
);
const NumberField = React.forwardRef<InputFieldsRef, InputFieldsProps>(
  (props, ref) => <BaseInputFields {...props} ref={ref} type="number" />
);
const Range = React.forwardRef<InputFieldsRef, InputFieldsProps>(
  (props, ref) => <BaseInputFields {...props} ref={ref} type="range" />
);
const Textarea = React.forwardRef<InputFieldsRef, InputFieldsProps>(
  (props, ref) => <BaseInputFields {...props} ref={ref} type="textarea" />
);

const Tel = React.forwardRef<InputFieldsRef, InputFieldsProps>((props, ref) => (
  <BaseInputFields {...props} ref={ref} type="tel" />
));
const Url = React.forwardRef<InputFieldsRef, InputFieldsProps>((props, ref) => (
  <BaseInputFields {...props} ref={ref} type="url" />
));
const Search = React.forwardRef<InputFieldsRef, InputFieldsProps>(
  (props, ref) => <BaseInputFields {...props} ref={ref} type="search" />
);
const DateField = React.forwardRef<InputFieldsRef, InputFieldsProps>(
  (props, ref) => <BaseInputFields {...props} ref={ref} type="date" />
);
const TimeField = React.forwardRef<InputFieldsRef, InputFieldsProps>(
  (props, ref) => <BaseInputFields {...props} ref={ref} type="time" />
);
const SelectField = React.forwardRef<InputFieldsRef, InputFieldsProps>(
  (props, ref) => <BaseInputFields {...props} ref={ref} type="select" />
);
// Checkbox wrapper: expose `checked` instead of string `value`
const Checkbox = forwardRef<InputFieldsRef, CheckboxProps>(
  ({ checked = false, onChange, ...rest }, ref) => (
    <BaseInputFields
      {...rest}
      ref={ref}
      type="checkbox"
      // feed BaseInputFields a string under the hood
      value={checked ? "true" : "false"}
      // map string back to boolean
      onChange={(val: string, name?: string) =>
        onChange?.(val === "true", name)
      }
    />
  )
);
Checkbox.displayName = "InputFields.Checkbox";
const RadioField = React.forwardRef<InputFieldsRef, InputFieldsProps>(
  (props, ref) => <BaseInputFields {...props} ref={ref} type="radio" />
);
const FileField = React.forwardRef<InputFieldsRef, InputFieldsProps>(
  (props, ref) => <BaseInputFields {...props} ref={ref} type="file" />
);
const HiddenField = React.forwardRef<InputFieldsRef, InputFieldsProps>(
  (props, ref) => <BaseInputFields {...props} ref={ref} type="hidden" />
);
// Additional input type wrappers
const ColorField = React.forwardRef<InputFieldsRef, InputFieldsProps>(
  (props, ref) => <BaseInputFields {...props} ref={ref} type="color" />
);
ColorField.displayName = "InputFields.Color";
const ResetField = React.forwardRef<InputFieldsRef, InputFieldsProps>(
  (props, ref) => <BaseInputFields {...props} ref={ref} type="reset" />
);
ResetField.displayName = "InputFields.Reset";
const ButtonField = React.forwardRef<InputFieldsRef, InputFieldsProps>(
  (props, ref) => <BaseInputFields {...props} ref={ref} type="button" />
);
ButtonField.displayName = "InputFields.Button";
const SubmitField = React.forwardRef<InputFieldsRef, InputFieldsProps>(
  (props, ref) => <BaseInputFields {...props} ref={ref} type="submit" />
);
SubmitField.displayName = "InputFields.Submit";

// Switch / Toggle components: a styled checkbox with on/off labels
interface SwitchProps extends Omit<InputFieldsProps, 'value' | 'onChange'> {
  checked?: boolean;
  onChange?: (checked: boolean, name?: string) => void;
  onLabel?: string;
  offLabel?: string;
}
const SwitchComponent = forwardRef<InputFieldsRef, SwitchProps>(
  ({ checked = false, onChange, onLabel = 'On', offLabel = 'Off', styling = 'default', size = 'md', ...rest }, ref) => {
    const containerClasses = [
      "input-field-container",
      `input-field-${styling}`,
      `input-field-size-${size}`,
      rest.fullWidth ? "input-field-full-width" : "",
      rest.disabled ? "input-field-disabled" : "",
      rest.className || ""
    ].filter(Boolean).join(" ");

    return (
      <div className={containerClasses}>
        {rest.label && (
          <label htmlFor={rest.id || rest.name} className="input-field-label">
            {rest.label}
            {rest.required && <span className="input-field-required">*</span>}
          </label>
        )}
        <div className="input-field-switch-wrapper">
          <input
            ref={ref as any}
            type="checkbox"
            className={`input-field-switch input-field-${styling} input-field-size-${size}`}
            checked={checked}
            onChange={(e) => onChange?.(e.target.checked, rest.name)}
            disabled={rest.disabled}
            name={rest.name}
            id={rest.id || rest.name}
            {...rest}
          />
          <span className="input-field-switch-label">
            {checked ? onLabel : offLabel}
          </span>
        </div>
        {(rest.error || rest.helperText) && (
          <div className="input-field-footer">
            {rest.error && (
              <div className="input-field-error-text" role="alert">
                {rest.error}
              </div>
            )}
            {!rest.error && rest.helperText && (
              <div className="input-field-helper-text">
                {rest.helperText}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);
SwitchComponent.displayName = 'InputFields.Switch';
const ToggleComponent = SwitchComponent;
ToggleComponent.displayName = 'InputFields.Toggle';

// Compose final exported component with static properties
interface ExtendedInputFields
  extends React.ForwardRefExoticComponent<
    InputFieldsProps & React.RefAttributes<InputFieldsRef>
  > {
  Text: typeof Text;
  Email: typeof Email;
  Password: typeof Password;
  Number: typeof NumberField;
  Range: typeof Range;
  Textarea: typeof Textarea;
  Tel: typeof Tel;
  Url: typeof Url;
  Search: typeof Search;
  Date: typeof DateField;
  Time: typeof TimeField;
  Select: typeof SelectField;
  Checkbox: typeof Checkbox;
  Radio: typeof RadioField;
  File: typeof FileField;
  Hidden: typeof HiddenField;
  Color: typeof ColorField;
  Reset: typeof ResetField;
  Button: typeof ButtonField;
  Submit: typeof SubmitField;
  Switch: typeof SwitchComponent;
  Toggle: typeof ToggleComponent;
}
const InputFields = BaseInputFields as ExtendedInputFields;
InputFields.Text = Text;
InputFields.Email = Email;
InputFields.Password = Password;
InputFields.Number = NumberField;
InputFields.Range = Range;
InputFields.Textarea = Textarea;
InputFields.Tel = Tel;
InputFields.Url = Url;
InputFields.Search = Search;
InputFields.Date = DateField;
InputFields.Time = TimeField;
InputFields.Select = SelectField;
InputFields.Checkbox = Checkbox;
InputFields.Radio = RadioField;
InputFields.File = FileField;
InputFields.Hidden = HiddenField;
InputFields.Color = ColorField;
InputFields.Reset = ResetField;
InputFields.Button = ButtonField;
InputFields.Submit = SubmitField;
InputFields.Switch = SwitchComponent;
InputFields.Toggle = ToggleComponent;

export default InputFields;
