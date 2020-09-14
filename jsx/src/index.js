//Import react and react Dom
import React from 'react';
import ReactDom from 'react-dom';

//Create a react component
const App = () => {
    const buttonText = { text: 'Click me' };
    const style = { backgroundColor: 'green', color: 'wheat' };
    return <div>
    <label for="name">Enter name:</label>
    <input type="text" id="name" />
    <button style={style}>{buttonText.text}</button>
  </div>;
}
// Take the react component and show it on the screen

ReactDom.render(<App />, document.querySelector('#root'))