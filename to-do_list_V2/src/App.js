// https://react.dev/learn/updating-arrays-in-state
// https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/

// Cant get version 2 to work.
// No errors gets output and ChatGPT says it works. 
// Tried 2 in Opera GX and Microsoft Edge.

// Imports useState and useEffect
import React, { useState, useEffect } from 'react';

// This variable is used to assign unique id's.
let itemId = 0;

// Creates a React component
function ToDo() {

  // This represents the user input value
  const [name, setName] = useState('');

  // This represents the HTML list of toDoItems. It starts as an empty array.
  const [toDoItem, setToDo] = useState([]);

  // Uses useEffect to load data from the local storage and puts them into the array, using the setToDo.
  useEffect(() => {
    const storedItems = localStorage.getItem('toDoItems');
    if (storedItems) {
      setToDo(JSON.parse(storedItems));
    }
  }, []);

  // takes toDoItems and puts them into the local storage
  useEffect(() => {
    localStorage.setItem('toDoItems', JSON.stringify(toDoItem))
  }, [toDoItem]);

  // Returns this HTML to the view
  return (
    <div>
      <h1>To do list</h1>
      {/* Creates an input field, for user to write their to-do item.
          The user input calls the setName with the input from the input field */}
      <input value={name} onChange={e => setName(e.target.value)}></input>
      {/* Button which adds an item to the to-do array, using a spread operator (...toDoItem),  
          which creates a copy of the array and makes a new one with a new item in the array. 
          The new item in the array gets a unique id and a name value, which represents the user input. 
          Once the add button has been clicked, the text field gets cleared. */}
      <button onClick={() => {
        setToDo([
          ...toDoItem,
          { id: itemId++, name: name }
        ]);
        setName("");
      }}>Add</button>
      {/* List element which includes the to-do item, along with a delete button. The button only deletes the value in the same <li> */}
      <ul>
        {/* Maps the array and goes through each entry in the array.
            For each position in the array, the react Key gets the entry's unique id, 
            along with the text value which was submitted when the entry was created.*/}
        {toDoItem.map(item => (
          <li key={item.id}>
            {item.name}
            {/* The delete button has an onclick event which points to the array.
                It filters out which item inside the array has the same id as this <li>.
                'i' represents the position in the array and 'item' represents the <li>. */}
            <button onClick={() => {
              setToDo(
                toDoItem.filter(i =>
                  i.id !== item.id
                )
              );
            }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Calls the React component called ToDo.
export default ToDo;
