import React from "react";
import HeaderComponent from "./HeaderComponent";

interface FancyPageHeaderProps {
  title: string;
  subtitle?: string;
  logo?: React.ReactNode;
  logoText?: string;
  icon?: React.ReactNode;
  gradient?: string;
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
 * FancyPageHeader - A premium header with gradient styling and visual impact
 * 
 * Features:
 * - Compact type for efficiency
 * - Large size for presence
 * - Left alignment for branding
 * - High elevation for prominence
 * - Custom gradient backgrounds
 * - Icon integration
 * 
 * Use cases:
 * - Premium applications
 * - Brand-focused pages
 * - High-impact designs
 * - Corporate websites
 */
const FancyPageHeader: React.FC<FancyPageHeaderProps> = ({
  title,
  subtitle,
  logo,
  logoText,
  icon,
  gradient,
  leftContent,
  rightContent,
  centerContent,
  onLogoClick,
  onTitleClick,
  fixed = false,
  className = "",
  style = {},
}) => {
  const fancyStyle = {
    ...style,
    background: gradient || "linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)",
    color: "var(--text-color)",
    padding: "var(--theme-spacing-6) 0",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
  };

  return (
    <HeaderComponent
      type="compact"
      title={title}
      subtitle={subtitle}
      logo={logo || icon}
      logoText={logoText}
      leftContent={leftContent}
      rightContent={rightContent}
      centerContent={centerContent}
      onLogoClick={onLogoClick}
      onTitleClick={onTitleClick}
      size="lg"
      align="left"
      fixed={fixed}
      elevation="high"
      showBorder={false}
      showShadow={false}
      className={`fancy-page-header ${className}`}
      style={fancyStyle}
    />
  );
};

export default FancyPageHeader;
