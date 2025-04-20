import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EliminarEmpleado() {
    const { id } = useParams();
    const navigate = useNavigate();
    // Simulación de una lista de empleados
    const listaEmpleados = [{id: 1, nombre: 'Matias S'}, {id: 2, nombre: 'Jorge A'}];

    const empleado = listaEmpleados.find(emp => emp.id === parseInt(id));

    const handleEliminar = () => {
        alert(`Empleado ${empleado.nombre} eliminado`);
        navigate('/empleados');
    };

    return (
        <div>
            <h2>Eliminar Empleado</h2>
            {empleado ? (
                <div>
                    <p>¿Estás seguro de que deseas eliminar al empleado: {empleado.nombre}?</p>
                    <button onClick={handleEliminar}>Eliminar</button>
                    <button onClick={() => navigate('/empleados')}>Cancelar</button>
                </div>
            ) : (
                <p>Empleado no encontrado</p>
            )}
        </div>
    );
}

export default EliminarEmpleado;