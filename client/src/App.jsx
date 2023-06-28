import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { SignInForm, SignUpForm } from "./components";
import Customizer from "./pages/customizer";
import Canvas from "./canvas";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignInForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/customizer" element={<Customizer />} />
      {/* <Route path="/canvas" element={<Canvas />} /> */}
    </Routes>
  );
}

export default App;
