import React from "react";
import log_ck from "../img/PYS/logo-ck.webp";
import capa10 from "../img/PYS/Capa_10.webp";
import capa10_r from "../img/PYS/Capa-10-redimencionada.png";
import capa10_2 from "../img/PYS/Capa-10.webp";
import capa11 from "../img/PYS/Capa_11.webp";
import capa13 from "../img/PYS/Capa_13.webp";
import capa14 from "../img/PYS/Capa_14.webp";

const PYS_2 = () => {
  return (
    <div className="h-1/2 bg-green-400 bg-bg mb-5">
      <div className="container-95 py-16 ">
        <p className="text-white text-xl md:text-2xl mb-5 md:mb-14">
          Productos de Software
        </p>
        <div className="items md:flex ">
          <div className="item1 md:w-1/2 ">
            <img
              src={log_ck}
              alt="logo Codikash"
              className="w-[60%] md:w-[80%]"
            />
            <p className="text-white text-justify md:w-[90%] xl:w-[80%] xl:text-xl  mt-5 ">
              Aplicacion que ofrece una pltaforma donde podrás navegar y{" "}
            </p>
            <p className="text-white text-justify md:w-[90%] xl:w-[80%] xl:text-xl   ">conocer tus puntos obtenidos durante tus operaciones con las marcas.</p>
            <p className="text-white text-justify md:w-[90%] xl:w-[80%] xl:text-xl   ">una aplicacion 100% segura que permite sincronicar tu código QR</p>
            <p className="text-white text-justify md:w-[90%] xl:w-[80%] xl:text-xl   ">personalizado.</p>
          </div>
          <div className="item2">
            <div className="container-img flex">
              <div className="contenido-img-1">
                <img src={capa10_r} alt="telefono " className="w-full   " />
              </div>
              <div className="contenido-img-2 ">
                <img
                  src={capa11}
                  alt="telefono "
                  className=" relative top-32 right-12  lg:right-24"
                />
              </div>
            </div>
            <div className="flex gap-5  flex-row-reverse ">
              <img src={capa13} alt="ios" className="w-[20%] " />
              <img src={capa14} alt="android" className="w-[20%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PYS_2;
