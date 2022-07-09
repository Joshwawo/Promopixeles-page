import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

import bgImg from "../img/LogoPromopixeles.png";

const Body = () => {
  return (
    <div className="bg-red-500 container">
      <div name="home" className=" bg-white flex flex-col justify-between">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          <div>
            <img className=" m-auto w-40  md:w-80 my-10" src={bgImg} alt="/" />
          </div>
          <div className="flex flex-col justify-end    md:bg-white sm:items-start  md:items-end w-full px-2 py-8">
            <p className="font-bold text-2xl text-center py-5">
              ¿Quienes somos?
            </p>

            <p className=" text-center md:text-right">
              Nuestro enfoque es crear, optimizar y transformar modelos y
              procesos de negocio, cultura y experiencias de clientes para
              satisfacer los cambios de mercado
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
