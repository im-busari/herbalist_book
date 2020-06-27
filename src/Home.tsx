import React from 'react';
import { Button, ButtonTypes } from "@shared-components/";
import { Text, TextTypes } from "@shared-components/";
import { colors } from "@shared-constants/";

function Home() {
  
  function onClickHandler() {
    console.log("clicked")
  }

  return (
    <div className="Home">
      <h1> Home </h1>
    </div>
  );
}

export default Home;
