import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { SignInForm, SignUpForm } from "./components";
import Canvas from "./canvas";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignInForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/canvas" element={<Canvas />} />
    </Routes>
  );
}

export default App;
