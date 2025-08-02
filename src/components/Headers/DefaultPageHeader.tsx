import React from "react";
import HeaderComponent from "./HeaderComponent";

interface DefaultPageHeaderProps {
  title: string;
  subtitle?: string;
  logo?: React.ReactNode;
  logoText?: string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  centerContent?: React.ReactNode;
  onLogoClick?: () => void;
  onTitleClick?: () => void;
  fixed?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * DefaultPageHeader - A standard page header with balanced layout
 * 
 * Features:
 * - Default type with gradient background
 * - Medium elevation with shadow
 * - Space-between alignment
 * - Border and shadow enabled
 * - Responsive design
 * 
 * Use cases:
 * - Main application headers
 * - Dashboard headers
 * - Standard page layouts
 */
const DefaultPageHeader: React.FC<DefaultPageHeaderProps> = ({
  title,
  subtitle,
  logo,
  logoText,
  leftContent,
  rightContent,
  centerContent,
  onLogoClick,
  onTitleClick,
  fixed = false,
  className = "",
  style = {},
}) => (
  <HeaderComponent
    type="default"
    title={title}
    subtitle={subtitle}
    logo={logo}
    logoText={logoText}
    leftContent={leftContent}
    rightContent={rightContent}
    centerContent={centerContent}
    onLogoClick={onLogoClick}
    onTitleClick={onTitleClick}
    size="md"
    align="space-between"
    elevation="medium"
    fixed={fixed}
    showBorder
    showShadow
    className={`default-page-header ${className}`}
    style={style}
  />
);

export default DefaultPageHeader;
