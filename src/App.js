import React from "react";
import "./App.css";
import Cards from "./components/Home/Cards";
import Home from "./components/Home/Home";
import Navbars from "./components/Navbar/Navbars";



function App() {
  return (
    <>
      <Navbars/>
      <Home/>
      <Cards/>
    </>
  );
}

export default App;
