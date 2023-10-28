import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./componets/Layout/header/Navbar";
import Home from "./pages/home/Home";
import Projetcs from "./pages/projects/Projects";
import About from "./pages/about/About";
import Footer from "./componets/Layout/footer/Footer";

export default function routes() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Portifolio"  element={<Home />} />
          <Route path="/projects" element={<Projetcs />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
