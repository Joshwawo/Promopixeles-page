import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductosYServicios from "./pages/ProductosYServicios";
import Contacto from "./pages/Contacto";



function App() {

  return (
    <div className="">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="productos&servicios" element={<ProductosYServicios/>}/>
        <Route path="contacto" element={<Contacto/>}/>
      </Routes>
      
      

      </BrowserRouter>

      
    </div>
  );
}

export default App;
