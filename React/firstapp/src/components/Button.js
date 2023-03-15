// Dynamic

import { useState } from "react";

function Button() {
    const [darkMode, setDarkMode] = useState(false);
    
    const handleClick = () => {
        setDarkMode(!darkMode);
    };
    
    return (
        <div>
        <button onClick={handleClick}>Change Mode</button>
        {darkMode ? <h1>Dark Mode Is On</h1> : <h1>Light Mode Is On</h1>}
        </div>
    );
}

export default Button;


// Non-dynamic Code

// function Button(props) {
//     let darkModeON = true;
//     const darkMode = <h1>Dark Mode Is On</h1>;
//     const lightMode = <h1>Light Mode Is On</h1>;

//     const handleClick = () => {darkModeON = !darkModeON};

//     return (
//         <div>
//             {darkModeON ?  darkMode : lightMode}
//             <button onClick={handleClick}>
//             Change Mode
//             </button>
//         </div>
       
//     );
    
// }

