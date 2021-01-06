import React, { useEffect, useState, useMemo } from "react";

function complexFunction(num) {
  console.log("compelx");
  let i = 0;
  while (i < 90000) i++;

  return num * 2;
}

function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const computed = useMemo(() => complexFunction(number), [number]);
  const styles = useMemo(
    () => ({
      color: colored ? "blue" : "red",
    }),
    [colored]
  );

  useEffect(() => {
    console.log("styles changed");
  }, [styles]);

  return (
    <div>
      <h1 style={styles}>Counted value: {computed}</h1>

      <button onClick={() => setNumber((prev) => prev + 1)}>Добавить</button>
      <button onClick={() => setNumber((prev) => prev - 1)}>Убавить</button>
      <button onClick={() => setColored((prev) => !prev)}>color</button>
    </div>
  );
}

export default App;
