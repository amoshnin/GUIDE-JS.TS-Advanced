import React from "react";
import { useAlertContext } from "./AlertContext";

function App() {
  const { value, toggle } = useAlertContext();

  return (
    <>
      <h1>{JSON.stringify(value)}</h1>
      <button onClick={() => toggle()}>toggle</button>
    </>
  );
}

export default App;
