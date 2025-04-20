import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditarEmpleado() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [listaEmpleados] = useState([
        {id: 1, nombre: 'Matias S'},
        {id: 2, nombre: 'Jorge A'}
    ]);
    
    const empleado = listaEmpleados.find(emp => emp.id === parseInt(id));

    const [nombre, setNombre] = useState(empleado ? empleado.nombre : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Empleado ${empleado.nombre} cambiado a ${nombre}`);
        navigate('/empleados');
    };

    return (
        <div>
            <h2>Editar Empleado</h2>
            {empleado ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nombre:</label>
                        <input 
                            type="text" 
                            value={nombre} 
                            onChange={(e) => setNombre(e.target.value)} 
                        />
                    </div>
                    <button type="submit">Guardar cambios</button>
                    <button type="button" onClick={() => navigate('/empleados')}>Cancelar</button>
                </form>
            ) : (
                <p>Empleado no encontrado</p>
            )}
        </div>
    );
}

export default EditarEmpleado;