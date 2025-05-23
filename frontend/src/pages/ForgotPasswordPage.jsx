import React from 'react';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import './ForgotPasswordPage.module.css'; // Crea este archivo de estilos

function ForgotPasswordPage() {
  console.log('ForgotPasswordPage renderizado!');
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