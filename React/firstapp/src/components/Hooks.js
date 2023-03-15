import {useState} from 'react';

function InputComponent() {
    const [inputText, setText] = useState('');
    function handleChange(e) {
      setText(e.target.value);
    }
    return (
      <>
      <input value={inputText} onChange={handleChange} placeholder="Type Something"/>
      <p>You Typed: {inputText}</p>
      <button onClick={() => setText('')}>
        Reset
      </button>
      </>
    )
}

export default InputComponent;