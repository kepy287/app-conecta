import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage'; // Importa tu componente principal
import ForgotPasswordPage from './pages/ForgotPasswordPage'; // Importa el nuevo componente


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} /> {/* Ruta para la página de inicio de sesión */}
        <Route path="/main" element={<MainPage />} /> {/* Ruta para la página principal */}
        <Route path="/forgot-password" element={<ForgotPasswordPage />} /> {/* Nueva ruta */}
        {/* Puedes agregar más rutas aquí */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;