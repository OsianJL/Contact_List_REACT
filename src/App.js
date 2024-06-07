import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <input onChange={handleChange} value={text} />
        </p>
        <p style={{ color: "white" }}>texto: {text}</p>
      </header>
    </div>
  );
}

export default App;
