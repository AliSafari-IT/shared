import React from "react";
import HeaderComponent from "./HeaderComponent";

interface HeroPageHeaderProps {
  title: string;
  subtitle?: string;
  logo?: React.ReactNode;
  logoText?: string;
  backgroundImage?: string;
  backgroundGradient?: string;
  cta?: React.ReactNode;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  onLogoClick?: () => void;
  onTitleClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * HeroPageHeader - A hero-style header for landing pages and promotional content
 * 
 * Features:
 * - Minimal type with transparent background
 * - Large size for impact
 * - Center alignment
 * - Background image/gradient support
 * - Call-to-action integration
 * - Full-width design
 * 
 * Use cases:
 * - Landing pages
 * - Product launches
 * - Promotional campaigns
 * - Hero sections
 */
const HeroPageHeader: React.FC<HeroPageHeaderProps> = ({
  title,
  subtitle,
  logo,
  logoText,
  backgroundImage,
  backgroundGradient,
  cta,
  leftContent,
  rightContent,
  onLogoClick,
  onTitleClick,
  className = "",
  style = {},
}) => {
  const backgroundStyle = {
    ...style,
    ...(backgroundImage && {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }),
    ...(backgroundGradient && {
      background: backgroundGradient,
    }),
    color: "var(--text-color)",
    padding: "var(--theme-spacing-10) 0",
    minHeight: "400px",
    display: "flex",
    alignItems: "center",
  };

  return (
    <HeaderComponent
      type="minimal"
      title={title}
      subtitle={subtitle}
      logo={logo}
      logoText={logoText}
      leftContent={leftContent}
      rightContent={rightContent}
      centerContent={cta}
      onLogoClick={onLogoClick}
      onTitleClick={onTitleClick}
      size="lg"
      align="center"
      fixed={false}
      transparent
      elevation="none"
      showBorder={false}
      showShadow={false}
      className={`hero-page-header ${className}`}
      style={backgroundStyle}
    />
  );
};

export default HeroPageHeader;
