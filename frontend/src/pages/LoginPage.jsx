import React from 'react';/// importamos React
import LoginForm from '../components/LoginForm';
import './LoginPage.module.css'; // Importamos el archivo de estilos (opcional)

function LoginPage() {
  return (
    <div className="login-page-container">
      <div className="login-card">
        <h1>Bienvenid@ a Conecta Calidad</h1>
        <h2>Inicia Sesión</h2>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;