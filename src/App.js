import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Panel from './Panel';
import Home from './componentes/Home';
import Empleados from './componentes/Empleados';
import AgregarEmpleado from './Funciones/AgregarEmpleado';
import EditarEmpleado from './Funciones/EditarEmpleado';
import EliminarEmpleado from './Funciones/EliminarEmpleado';
import Asistencia from './componentes/Asistencia';
import Horario from './componentes/Horario';
import Solicitudes from './componentes/Solicitudes';
import EscribirSolicitud from './Funciones/EscribirSolicitud';
import Login from './componentes/Login';
import LeerSolicitud from './Funciones/LeerSolicitud';
import NotFound from './componentes/NotFound';

// Nota: Recordar agregar votones de "volver atras" para las paginas que lo requieran
// Nota: olvidaste el React

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  return (
    <BrowserRouter>
      {isAuthenticated && ( 
        <header>
          <h1>Turnify</h1>
          <nav>
            <Link to="/empleados">Administrar Empleados</Link> |
            <Link to="/Solicitudes">Administrar Solicitudes</Link> |
            <Link to="/" onClick={() => setIsAuthenticated(false)}>Cerrar Sesión</Link>
          </nav>
        </header>
      )}
      <main>
        <Routes>
          <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/panel" element={<Panel />} />
          <Route path="/empleados" element={<Empleados />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/empleados/nuevo" element={<AgregarEmpleado />} />
          <Route path="/empleados/editar/:id" element={<EditarEmpleado />} />
          <Route path="/empleados/eliminar/:id" element={<EliminarEmpleado />} />
          <Route path="/empleados/asistencia/:id" element={<Asistencia />} />
          <Route path="/empleados/horario/:id" element={<Horario />} />
          <Route path="/Solicitudes" element={<Solicitudes />} />
          <Route path="/solicitud/:id" element={<LeerSolicitud />} />
          <Route path="/redactar-solicitud" element={<EscribirSolicitud />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;