import React from 'react';
import Sidebar from './Sidebar';
import TopNavigation from './TopNavigation';
import styles from './Layout.module.css';


const Layout = ({ children }) => {
 return (
 <div className={styles.container}>
 
 <div className={styles.mainContent}>
 
 {children} {/* Aquí se renderizará el contenido de las páginas */}
 </div>
    <Sidebar />
    <TopNavigation />
 </div>
 );
};


export default Layout;