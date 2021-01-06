import React, { useCallback, useState } from "react";
import ItemsList from "./useCallback-items-list";

function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = {
    color: colored ? "blue" : "red",
  };

  const generateItemFromAPI = useCallback(
    () => new Array(number).fill("").map((el, index) => `Element ${index}`),
    [number]
  );

  return (
    <div>
      <h1 style={styles}>Count of elements: {number} </h1>
      <button onClick={() => setNumber((prev) => prev + 1)}>Добавить</button>
      <button onClick={() => setColored((prev) => !prev)}>color</button>
      <ItemsList getItems={generateItemFromAPI} />
    </div>
  );
}

export default App;
