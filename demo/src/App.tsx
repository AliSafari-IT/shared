import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Overview from "./components/Overview";
import PackageLinksDemo from "./components/PackageLinksDemo";
import ButtonComponentDemo from "./components/ButtonComponentDemo";
import SearchItemsDemo from "./components/SearchItemsDemo";
import DDItemsDemo from "./components/DDItemsDemo";
import InputFieldsDemo from "./components/InputFieldsDemo";
import HeaderComponentDemo from "./components/HeaderComponentDemo";
import HeaderWrappersDemo from "./components/HeaderWrappersDemo";
import AdminHeaderDemo from "./components/AdminHeaderDemo";
import NavigationDropdown from "./components/NavigationDropdown";
import { ThemeToggle } from "@asafarim/react-themes";

// Embed the SVG directly to avoid path resolution issues
const SharedDemoLogo = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="12" fill="#24292F" />
    <g>
      <circle cx="24" cy="24" r="14" fill="#4dabf7" />
      <path
        d="M24 12v24M12 24h24"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="6" fill="#fff" />
      <circle cx="24" cy="24" r="3" fill="#4dabf7" />
    </g>
  </svg>
);

function Navigation() {
  const isActive = (path: string) => {
    return window.location.pathname === path;
  };

  return (
    <nav className="nav-menu">
      <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
        Overview
      </Link>
      <Link
        to="/package-links"
        className={`nav-link ${isActive("/package-links") ? "active" : ""}`}
      >
        PackageLinks
      </Link>
      <Link
        to="/button-component"
        className={`nav-link ${isActive("/button-component") ? "active" : ""}`}
      >
        ButtonComponent
      </Link>
      <Link
        to="/search-box"
        className={`nav-link ${isActive("/search-box") ? "active" : ""}`}
      >
        SearchBox
      </Link>
      <Link
        to="/dropdown"
        className={`nav-link ${isActive("/dropdown") ? "active" : ""}`}
      >
        Dropdown
      </Link>
      <Link
        to="/input-fields"
        className={`nav-link ${isActive("/input-fields") ? "active" : ""}`}
      >
        InputFields
      </Link>
      <NavigationDropdown isActive={isActive} />
    </nav>
  );
}

function App() {
  return (
    <Router basename="/shared">
      <div className="App">
        <header className="app-header">
          <div className="header-content">
            <div className="header-left">
              <a href="/shared" title="@asafarim/shared">
                <span className="header-logo">
                  <SharedDemoLogo />
                </span>
              </a>
              <div className="header-text">
                <h1>@asafarim/shared</h1>
                <p>Component Library Demo</p>
              </div>
            </div>
            <div className="header-right">
              <ThemeToggle size="md" showLabels={true} />
            </div>
          </div>
        </header>

        <Navigation />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/package-links" element={<PackageLinksDemo />} />
            <Route path="/button-component" element={<ButtonComponentDemo />} />
            <Route path="/search-box" element={<SearchItemsDemo />} />
            <Route path="/dropdown" element={<DDItemsDemo />} />
            <Route path="/input-fields" element={<InputFieldsDemo />} />
            <Route path="/header-component" element={<HeaderComponentDemo />} />
            <Route path="/header-wrappers" element={<HeaderWrappersDemo />} />
            <Route path="/admin-header" element={<AdminHeaderDemo />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>

        <footer className="app-footer">
          <p>Built with React + TypeScript + Vite + @asafarim/react-themes</p>
          <p className="footer-links">
            <a
              href="https://github.com/AliSafari-IT/shared"
              target="_blank"
              rel="noopener noreferrer"
            >
              View source on GitHub
            </a>
            <a
              href="https://alisafari-it.github.io/shared/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View demo on GitHub Pages
            </a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
