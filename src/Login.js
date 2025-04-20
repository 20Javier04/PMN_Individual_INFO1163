import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuthenticated }) {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate(); 

  const ingresar = () => {
    if (usuario.toLowerCase() === 'admin' && contraseña === '1234') {
      setMensaje('Acceso concedido');
      setIsAuthenticated(true); 
      navigate('/Home'); 
    } else {
      setMensaje('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div>
      <h1>Turnify</h1>
      <h2>Login</h2>
      <input
        placeholder="Usuario"
        value={usuario}
        onChange={e => setUsuario(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={contraseña}
        onChange={e => setContraseña(e.target.value)}
      />
      <button onClick={ingresar}>Ingresar</button>
      <p>{mensaje}</p>
    </div>
  );
}

export default Login;