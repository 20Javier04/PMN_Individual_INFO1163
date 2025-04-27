import React, { useState } from 'react';

const EscribirSolicitud = () => {
    const [asunto, setAsunto] = useState('');
    const [empleado, setEmpleado] = useState('');
    const [textoSolicitud, setTextoSolicitud] = useState('');

    const empleados = [
        { id: 1, nombre: 'Matias S' },
        { id: 2, nombre: 'Jorge A' },
    ];

    const manejarEnvio = (e) => {
        e.preventDefault();
        alert(`Solicitud enviada a ${empleado}.\nAsunto: ${asunto}\nTexto de Solicitud: ${textoSolicitud}`);
    };

    return (
        <div className="escribir-solicitud-container">
            <h2>Redactar Solicitud</h2>
            <form onSubmit={manejarEnvio}>
                <div>
                    <label>
                        Asunto:
                        <input
                            type="text"
                            value={asunto}
                            onChange={(e) => setAsunto(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Elegir Empleado:
                        <select
                            value={empleado}
                            onChange={(e) => setEmpleado(e.target.value)}
                            required
                        >
                            <option value="">Seleccionar...</option>
                            {empleados.map((emp) => (
                                <option key={emp.id} value={emp.nombre}>
                                    {emp.nombre}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Redactar Solicitud:
                        <textarea
                            value={textoSolicitud}
                            onChange={(e) => setTextoSolicitud(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Enviar Solicitud</button>
            </form>
        </div>
    );
};

export default EscribirSolicitud;