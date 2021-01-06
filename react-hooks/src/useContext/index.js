import React from "react";
import AlertProvider from "./AlertContext";
import Page from "./Page";

function App() {
  return (
    <AlertProvider>
      <Page />
    </AlertProvider>
  );
}

export default App;
