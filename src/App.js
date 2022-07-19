import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
  }, [count]);

  console.log("Component rendering");

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={handleClick}>
        Click Me {count}
      </button>
      <DogPics handleClick = {handleClick}/>
    </div>
  );
}

export default App;
