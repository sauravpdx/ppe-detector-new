import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import HowItWorks from "../pages/HowItWorks";

function AppRoutes() {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/howitworks" element={<HowItWorks />} />
    </Routes>
    // </BrowserRouter>
  );
}

export default AppRoutes;
