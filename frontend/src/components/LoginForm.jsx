import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';
import './LoginForm.module.css'; // Importamos estilos (opcional)

function LoginForm() {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí haremos la llamada a la API de NestJS para el login
    console.log('Enviando:', { usernameOrEmail, password });
    // Después de la llamada a la API, manejaremos la respuesta (éxito o error)
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
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