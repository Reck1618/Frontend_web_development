function Button(props) {
    const ClickFunction = () => console.log("Button Clicked");

    return (
        <button onClick={ClickFunction}>
        Click Me
        </button>
    );
    
}

export default Button;