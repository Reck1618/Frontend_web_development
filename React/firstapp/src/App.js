import AboutMe from './components/About';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import SignUp from './components/SignUp';
import Goals from './components/Goals';
import FetchApi from './components/FetchApi';
import './App.css';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Navigation first="Home" second="About" third="Contact" fourth="SignUp" fifth="Goals" sixth="FetchApi" />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/aboutMe" element={<AboutMe />} />
    <Route path="/signUp" element={<SignUp />} />
    <Route path="/goals" element={<Goals />} />
    <Route path="/fetchApi" element={<FetchApi />} />

    </Routes>
    <Footer />
    </>
  ); 
} 
 
export default App;
