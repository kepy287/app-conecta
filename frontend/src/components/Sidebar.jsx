import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const now = new Date();
  const day = new Intl.DateTimeFormat('es-ES', { weekday: 'long' }).format(now).toUpperCase();
  const date = now.toLocaleDateString('es-ES');

  return (
    <div className={styles.sidebar}>
      <div className={styles.date}>
        {day} <br /> {date}
      
      <div className={styles.navItem.active}>Panel de control </div>
      <div className={styles.navItem}>Home</div>
      <div className={styles.navItem}>Evaluación</div>
      <div className={styles.navItem}>Asignación</div>
      <div className={styles.navItem}>Verificación</div>
      <div className={styles.navItem}>Matriz de servicios</div>
      <div className={styles.navItem}>((())) Close the loop</div>
      <div className={styles.navItem}>N Usuarios</div>
      </div>
      <div className={styles.logo}>Logo</div> {/* Aquí iría tu logo */}
    </div>
    
  );
};

export default Sidebar;