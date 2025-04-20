import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Panel from './Panel';
import Home from './Home';
import Empleados from './Empleados';
import AgregarEmpleado from './AgregarEmpleado';
import EditarEmpleado from './EditarEmpleado';
import EliminarEmpleado from './EliminarEmpleado';
import Asistencia from './Asistencia';
import Horario from './Horario';
import Solicitudes from './Solicitudes';
import Login from './Login';
import NotFound from './NotFound';

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;