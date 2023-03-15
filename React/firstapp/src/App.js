import Navigation from './components/Navigation';
import Greeting from './components/Greeting';
import Footer from './components/Footer';
import Button from './components/Button';
import InputComponent from './components/Hooks';
import './App.css';

function App() {
  return (
    <>
    <Navigation first="Home" second="About" third="Contact" />
    <Greeting greet="friend" />
    <Button />
    <InputComponent />
    <Footer />
    </>
  ); 
} 
 
export default App;
