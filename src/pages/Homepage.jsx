import React from "react";
import Body from "../components/Body";
import EmpresaDesc from "../components/EmpresaDesc";
import Footer from "../components/Footer";
import QuienesSomos from "../components/QuienesSomos";
import codikash from "../img/codikash.webp";
import Carrousel from "../components/Carrusel";

const Homepage = () => {
  return (
    <div>
      <Carrousel/> 
      <Body />
      <QuienesSomos />
      <EmpresaDesc />
      <Footer />
      
    </div>
  );
};

export default Homepage;
