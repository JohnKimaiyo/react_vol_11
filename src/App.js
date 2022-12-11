import React from "react";
import Greet from "./components/Greet";

import "./App.css";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Title from "./components/Title";
import MyName from "./components/MyName";
import Form from "./components/Form";
import Mycount from "./components/Mycount";
import Users from "./components/Users";
import Event from "./components/Event";
function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <Title name="Frontend Developer" />
      <Title name="Mobile Developer" />
      <Title name="Solodity Developer" />
      <MyName />
      <Form />
      <Mycount/>
      <Users/>
      <Event/>
    </div>
  );
}

export default App;
