import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { SignInForm, SignUpForm } from "./components";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignInForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route
        path="/customizer"
        element={<Customizer />}
        style={{ width: "100%", height: "100vh" }}
      />
      <Route path="/home" element={<Home />} />
      {/* <Route path="/canvas" element={<Canvas />} /> */}
    </Routes>
  );
}

export default App;
