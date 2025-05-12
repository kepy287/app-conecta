import React from 'react';
import UserListHeader from '../components/UserListHeader';
import UserListTable from '../components/UserListTable';


const UserList = () => {
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


export default UserList;