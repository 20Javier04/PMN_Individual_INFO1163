import React from 'react';
import { Link } from 'react-router-dom';

const Solicitudes = () => {
    const solicitudes = [
        { id: 1, solicitante: 'Matias S', asunto: 'Cambio de turno', hora: '10:00 AM' },
        { id: 2, solicitante: 'Jorge A', asunto: 'Permiso', hora: '11:30 AM' },
    ];

    return (
        <div className="solicitudes-container">
            <h2>Solicitudes</h2>
            <table className="solicitudes-table">
                <thead>
                    <tr>
                        <th>Remitente</th>
                        <th>Asunto</th>
                        <th>Hora</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {solicitudes.map(solicitud => (
                        <tr key={solicitud.id}>
                            <td>{solicitud.solicitante}</td>
                            <td>{solicitud.asunto}</td>
                            <td>{solicitud.hora}</td>
                            <td>
                                <Link to={`/solicitud/${solicitud.id}`} className="read-button">
                                    Leer Solicitud
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/redactar-solicitud" className="btn-redactar">Redactar Solicitud</Link>
        </div>
    );
};

export default Solicitudes;