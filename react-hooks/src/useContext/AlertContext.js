import React, { useContext, createContext, useState } from "react";

const AlertContext = createContext(null);
export const useAlertContext = () => useContext(AlertContext);

export default function AlertProvider(props) {
  const [visible, setVisible] = useState(false);
  const toggleAlert = () => setVisible((prev) => !prev);

  return (
    <AlertContext.Provider
      value={{
        value: visible,
        toggle: toggleAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
}
