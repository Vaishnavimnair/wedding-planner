import Navigation from "./components/Navigation/Navigation";
import React from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}
