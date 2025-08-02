import React from "react";
import HeaderComponent from "./HeaderComponent";

interface CallToActionPageHeaderProps {
  title: string;
  subtitle?: string;
  logo?: React.ReactNode;
  logoText?: string;
  ctaButton: React.ReactNode;
  leftContent?: React.ReactNode;
  centerContent?: React.ReactNode;
  onLogoClick?: () => void;
  onTitleClick?: () => void;
  fixed?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * CallToActionPageHeader - A header optimized for conversion and user engagement
 * 
 * Features:
 * - Outlined type with subtle border
 * - Call-to-action button prominently placed
 * - Low elevation for subtlety
 * - Space-between alignment
 * - No border or shadow for clean look
 * 
 * Use cases:
 * - Product pages
 * - Sign-up flows
 * - Conversion-focused pages
 * - Marketing campaigns
 */
const CallToActionPageHeader: React.FC<CallToActionPageHeaderProps> = ({
  title,
  subtitle,
  logo,
  logoText,
  ctaButton,
  leftContent,
  centerContent,
  onLogoClick,
  onTitleClick,
  fixed = false,
  className = "",
  style = {},
}) => (
  <HeaderComponent
    type="outlined"
    title={title}
    subtitle={subtitle}
    logo={logo}
    logoText={logoText}
    leftContent={leftContent}
    centerContent={centerContent}
    rightContent={ctaButton}
    onLogoClick={onLogoClick}
    onTitleClick={onTitleClick}
    size="md"
    align="space-between"
    fixed={fixed}
    elevation="low"
    showBorder={false}
    showShadow={false}
    className={`call-to-action-header ${className}`}
    style={style}
  />
);

export default CallToActionPageHeader;
