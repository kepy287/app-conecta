import React from 'react';
import Sidebar from './Sidebar';
import TopNavigation from './TopNavigation';
import styles from './Layout.module.css';


const Layout = ({ children }) => {
 return (
 <div className={styles.container}>
 <Sidebar />
 <div className={styles.mainContent}>
 <TopNavigation />
 {children} {/* Aquí se renderizará el contenido de las páginas */}
 </div>
 </div>
 );
};


export default Layout;