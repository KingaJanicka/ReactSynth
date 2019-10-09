import React from "react";
import Oscillator from "./Oscillator";
import Synth from "./Synth";
import "./App.css";
const HeaderStyle = { color: "#0fffff", textDecoration: "underline" };
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1 style={HeaderStyle}>React Synth</h1>
        <Synth>
          <Oscillator />
        </Synth>
      </header>
    </div>
  );
}

export default App;
