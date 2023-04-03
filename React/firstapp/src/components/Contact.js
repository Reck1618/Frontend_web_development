import GoBackButton from './BackButton';
import TestOptions from './Testpage';

function Contact() {
    
    return (
        <>
        <div className="contact">
            <h1>Contact Us?</h1>
            <h4>Don't! They are Watching...</h4>
            <p>Just go back.</p>
            <GoBackButton />
        </div>
        <div>
            <TestOptions />
        </div>
        </>
    )
};

export default Contact;
