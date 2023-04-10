import React, { useState } from "react";
import Display from "./components/display/display";
import ButtonBox from "./components/button-box/button-box";

import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const ops = ["/", "*", "-", "+", "."];

  const updateDisplay = (value) => {
    if (
      (ops.includes(value) && display === "") ||
      (ops.includes(value) && ops.includes(display.toString().slice(-1)))
    ) {
      return;
    }
    setDisplay(display + value);
  };

  const clear = (value) => {
    setDisplay(value);
  };

  const delLast = () => {
    if (display === "") {
      return;
    }
    const value = display.slice(0, -1);
    setDisplay(value);
  };

  const calculate = () => {
    setDisplay(eval(display));
  };

  return (
    <div className='app'>
      <div className='calculator'>
        <Display display={display} />
        <ButtonBox
          clear={clear}
          delLast={delLast}
          calculate={calculate}
          updateDisplay={updateDisplay}
        />
      </div>
    </div>
  );
}

export default App;
