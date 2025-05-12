import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';
import './LoginForm.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Link } from 'react-router-dom';

function LoginForm() {  
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:3000/auth/login', { // Reemplaza con tu URL
        usuario: usernameOrEmail,
        pass: password,
      });

      const token = response.data.access_token;
      localStorage.setItem('authToken', token);

      // Redirige a la página principal usando navigate
      navigate('/users'); // Reemplaza '/main' con la ruta de tu ventana principal

    } catch (error) {
      console.error('Error de inicio de sesión:', error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data.message || 'Error al iniciar sesión' : error.message || 'Error al iniciar sesión');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      {error && <div className="error-message">{error}</div>}
      <InputField
        label="Ingresa tu nombre de usuario o correo"
        type="text"
        placeholder="Nombre de usuario o correo"
        value={usernameOrEmail}
        onChange={(e) => setUsernameOrEmail(e.target.value)}
      />
      <InputField
        label="Ingresa tu Contraseña"
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="forgot-password">
        <Link to="/forgot-password">Olvidé mi contraseña</Link>
      </div>
      <Button type="submit">Ingresar</Button>
    </form>
  );
}

export default LoginForm;