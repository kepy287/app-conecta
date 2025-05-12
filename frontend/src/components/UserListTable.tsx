/*import React from 'react';
import styles from './UserListTable.module.css';
//import { ReactComponent as DotsIcon } from '../assets/dots-vertical.svg';

const UserListTable = ({ users }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.headerRow}>
        <tr>
          <th><input type="checkbox" /></th>
          <th>ID</th>
          <th>Usuario</th>
          <th>Nombre</th>
          <th>Cargo</th>
          <th>Fecha creado</th>
          <th>Estado</th>
          <th className={styles.actionsColumn}></th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id} className={styles.dataRow}>
            <td><input type="checkbox" /></td>
            <td>{user.id}</td>
            <td>{user.usuario}</td>
            <td>{user.nombre}</td>
            <td>{user.cargo}</td>
            <td>{user.fechaCreacion}</td>
            <td><span className={`${styles.status} ${styles[user.estado]}`}>{user.estado.charAt(0).toUpperCase() + user.estado.slice(1)}</span></td>
            <td className={styles.actionsColumn}>
              <button className={styles.actionsButton}>{/*<DotsIcon />*/
              /*</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserListTable;*/

import React from 'react';

interface User {
  id: number;
  usuario: string;
  nombres: string;
  cargo: string;
  fecha_creacion: string;
  estado: 'A' | 'I';
}

interface UserListTableProps {
  users: User[];
}

const UserListTable: React.FC<UserListTableProps> = ({ users }) => {

  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    } catch (error) {
      console.error("Error al formatear la fecha:", error);
      return "Fecha Inválida";
    }
  };

  return (
    <div className="overflow-x-auto shadow-md rounded-md">
      <table className="min-w-full leading-normal">
        <thead className="bg-gray-100 text-gray-700 uppercase">
          <tr>
            <th className="px-3 py-3 text-left text-xs font-semibold">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" />
            </th>
            <th className="px-3 py-3 text-left text-xs font-semibold">ID</th>
            <th className="px-3 py-3 text-left text-xs font-semibold">Usuario</th>
            <th className="px-3 py-3 text-left text-xs font-semibold">Nombre</th>
            <th className="px-3 py-3 text-left text-xs font-semibold">Cargo</th>
            <th className="px-3 py-3 text-left text-xs font-semibold">Fecha creado</th>
            <th className="px-3 py-3 text-left text-xs font-semibold">Estado</th>
            <th className="px-3 py-3 text-left text-xs font-semibold"></th> {/* Actions */}
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {users.map((user) => (
            <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="px-3 py-3">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" />
              </td>
              <td className="px-3 py-3">{user.id}</td>
              <td className="px-3 py-3">{user.usuario}</td>
              <td className="px-3 py-3">{user.nombres}</td>
              <td className="px-3 py-3">{user.cargo}</td>
              <td className="px-3 py-3">{formatDate(user.fecha_creacion)}</td>
              <td className="px-3 py-3">
                <span className={`inline-block py-1 px-2 rounded-full text-xs font-semibold ${
                  user.estado === 'A' ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'
                }`}>
                  {user.estado.charAt(0).toUpperCase() + user.estado.slice(1)}
                </span>
              </td>
              <td className="px-3 py-3 text-right">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                  {/* <DotsIcon className="h-5 w-5" /> */}...
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListTable;