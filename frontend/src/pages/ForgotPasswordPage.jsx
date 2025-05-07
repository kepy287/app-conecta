import React from 'react';
import ForgotPasswordForm from './ForgotPasswordPage';
import './ForgotPasswordPage.module.css'; // Crea este archivo de estilos

function ForgotPasswordPage() {
  return (
    <div className="forgot-password-page-container">
      <div className="forgot-password-card">
        <h1>Recuperar contraseña</h1>
        <h2>Ingresa tu nueva contraseña</h2>
        <ForgotPasswordForm />
      </div>
    </div>
  );
}

export default ForgotPasswordPage;