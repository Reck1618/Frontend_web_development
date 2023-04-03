import { RadioGroup, RadioOption } from "./Radio";
import { useState } from "react";

function TestOptions() {
  const [selected, setSelected] = useState("");
  return (
    <div className="TestOptions">
      <h2>How would you like to die?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Burn in fire?</RadioOption>
        <RadioOption value="friends">Butchered by a Bear?</RadioOption>
        <RadioOption value="advertising">Fall from a cliff?</RadioOption>
        <RadioOption value="other">Other?</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  );
}

export default TestOptions;
