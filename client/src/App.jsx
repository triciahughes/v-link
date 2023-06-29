import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { SignInForm, SignUpForm } from "./components";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import Districts from "./pages/districts/Districts";
import DistrictPage from "./pages/districts/DistrictPage";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignInForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/customizer" element={<Customizer />} />
      <Route path="/home" element={<Home />} />
      <Route path="/districts" element={<Districts />} />
      {/* need to add :id to path below */}
      <Route path="/district/" element={<DistrictPage />} />

      {/* <Route path="/canvas" element={<Canvas />} /> */}
    </Routes>
  );
}

export default App;
