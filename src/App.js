import React from "react";
import Greet from "./components/Greet";

import "./App.css";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Title from "./components/Title";
import MyName from "./components/MyName";
function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <Title name="Frontend Developer" />
      <Title name="Mobile Developer" />
      <Title name="Solodity Developer" />
      <MyName/>
    </div>
  );
}

export default App;
