import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Nav from "../../components/nav/nav";
import InicioArduino from "../../components/practicas/arduino/inicioArduino";
import Practica1 from "../../components/practicas/arduino/practica1";
import Practica2 from "../../components/practicas/arduino/practica2";
import BtnMenu from "../../components/btnMenu";
import Practica3 from "../../components/practicas/arduino/practica3";


function ArduinoB() {
    const [estado, setEstado] = useState(0);
    function state(msj){
        setEstado(msj)
    }
    return (
        <>
            <Header />
            <Nav />
            <div className="bg-black">
                <div className="p-5 sm:p-10">
                    <div className="bg-white p-5 rounded-lg flex flex-col md:flex-row w-full">
                        <div className="w-full md:w-4/5">
                        <h2 className="text-2xl font-semibold text-center font-mono pb-4">Aprendiendo a programar con Arduino</h2>
                        {estado == 0 && <InicioArduino />}
                        {estado == 1 && <Practica1 />}
                        {estado == 2 && <Practica2 />}
                        {estado == 3 && <Practica3 />}                            
                        </div>
                        <div className="w-full md:w-1/5 mt-6 md:mt-0">
                            <div className="bg-gray-100 p-4 rounded-lg shadow-md sticky top-20">
                                <h3 className="font-semibold px-2">Menú</h3>
                                <ul>
                                    <li><BtnMenu name="Inicio" pag={0} state={state}/></li>
                                    <li><BtnMenu name="1.-Configuración y el primer “hola mundo”" pag={1} state={state}/></li>
                                    <li><BtnMenu name="2.-Variables" pag={2} state={state}/></li>
                                    <li><BtnMenu name="3.-Estructuras con operadores" pag={3} state={state}/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ArduinoB;
