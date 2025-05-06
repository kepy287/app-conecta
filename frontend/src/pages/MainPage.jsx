import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App'; // Importa tu componente principal App
 import 'src/index.css'; // Importa estilos globales (opcional)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default MainPage;