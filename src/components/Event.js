import React from "react";

export default function Event() {
  const testClick = () => {
    alert("Good morning React Developer kimaiyo");
  };

  return (
    <div className="App">
      <button onClick={testClick}>Click Me</button>
    </div>
  );
}
