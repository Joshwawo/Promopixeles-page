import React from 'react'
import TFD from '../img/TFD.jpg'
import ALIANSA from '../img/ALIANSA.jpg'
import MODELO from '../img/MODELOINTEGRAL.jpg'

const EmpresaDesc = () => {
  return (
    <div className='flex container mx-auto justify-between gap-10 py-10 mb-56'>
        <div className="s">
            <img src={TFD} alt="" />
            <p>Empresa especialista en transformacion digital con enfoque de negocio</p>
        </div>
        <div className="s">
        <img src={ALIANSA} alt="" />

            <p>Aliazas estratégicas con empresas lideres en tecnologia</p>
        </div>
        
        <div className="s">
        <img src={MODELO} alt="" />

            <p>Nuestro modelo de negocio es integral</p>
        </div>
    </div>
  )
}

export default EmpresaDesc