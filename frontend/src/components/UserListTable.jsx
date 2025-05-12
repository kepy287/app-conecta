import React from 'react';
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
              <button className={styles.actionsButton}>{/*<DotsIcon />*/}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserListTable;