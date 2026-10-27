
import { useState } from "react";

function App() {
  const [showMessage, setShowMessage] = useState(true);
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");


  function handleToggle() {
    setShowMessage((prev) => !prev);
  }

  function handleIncrement() {
    if ((count+1)%5!=0){
      setCount((prev) => prev + 1);
      setMessage("");
    } else {
      setCount((prev) => prev + 2);
      setMessage("Skipped multiple of 5");
    }
  }

  function handleDecrement() {
    if ((count-1)%5!=0){
      setCount((prev) => prev - 1);
      setMessage("");
    } else {
      setCount((prev) => prev - 2);
      setMessage("Skipped multiple of 5");
    }


    // 1. What is State in React?
// State is data that a component remembers and can change over time.
// For example:
// - A counter changing from 0 to 1.
// - A button opening and closing a menu.
// - A text box remembering what you type.
// - A like button changing from 0 likes to 1 like.

// 2. Why do we need State?
// Look at this example:
  let count = 0;

   function handleClick() {
    count = count + 1;
  }

// The variable count increases, but React does not automatically update the screen.
// Why? Because changing a normal variable does not tell React to render the component again.
// Solution: Use useState.



