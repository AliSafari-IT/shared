import React from "react";
import "./HeaderComponent.css";

export type HeaderType = "default" | "compact" | "outlined" | "minimal";

interface HeaderComponentProps {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  logo?: React.ReactNode;
  logoText?: string;
  type?: HeaderType;
  fixed?: boolean;
  transparent?: boolean;
  elevation?: "none" | "low" | "medium" | "high";
  size?: "sm" | "md" | "lg";
  align?: "left" | "center" | "right" | "space-between";
  showBorder?: boolean;
  showShadow?: boolean;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
  style?: React.CSSProperties;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  centerContent?: React.ReactNode;
  onLogoClick?: () => void;
  onTitleClick?: () => void;
  [key: string]: any;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  children,
  title,
  subtitle,
  logo,
  logoText,
  type = "default",
  fixed = false,
  transparent = false,
  elevation = "medium",
  size = "md",
  align = "space-between",
  showBorder = true,
  showShadow = true,
  backgroundColor,
  textColor,
  className = "",
  style = {},
  leftContent,
  rightContent,
  centerContent,
  onLogoClick,
  onTitleClick,
  ...rest
}) => {
  const headerClasses = [
    "header-component",
    `header-component-${type}`,
    `header-component-${size}`,
    `header-component-align-${align}`,
    fixed && "header-component-fixed",
    transparent && "header-component-transparent",
    `header-component-elevation-${elevation}`,
    showBorder && "header-component-border",
    showShadow && "header-component-shadow",
    className
  ]
    .filter(Boolean)
    .join(" ");

  const customStyles: React.CSSProperties = {
    ...style,
    ...(backgroundColor && { backgroundColor }),
    ...(textColor && { color: textColor })
  };

  return (
    <header className={headerClasses} style={customStyles} {...rest}>
      <div className="header-component-container">
        {leftContent && <div className="header-component-left">{leftContent}</div>}

        {(logo || logoText) && (
          <div className="header-component-logo" onClick={onLogoClick}>
            {logo && <span className="header-component-logo-icon">{logo}</span>}
            {logoText && <span className="header-component-logo-text">{logoText}</span>}
          </div>
        )}

        {(title || subtitle) && (
          <div className="header-component-title" onClick={onTitleClick}>
            {title && <h1 className="header-component-title-main">{title}</h1>}
            {subtitle && <p className="header-component-title-sub">{subtitle}</p>}
          </div>
        )}

        {centerContent && <div className="header-component-center">{centerContent}</div>}
        {rightContent && <div className="header-component-right">{rightContent}</div>}
        {children}
      </div>
    </header>
  );
};

export default HeaderComponent;
