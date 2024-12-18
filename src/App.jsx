import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
// Import the Body component
import About from './Component/MyComponent/About';
import Projects from './Component/MyComponent/Projects';
import Certifications from './Component/MyComponent/Certifications';
import Home from './Component/MyComponent/Home';
import Contact from './Component/MyComponent/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router> {/* Wrap everything inside Router */}
      <Header /> {/* Header component stays the same for all routes */}
        <Routes>
          {/* Define different routes and associate them with the respective components */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
   
      
      <Footer /> {/* Footer component stays the same for all routes */}
    </Router>
  );
}

export default App;
