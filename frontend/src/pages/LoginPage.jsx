import React from 'react';
import LoginForm from '../components/LoginForm';
import './LoginPage.module.css'; // Importamos los estilos para LoginPage

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