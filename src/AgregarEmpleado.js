import React, { useState } from 'react';
function AgregarEmpleado() {
  const [nombre, setNombre] = useState('');
  const [cargo, setCargo] = useState('');
  const enviar = e => {
    e.preventDefault();
    alert(`Empleado ${nombre} agregado`);
  };
  return (
    <form onSubmit={enviar}>
      <h3>Agregar Empleado</h3>
      <input placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} required />
      <input placeholder="Cargo" value={cargo} onChange={e => setCargo(e.target.value)} required />
      <button type="submit">Guardar</button>
    </form>
  );
}
export default AgregarEmpleado;
