import React from "react";
import "./App.css";
import Three from "./three";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <Three />

      <button
        type="button"
        style={{ position: "absolute", top: 300, left: 300 }}
      >
        Oy
      </button>
    </div>
  );
}

export default App;
