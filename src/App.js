import React, { useState } from "react";
import "./App.css";
import UserProfile from "./components/UserProfile";
import UserContext from "./contexts/UserContext";

function App() {
  /* create method toggleStatus that will change 
  the status value from true to false. 
  keep in mind that this method has to be created 
  before our state! */
  const [isOnline, setIsOnline] = useState(false);
  const toggleStatus = () => {
    return setIsOnline(!isOnline);
  };

  /* create 2 properties for state: status (boolean) 
  and toggle (toggleStatus method previously created) */
  const state = {
    status: isOnline,
    toggle: toggleStatus
  };

  return (
    // pass the whole state to the provider as a value
    <UserContext.Provider value={{ state: state }}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
