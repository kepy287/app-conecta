import React, { useState } from 'react';
import UserListHeader from '../components/UserListHeader';
import UserListTable from '../components/UserListTable';
import { User } from '../types/user'; // Importa la interfaz User (deberás crear este archivo)
import axios from 'axios'; // Importa axios para las peticiones HTTP

const UserList = () => {
   const [users, setUsers] = useState<User[]>([]);
   const [loading, setLoading] = useState<Boolean>(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/users'); // Reemplaza con la URL de tu API
          setUsers(response.data);
          setLoading(false);
        } catch (error: any) {
          setError('Error al cargar los usuarios');
          setLoading(false);
          console.error('Error fetching users:', error.message);
        }
      };
  
      fetchUsers();
    }, []); // El array vacío asegura que esto se ejecute solo una vez al montar el componente
  
    if (loading) {
      return <div>Cargando usuarios...</div>; // Puedes personalizar el indicador de carga
    }
  
    if (error) {
      return <div>{error}</div>; // Muestra un mensaje de error si la carga falla
    }
  
    return (
      <div>
        <UserListHeader />
        <UserListTable users={users} />
      </div>
    );
  };
  
  export default UserList;

/*const UserList = () => {
 const users = [
 { id: 4321, usuario: 'm.mendez', nombre: 'Mariela Mendez', cargo: 'Supervisor', fechaCreacion: '10/05/2025', estado: 'activo' },
 { id: 4033, usuario: 'kperez', nombre: 'Kevin Perez Gomez', cargo: 'Analista de Calidad', fechaCreacion: '10/05/2025', estado: 'inactivo' },
 // ... más usuarios
 ];


 return (
 <div>
    <UserListHeader />
    <UserListTable users={users} />
 </div>
 );
};


export default UserList;*/