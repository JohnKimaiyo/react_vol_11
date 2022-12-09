import React from "react";

import { useState } from "react";

function MyName() {
  const [name, setName] = useState("john");
  const changeName = () => {
    setName("Kimaiyo");
  };
  return (
    <div>
      <p>My Name {name}</p>
      <button onClick={changeName}>Click me</button>
    </div>
  );
}

export default MyName;
