import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import img from "../img/promopixeles.webp";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <NavLink to="/">
          <img src={img} alt="Logo Promopixeles" />
        </NavLink>
        <div className="flex items-center font-bold">
          <ul className="hidden md:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "rojitoNav" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="productos&servicios"
                className={({ isActive }) => (isActive ? "rojitoNav" : "")}
              >
                Productos y Servicios
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contacto"
                className={({ isActive }) => (isActive ? "rojitoNav" : "")}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul
        className={!nav ? "hidden" : "absolute bg-white w-full px-8 md:hidden"}
      >
         <li className="border-b-2 border-white w-full">
        <NavLink
          to="/"
          onClick={handleClose}
          className={({ isActive }) => (isActive ? "text-red-400" : "")}
        >
         Home
        </NavLink>
        </li>
        <li className="border-b-2 border-white w-full">
        <NavLink
          to="productos&servicios"
          onClick={handleClose}
          className={({ isActive }) => (isActive ? "text-red-400" : "")}
        >
          
            Productos y Servicios
          
        </NavLink>
        </li>
        <li className="border-b-2 border-white w-full">
        <NavLink
          to="contacto"
          onClick={handleClose}
          className={({ isActive }) => (isActive ? "text-red-400" : "")}
        >
          Contacto
        </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
