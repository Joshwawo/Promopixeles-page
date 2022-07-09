import React from "react";
import Body from "../components/Body";
import EmpresaDesc from "../components/EmpresaDesc";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import QuienesSomos from "../components/QuienesSomos";
import img1 from "../img/1.jpg";
import img5 from "../img/5.jpg";
import img2 from "../img/LogoPromopixeles.png";
import codikash from "../img/codikash.webp";

const Homepage = () => {
  return (
    <div>
      <div className="  bg-black pt-40 ">
        <div className="cosa relative ">
          <img src={codikash} className="m-auto " alt="Imagen de prueba 1" />
          <div className="flex flex-col-reverse items-center pb-10">
            <button className="text-white border  py-2 px-2 w-20 hover:bg-white hover:text-black absolute top-28">
              Ver
            </button>
            <p className="text-white py-5 absolute top-11 font-black text-2xl">Kodikash</p>
          </div>
        </div>
      </div>

      <Body />
      <QuienesSomos />
      <EmpresaDesc />
      <Footer />
    </div>
  );
};

export default Homepage;
