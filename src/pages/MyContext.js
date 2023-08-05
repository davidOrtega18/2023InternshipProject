// MyContext.js
import React, { createContext, useState, useContext } from "react";

// Create the Context
const MyContext = createContext();

// Create a custom hook to access the context's value
export const useMyContext = () => useContext(MyContext);

// Create the Provider component
export const MyContextProvider = ({ children }) => {
  // State or data that you want to share
  const [name, setName] = useState("");
  // const [decisionMade, setDecisionMade] = useState([]);
  const [counter, setCounter] = useState(0);

  return (
    <MyContext.Provider value={{ name, setName, counter, setCounter }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
