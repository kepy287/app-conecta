import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';
import './LoginForm.module.css';
import axios from 'axios'; // Importamos axios

function LoginForm() {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Estado para manejar errores

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Limpiamos cualquier error previo

    try {
      const response = await axios.post('http://localhost:3000/auth/login', { // Reemplaza con la URL de tu API
        usuario: usernameOrEmail, // Ajusta los nombres de los campos según tu API
        pass: password,          // Ajusta los nombres de los campos según tu API
      });

      // Si la autenticación es exitosa, la API debería devolver un token
      const token = response.data.access_token;
      console.log('Token recibido:', token);

      // Aquí guardarías el token (por ejemplo, en localStorage)
      localStorage.setItem('authToken', token);

      // Y aquí redirigirías al usuario a la página principal
      //window.location.href = '/dashboard'; // Reemplaza '/dashboard' con la ruta de tu página principal

    } catch (error) {
      console.error('Error de inicio de sesión:', error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data.message || 'Error al iniciar sesión' : error.message || 'Error al iniciar sesión');
    }
  };

  return (
    <form method = "post" onSubmit={handleSubmit} className="login-form">
      {error && <div className="error-message">{error}</div>} {/* Mostrar mensaje de error si existe */}
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
        <a href="/forgot-password">Olvidé mi contraseña</a>
      </div>
      <Button type="submit">Ingresar</Button>
    </form>
  );
}

export default LoginForm;