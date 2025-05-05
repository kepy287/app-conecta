import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';
import styles from './LoginForm.module.css';
import axios from 'axios'; // Importamos axios

function LoginForm() {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Estado para manejar errores
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
      window.location.href = '/dashboard'; // Reemplaza '/dashboard' con la ruta de tu página principal

    } catch (error) {
      console.error('Error de inicio de sesión:', error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data.message || 'Error al iniciar sesión' : error.message || 'Error al iniciar sesión');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className={`bg-white rounded-lg shadow-md p-8 w-full max-w-md relative ${styles.loginContainer}`}>
      <div className={`mb-6 ${styles.welcomeText}`}>
          <p className="text-sm text-gray-600">Bienvenid@ a <span className="text-blue-600 font-medium">Conecta Calidad</span></p>
          <h1 className="text-2xl font-bold mt-1">Inicia Sesión v2</h1>
        </div>
        
        <div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Ingresa tu nombre de usuario o correo
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nombre de usuario o correo"
            />
          </div>
          
          <div className="mb-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Ingresa tu Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Contraseña"
            />
          </div>
          
          <div className="flex justify-end mb-6">
            <button 
              type="button" 
              className={`text-sm text-blue-600 hover:text-blue-800 ${styles.forgotPassword}`}
            >
              Olvidé mi contraseña
            </button>
          </div>
          
          <button
            onClick={handleSubmit}
            className={`w-full bg-blue-800 hover:bg-blue-900 text-white py-2 rounded-md font-medium ${styles.loginButton}`}
          >
            Ingresar
          </button>
        </div>
        
        <div className={`absolute bottom-0 left-0 right-0 ${styles.orangeStripe}`} />
      </div>
    </div>
  );
}

export default LoginForm;