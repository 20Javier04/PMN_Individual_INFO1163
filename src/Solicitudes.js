import React from 'react';
import { Link } from 'react-router-dom';

function Solicitudes() {
  const solicitudes = [
    { id: 1, solicitante: 'Matias S', hora: '10:00 AM' },
    { id: 2, solicitante: 'Jorge A', hora: '11:30 AM' },
  ];

  return (
    <div>
      <h2>Solicitudes</h2>
      <table>
        <thead>
          <tr>
            <th>Solicitante</th>
            <th>Hora</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {solicitudes.map(solicitud => (
            <tr key={solicitud.id}>
              <td>{solicitud.solicitante}</td>
              <td>{solicitud.hora}</td>
              <td>
                <Link to={`/solicitud/${solicitud.id}`}>
                  <button>Leer Solicitud</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: '20px' }}>
        <Link to="/redactar-solicitud">
          <button>Redactar Solicitud</button>
        </Link>
      </div>
      <style>{`
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          border: 1px solid black;
          padding: 8px;
          text-align: center;
        }
        th {
          background-color: #f2f2f2;
        }
      `}</style>
    </div>
  );
}

export default Solicitudes;