import { Routes, Route, Link } from "react-router-dom";
//en el archivo de rutas se importan todos los componentes

import{Home} from '../Home/Home.js'
import{Habitaciones} from '../Habitaciones/Habitaciones.js'
import{Menu} from '../Menu/Menu.js'
export function Routers(){
    return (
        <div>
          <Menu/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="habitaciones" element={<Habitaciones />} />
          </Routes>
        </div>
      );
}