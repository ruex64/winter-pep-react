import React from "react";

const Greeting = ({ isLoggedIn = false, userName = "Guest" }) => {
  return <h1>{isLoggedIn ? `Welcome back, ${userName}!` : "Welcome, Guest!"}</h1>;
};

export default Greeting;
