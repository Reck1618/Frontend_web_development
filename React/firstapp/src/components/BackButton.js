import { useNavigate } from "react-router-dom";

const Button = ({ children, backgroundColor, onClick }) => {
    return (
      <button style={{ backgroundColor }} onClick={onClick}>
        {children}
      </button>
    );
  };

const GoBackButton = () => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/');
    };
  
    return (
      <Button onClick={handleClick} backgroundColor="red">
        Go Back
      </Button>
    );
  };
  
export default GoBackButton;