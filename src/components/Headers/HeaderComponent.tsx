import React from 'react';
import './HeaderComponent.css';

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
  // Admin-specific props
  adminMode?: boolean;
  totalCount?: number;
  itemName?: string; // e.g., "Tech Stacks", "Users", "Repositories"
  currentPage?: number;
  totalPages?: number;
  showPagination?: boolean;
  actions?: React.ReactNode; // Optional action buttons or elements
  [key: string]: any; // Allow additional props
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
  // Admin-specific props
  adminMode = false,
  totalCount,
  itemName,
  currentPage = 1,
  totalPages = 1,
  showPagination = false,
  actions,
  ...rest
}) => {
  const headerClasses = [
    "header-component",
    `header-component-${type}`,
    `header-component-${size}`,
    `header-component-${align}`,
    fixed && "header-component-fixed",
    transparent && "header-component-transparent",
    elevation !== "none" && `header-component-elevation-${elevation}`,
    showBorder && "header-component-border",
    showShadow && "header-component-shadow",
    adminMode && "header-component-admin",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const headerStyle: React.CSSProperties = {
    ...style,
    ...(backgroundColor && { backgroundColor }),
    ...(textColor && { color: textColor }),
  };

  return (
    <header className={headerClasses} style={headerStyle} {...rest}>
      <div className="header-content">
        {/* Left Content */}
        <div className="header-left">
          {logo && (
            <div className="header-logo" onClick={onLogoClick}>
              {logo}
            </div>
          )}
          {logoText && !logo && (
            <div className="header-logo-text" onClick={onLogoClick}>
              {logoText}
            </div>
          )}
          {leftContent && <div className="header-left-content">{leftContent}</div>}
        </div>

        {/* Center Content */}
        <div className="header-center">
          {title && (
            <h1 className="header-title" onClick={onTitleClick}>
              {title}
            </h1>
          )}
          {subtitle && <h2 className="header-subtitle">{subtitle}</h2>}
          {centerContent && <div className="header-center-content">{centerContent}</div>}
        </div>

        {/* Right Content */}
        <div className="header-right">
          {rightContent && <div className="header-right-content">{rightContent}</div>}
          {adminMode && actions && <div className="header-actions">{actions}</div>}
        </div>
      </div>

      {/* Admin Stats Section */}
      {adminMode && (totalCount !== undefined || (showPagination && totalPages > 1)) && (
        <div className="header-admin-stats">
          {totalCount !== undefined && (
            <span className="admin-stat">
              Total {itemName}: {totalCount}
            </span>
          )}
          {showPagination && totalPages > 1 && (
            <span className="admin-stat">
              Page {currentPage} of {totalPages}
            </span>
          )}
        </div>
      )}
      {children}
    </header>
  );
};

export default HeaderComponent;
