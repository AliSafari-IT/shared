import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavigationDropdown.css';

interface NavigationDropdownProps {
  isActive: (path: string) => boolean;
  className?: string;
}

const NavigationDropdown: React.FC<NavigationDropdownProps> = ({ isActive, className }) => {
  console.log('className', className);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const headerLinks = [
    { path: '/header-component', label: 'HeaderComponent' },
    { path: '/header-wrappers', label: 'HeaderWrappers' }
  ];

  const isAnyHeaderActive = headerLinks.some(link => isActive(link.path));

  return (
    <div className="nav-dropdown" ref={dropdownRef}>
      <button
        className={`nav-dropdown-toggle ${isAnyHeaderActive ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        Headers
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>
          ▼
        </span>
      </button>
      
      {isOpen && (
        <div className={`nav-dropdown-menu ${className}`}>
          {headerLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-dropdown-item ${isActive(link.path) ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavigationDropdown; 