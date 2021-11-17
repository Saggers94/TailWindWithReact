import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Home from "./pages";
import About from "./pages/about";
import Menu from "./pages/menu";
import { Routes, Route } from "react-router-dom";
import DropDown from "./components/DropDown";
import CustomThemePage from "./pages/customThemePage";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log(" i resizzedd");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <>
      <NavBar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" exact element={<Home />}>
          Home
        </Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/about" element={<About />}>
          About
        </Route>
        <Route path="/custom-theme" element={<CustomThemePage />}>
          CustomTheme
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
