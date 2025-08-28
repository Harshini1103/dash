import React from "react";
import Navbar from "./components/Navbar";
import  Home  from "./components/Home";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App(){
  return(<>

     <BrowserRouter>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  </>)
}
export default App
