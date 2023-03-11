import Navigation from './components/Navigation';
import Greeting from './components/Greeting';
import Footer from './components/Footer';
import './App.css';

function App() {
  return ( 
    <>
    <Navigation first="Home" second="About" third="Contact" />
    <Greeting greet="friend" />
    <Footer />
    </>
  ); 
} 
 
export default App;
