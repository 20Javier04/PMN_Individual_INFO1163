import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const LeerSolicitud = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const solicitudes = [
        { id: 1, solicitante: 'Matias S', asunto: 'Cambio de turno', texto: 'Solicito cambiar mi turno del lunes.' },
        { id: 2, solicitante: 'Jorge A', asunto: 'Permiso', texto: 'Solicito un permiso para el martes.' },
    ];

    const solicitud = solicitudes.find(s => s.id === parseInt(id));

    const handleAceptar = () => {
        alert(`Solicitud de ${solicitud.solicitante} aceptada.`);
        navigate('/Solicitudes');
    };

    const handleDenegar = () => {
        alert(`Solicitud de ${solicitud.solicitante} denegada.`);
        navigate('/Solicitudes'); 
    };

    if (!solicitud) return navigate('./NotFound');

    return (
        <div>
            <h2>Leer Solicitud</h2>
            <p><strong>Remitente:</strong> {solicitud.solicitante}</p>
            <p><strong>Asunto:</strong> {solicitud.asunto}</p>
            <p><strong>Texto:</strong> {solicitud.texto}</p>
            <button onClick={handleAceptar}>Aceptar</button>
            <button onClick={handleDenegar}>Denegar</button>
        </div>
    );
};

export default LeerSolicitud;
