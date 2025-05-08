import React from 'react';
import styles from './TopNavigation.module.css';


const TopNavigation = () => {
 return (
        <div className={styles.topNavigation}>
        <div className={styles.tabs}>
        <div className={`${styles.tab} active`}>Inicio</div>        
        <div className={styles.tab}>Registro de Usuarios</div>
        <div className={styles.tab}>Servicios</div>
        <div className={styles.tab}>Roles y permisos</div>
        <div className={styles.tab}>Organigrama</div> 
        </div>       
        <div className={styles.notification}>🔔</div> {/* Icono de notificación */}
        </div>
       );
};


export default TopNavigation;