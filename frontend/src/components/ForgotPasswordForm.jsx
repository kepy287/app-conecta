import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';
import './ForgotPasswordForm.module.css'; // Crea este archivo de estilos

function ForgotPasswordForm() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    // Aquí iría la lógica para enviar la nueva contraseña al backend
    console.log('Enviando nueva contraseña:', { newPassword, confirmPassword });
  };

  return (
    <form onSubmit={handleSubmit} className="forgot-password-form">
      {error && <div className="error-message">{error}</div>}
      <InputField
        label="Ingresa tu contraseña"
        type="password"
        placeholder="Contraseña"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <InputField
        label="Confirma tu contraseña"
        type="password"
        placeholder="Contraseña"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button type="submit">Confirmar</Button>
    </form>
  );
}

export default ForgotPasswordForm;