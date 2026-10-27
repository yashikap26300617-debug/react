
import { useState } from 'react';


function LearnEvent() {
  /*
   * Normal - js - click
   * React - js - onClick, onInput, onChange, onSubmit, onKeypress, onMouseover
   */


  const [text, setText] = useState("");


  function handleClick() {
    alert("Hello Everyone ");
  }


  function handleChange(e) {
    setText(e.target.value);
  }


  function handleClear() {
    setText("");
  }


  return (
    <div>
      {/* Click */}
      <button onClick={handleClick}>ShowAlert</button>


      {/* onChange */}
      <input type="text" value={text} onChange={handleChange} />
      <h1>{text}</h1>


      <button onClick={handleClear}>ClearAll</button>
    </div>
  );
}


export default LearnEvent;

// 1. What is an event?

// An event is an action performed by the user, such as clicking a button, typing in a box, or submitting a form.
// Examples:
// - onClick — when a user clicks.
// - onChange — when an input value changes.
// - onSubmit — when a form is submitted.
// - onMouseEnter — when the mouse moves over an element.

// 2. What is an event handler?
// An event handler is a function that runs when an event happens.
function App() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click me</button>;
}






