import React from "react";
import "./App.css";
import Timer from "./components/Timer/Timer";

function App() {
  return (
    <div className="App">
      <Timer time={3620000} />
    </div>
  );
}

export default App;
