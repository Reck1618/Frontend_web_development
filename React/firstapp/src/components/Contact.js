import { useNavigate } from "react-router-dom";

const Button = ({children, backgroundColor}) => {
    return (
        <button style={{backgroundColor}}>{children}</button>
    )
}

const Alert = ({children}) => {
    return (
        <>
            <div className="overlay"/>
            <div className="ALert">
                {children}</div>
        </>

    )
}
// Not Working
const GoBackButton = () => {
    let navigate = useNavigate();
    return (
        <>
            <Button onClick={() => {navigate('/')}} backgroundColor="red">Go Back</Button>
        </>
        
    );
};

function Contact() {
    
    return (
        <div className="contact">
            <h1>Contact Us?</h1>
            <Alert>
                <h4>Don't! They are Watching...</h4>
                <p>Just go back.</p>
                <GoBackButton />
            </Alert>
        </div>
    )
};

export default Contact;
