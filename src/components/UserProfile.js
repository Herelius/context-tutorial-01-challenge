import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

function UserProfile() {
  // access the context information with useContext hook
  const { state } = useContext(UserContext);
  return (
    <>
      {/* if status value is true, show "online", 
      otherwise "offline" */}
      <div>User is {state.status ? "online" : "offline"}</div>

      {/* when clicked, the button will call the 
      method toggleStatus */}
      <button onClick={state.toggle}>click to change user status </button>
    </>
  );
}

export default UserProfile;
