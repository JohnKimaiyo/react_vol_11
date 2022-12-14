import React from "react";

import "./App.css";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BookList />
        <Navbar />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
