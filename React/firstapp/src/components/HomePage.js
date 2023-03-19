import Greeting from './Greeting';
import Button from './Button';
import InputComponent from './Hooks';

function HomePage () {
  return (
    <>
    <Greeting greet="friend" />
    <Button />
    <InputComponent />
    </>
  );
}

export default HomePage;