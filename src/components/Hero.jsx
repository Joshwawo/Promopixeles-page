import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

import bgImg from "../img/LogoPromopixeles.png";
// impo

const Hero = () => {
  return (
    <div name="home" className=" bg-white flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div>
          <img className=" w-40 py-5 pl-10  md:w-80" src={bgImg} alt="/" />
        </div>
        <div className="flex flex-col justify-end items-start sm:items-start sm:bg-red-500 md:items-end w-full px-2 py-8">
          <p className="font-bold text-2xl text-center">¿Quienes somos?</p>
          {/* <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Cloud Management
          </h1> */}
          <p className=" text-right">
            Nuestro enfoque es crear, optimizar y transformar modelos y procesos
            de negocio, cultura y experiencias de clientes para satisfacer los
            cambios de mercado
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default Hero;
