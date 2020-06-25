import React from 'react';
import logo from './logo.svg';
import { Button, ButtonTypes } from "@shared-components/";
import './App.css';

function App() {
  
  function onClickHandler() {
    console.log("clicked")
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Button content="Menu" type={ButtonTypes.Primary} onClick={ () => onClickHandler()} />
        <br></br>
        <Button content="Proceed to Checkout" type={ButtonTypes.Secondary} onClick={ () => onClickHandler()} />
        <br></br>
        <Button content="Proceed to Checkout" type={ButtonTypes.Custom} onClick={ () => onClickHandler()} />
      </header>
    </div>
  );
}

export default App;
