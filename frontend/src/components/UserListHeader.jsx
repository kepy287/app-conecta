import React from 'react';
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