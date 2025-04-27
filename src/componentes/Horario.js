import React from 'react';
import { useParams } from 'react-router-dom';

function Horario() {
  const { id } = useParams();

  const empleado = { id: id, nombre: 'Matias S' };

  const horas = [
    '8 AM', '9 AM', '10 AM', '11 AM', '12 PM',
    '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'
  ];
  
  const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  return (
    <div>
      <h2>Horario de {empleado.nombre}</h2>
      <p>ID del empleado: {empleado.id}</p>
      <table>
        <thead>
          <tr>
            <th>Hora</th>
            {dias.map((dia, index) => (
              <th key={index}>{dia}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {horas.map((hora, index) => (
            <tr key={index}>
              <td>{hora}</td>
              {dias.map((dia, index) => (
                <td key={index}>vacio</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
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

export default Horario;