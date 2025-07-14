import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '@asafarim/react-themes';
import Overview from './components/Overview';
import PackageLinksDemo from './components/PackageLinksDemo';


function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="nav-menu">
      <Link 
        to="/" 
        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
      >
        Overview
      </Link>
      <Link 
        to="/package-links" 
        className={`nav-link ${location.pathname === '/package-links' ? 'active' : ''}`}
      >
        PackageLinks
      </Link>
    </nav>
  );
}

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <header className="app-header">
          <div className="header-content">
            <div className="header-text">
              <h1>@asafarim/shared</h1>
              <p>Component Library Demo</p>
            </div>
            <ThemeToggle size="md" showLabels={true} />
          </div>
        </header>
        
        <Navigation />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/package-links" element={<PackageLinksDemo />} />
          </Routes>
        </main>
        
        <footer className="app-footer">
          <p>
            Built with React + TypeScript + Vite + @asafarim/react-themes
          </p>
          <p>
            <a href="https://github.com/AliSafari-IT/shared" target="_blank" rel="noopener noreferrer">
              View source on GitHub
            </a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
