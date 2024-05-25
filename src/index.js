import React from "react";
import ReactDOM from "react-dom";
//import the default component from the NameTag.js module.
import NameTag from "./NameTag";
import "./styles.css";
import { name } from "./data.js";
/*
- write a renderNameTag callback function that will accept a name and return a 
NameTag component. The NameTag component needs to have a name and key prop.
- In the App component, map over your array of names, using your renderNameTag
 callback function, and save the result to a variable called NameTagElements.
*/
const renderNameTag = (name) => <NameTag name={name.person} key={name.key} />;

const App = () => {
  const NameTagElements = name.map(renderNameTag);
  return (
    <div className="App">
      <h1>Name Tag Generator</h1>
      {NameTagElements}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
