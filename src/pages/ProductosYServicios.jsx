import Y from "../components/Y";
import log_ck from "../img/PYS/logo-ck.webp";
import capa10 from "../img/PYS/Capa_10.webp";
import capa11 from "../img/PYS/Capa_11.webp";
import capa13 from "../img/PYS/Capa_13.webp";
import capa14 from "../img/PYS/Capa_14.webp";


const ProductosYServicios = () => {
  return (
    <>
      <Y />
      <div className="h-1/2 bg-green-400 bg-bg">
        <div className="container-95 py-16 ">
          <p className="text-white text-xl md:text-2xl mb-5 md:mb-14">Productos de Software</p>
          <div className="items md:flex ">
            <div className="item1 md:w-1/2 ">
              <img
                src={log_ck}
                alt="logo Codikash"
                className="w-[60%] md:w-[50%]"
              />
              
              <p className="text-white text-justify  mx-auto mt-5 ">
                Aplicacion que ofrece una pltaforma donde podráss navegar y
                conocer tus puntos obtenidos durante tus operaciones con las
                marcas. una aplicacion 100% segura que permite sincronicar tu
                código QR personalizado.
              </p>
              
           
            </div>
            <div className="item2 md:w-1/2 ">
              <p className="text-white">Hola soy el item 2 </p>
              <div className="container-img flex">
              <img src={capa10 }  alt="telefono " className="w-[50%]" />
              <img src={capa11 } alt="telefono " className="w-[50%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductosYServicios;
