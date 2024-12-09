import React from "react";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import "./styles.css";

const App = () => {
  return (
    <div>
      <SignUpForm />
      <LoginForm />
    </div>
  );
};

export default App;
