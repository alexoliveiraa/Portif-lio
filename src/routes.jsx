import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./componets/Layout/header/Navbar";
import Home from "./pages/home/Home";
import Projetcs from "./pages/projects/Projects";
import About from "./pages/about/About";
import Footer from "./componets/Layout/footer/Footer";

export default function routes() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Portifolio"  element={<Home />} />
          <Route path="/projects" element={<Projetcs />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
