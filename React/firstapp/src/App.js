import AboutMe from './components/About';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Navigation first="Home" second="About" third="Contact" />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/aboutMe" element={<AboutMe />} />
    </Routes>
    <Footer />
    </>
  ); 
} 
 
export default App;
