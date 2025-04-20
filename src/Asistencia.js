import React from 'react';
import { useParams } from 'react-router-dom';

function Asistencia() {
  const { id } = useParams();
  const empleado = { id: id, nombre: 'Matias S' };

  const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 
    'Junio', 'Julio', 'Agosto', 'Septiembre', 
    'Octubre', 'Noviembre', 'Diciembre'
  ];

  return (
    <div>
      <h2>Asistencia de {empleado.nombre}</h2>
      <p>ID del empleado: {empleado.id}</p>
      <table>
        <tbody>
          {meses.map((mes, index) => (
            <tr key={index}>
              <td>{mes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: '20px' }}>
        <h3>Leyenda:</h3>
        <ul>
          <li><span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'red', marginRight: '5px' }}></span>Falta</li>
          <li><span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'blue', marginRight: '5px' }}></span>Asistencia</li>
          <li><span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'orange', marginRight: '5px' }}></span>Falta Justificada</li>
        </ul>
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

export default Asistencia;