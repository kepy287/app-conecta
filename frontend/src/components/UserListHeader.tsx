/*import React from 'react';
import styles from './UserListHeader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faFileExport, faTh } from '@fortawesome/free-solid-svg-icons'; // Importa los iconos específicos
//import { ReactComponent as SearchIcon } from '../assets/search.svg';
//import { ReactComponent as FilterIcon } from '../assets/filter.svg';
//import { ReactComponent as ExportIcon } from '../assets/export.svg';
//import { ReactComponent as GridIcon } from '../assets/grid.svg';
//import { ReactComponent as ListIcon } from '../assets/list.svg';


const UserListHeader = () => {
 return (
 <div className={styles.container}>
 <h1 className={styles.title}>Lista de Usuarios</h1>
 <div className={styles.searchContainer}>
 <input type="text" placeholder="Buscar por nombre, cargo o ID" className={styles.searchInput} />
 <button className={styles.searchButton}>Buscar</button>
 </div>
 <div className={styles.actions}>
 <button className={styles.actionButton}>
    <FontAwesomeIcon icon={faFilter} /> Filtrar
 </button>
 <button className={styles.actionButton}>
    <FontAwesomeIcon icon={faFileExport} /> Exportar
 </button>
 <button className={styles.actionButton}>
    <FontAwesomeIcon icon={faTh} />
 </button>
 </div>
 </div>
 );
};


export default UserListHeader;
*/

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faFileExport, faTh } from '@fortawesome/free-solid-svg-icons';

const UserListHeader: React.FC = () => {
  return (
    <div className="bg-white py-4 px-6 flex items-center justify-between border-b border-gray-200">
      {/* Contenedor principal con fondo blanco, padding vertical y horizontal, flex para alinear elementos y borde inferior */}
      <h1 className="text-xl font-semibold text-gray-800">Lista de Usuarios</h1>
      {/* Título principal */}
      <div className="flex items-center space-x-4">
        {/* Contenedor para la búsqueda y las acciones */}
        <div className="relative rounded-md shadow-sm">
          <input
            type="text"
            placeholder="Buscar por nombre, cargo o ID"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            {/* Aquí podrías agregar un icono de búsqueda si lo deseas */}
          </div>
        </div>
        <div className="flex space-x-2">
          {/* Contenedor para los botones de acción */}
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <FontAwesomeIcon icon={faFilter} className="mr-2" />
            Filtrar
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <FontAwesomeIcon icon={faFileExport} className="mr-2" />
            Exportar
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <FontAwesomeIcon icon={faTh} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserListHeader;