import Greeting from './Greeting';
import Button from './Button';
import InputComponent from './Hooks';

const time = new Date().getHours();

function HomePage () {
  return (
    <>
    { time > 6 && time < 18 ? <Greeting greet="friend" /> : <Greeting greet="stranger" /> }
    <Button />
    <InputComponent />
    </>
  );
}

export default HomePage;