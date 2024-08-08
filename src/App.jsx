import { useState } from "react";
import "./App.css";

function App() {
  const [inputvalue, setInputValue] = useState("");
  function display(value) {
    setInputValue(inputvalue + value);
    console.log(inputvalue)
  }
  function calculate() {
    let answers = eval(inputvalue);
    setInputValue(answers);
    console.log("Hey you just click")
  }
  function clear() {
    console.log("you just clear everything!");
    setInputValue("");
  }
  return (
    <>
    <h1>React Calculator</h1>
      <form name="calc" className="calculator">
        <input type="text" className="input-bar" value={inputvalue} />
        <span className="clear" onClick={clear}>
          C
        </span>
        <span onClick={()=>display("/")}>/</span>
        <span onClick={()=>display("*")}>*</span>
        <span onClick={()=>display("7")}>7</span>
        <span onClick={()=>display("8")}>8</span>
        <span onClick={()=>display("9")}>9</span>
        <span onClick={()=>display("-")}>-</span>
        <span onClick={()=>display("4")}>4</span>
        <span onClick={()=>display("5")}>5</span>
        <span onClick={()=>display("6")}>6</span>
        <span  className="plus-btn" onClick={()=>display("+")}> + </span>
        <span onClick={()=>display("1")}> 1</span>
        <span onClick={()=>display("2")}> 2</span>
        <span onClick={()=>display("3")}> 3</span>
        <span onClick={()=>display("0")}> 0</span>
        <span onClick={()=>display("00")}> 00 </span>
        <span onClick={()=>display(".")}>.</span>
        <span onClick={()=>calculate()}>=</span>
      </form>
    </>
  );
}

export default App;
