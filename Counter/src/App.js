// This imports hooks
import React, { useState, useEffect } from 'react';

// Creates a component called "CountTest", which allows the UI elements to be called from anywwhere, like a javascript function.
function CountTest() {

  // This creates a variable called "count". It uses a function called "setCount" to update the count value. The default value is 0, due to the "useState(0)"
  const [count, setCount] = useState(0);

  // Increment the count. Called by button onclick event.
  const increment = () => setCount(count + 1);

  // Decrement the count. Called by button onclick event.
  const decrement = () => setCount(count - 1);

 // This part uses the "useEffect" to update the content on the website. It only runs when the count value changes.
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // Creates a simple html page.
  // This page includes the counter value and 2 buttons for increment and decrement.
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

// Calls the compontent called "CountTest"
export default CountTest;
