import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Expertise from './pages/Expertise';
import Contact from './pages/Contact';
import Book from './pages/Book';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
