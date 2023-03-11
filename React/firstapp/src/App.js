import Navigation from './components/Navigation';
import Greeting from './components/Greeting';
import './App.css';

function App() {
  return ( 
    <>
    <Navigation />
    <Greeting greet="Hello Friend, you can hear me right?" />
    </>
  ); 
} 
 
export default App;
