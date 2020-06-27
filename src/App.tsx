import React from 'react';
import logo from './logo.svg';
import { Button, ButtonTypes } from "@shared-components/";
import { Text, TextTypes } from "@shared-components/";
import { colors } from "@shared-constants/";
import './App.css';

function App() {
  
  function onClickHandler() {
    console.log("clicked")
  }

  return (
    <div className="App">
      <header className="App-header">

        {/* Testing Components */}

        <Text content="My Text" color={colors.primaryBlue} type={TextTypes.Subtitle} />
        <Text content="My Title" type={TextTypes.Jumbotron} />

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
