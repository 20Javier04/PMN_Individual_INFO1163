import React from 'react';
import { Link } from 'react-router-dom';

function Empleados() {
  const lista = [{id: 1, nombre: 'Matias S'}, {id: 2, nombre: 'Jorge A'}];
  return (
    <div>
      <h2>Listado de empleados</h2>
      <Link to="/empleados/nuevo">Agregar nuevo empleado</Link>
      <ul>
        {lista.map(emp => (
          <li key={emp.id}>
            {emp.nombre} - 
            <Link to={"/empleados/eliminar/" + emp.id}>Eliminar</Link> |
            <Link to={"/empleados/editar/" + emp.id}>Editar</Link> |
            <Link to={"/empleados/asistencia/" + emp.id}>Ver asistencia</Link> |
            <Link to={"/empleados/horario/" + emp.id}>Ver horarios</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Empleados;
