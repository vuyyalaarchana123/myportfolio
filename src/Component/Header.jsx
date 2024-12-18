import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
import './Header.css'; // Importing the CSS for styling

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">My Portfolio</div>
        <div className="nav-links">
          {/* Use Link for navigation */}
          <Link to="/home" className="nav-button">Home</Link>
          <Link to="/about" className="nav-button">About</Link>
          <Link to="/certificates" className="nav-button">Certificates</Link>
          <Link to="/projects" className="nav-button">Projects</Link>
          <Link to="/contact" className="nav-button">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
