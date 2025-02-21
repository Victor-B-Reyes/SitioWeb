import React from "react";
import { Routes, Route} from "react-router-dom";

import Home from "../pages/Home";
import Error from "../pages/Error";
import Programacion from "../pages/Programacion";
import ArduinoB from "../pages/seccion/ArduinoB";

function Rutas (){
  return(
    <Routes>
      <Route  path="/" element={<Home />}></Route>
      <Route  path="/Programacion" element={<Programacion />}></Route>
      <Route  path="/Programacion/Arduino" element={<ArduinoB />}></Route>
      <Route  path="*" element={<Error />}></Route>

    </Routes>
  )
}

export default Rutas;