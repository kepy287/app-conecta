/*import React from 'react';
import styles from './Sidebar.module.css';

interface SidebarProps {} // Por ahora no tenemos props, pero podríamos agregarlas en el futuro

const Sidebar: React.FC<SidebarProps> = () => {
  const now: Date = new Date();
  const day: string = new Intl.DateTimeFormat('es-ES', { weekday: 'long' }).format(now).toUpperCase();
  const date: string = now.toLocaleDateString('es-ES');

  return (
    <div className={styles.sidebar}>
      <div className={styles.date}>
        {day} <br /> {date}
      </div>
      <div className={`${styles.navItem} ${styles.active}`}>Panel de control</div>
      <div className={styles.navItem}>Home</div>
      <div className={styles.navItem}>Evaluación</div>
      <div className={styles.navItem}>Asignación</div>
      <div className={styles.navItem}>Verificación</div>
      <div className={styles.navItem}>Matriz de servicios</div>
      <div className={styles.navItem}>((())) Close the loop</div>
      <div className={styles.navItem}>N Usuarios</div>
      <div className={styles.logo}>Logo</div> {/* Aquí iría tu logo */
/*    </div>
  );
};

export default Sidebar;
*/

import React from 'react';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const now: Date = new Date();
  const day: string = new Intl.DateTimeFormat('es-ES', { weekday: 'long' }).format(now).toUpperCase();
  const date: string = now.toLocaleDateString('es-ES');

  return (
    <div className="w-60 bg-gray-100 text-gray-800 flex flex-col h-screen">
      {/* Contenedor principal con ancho fijo, fondo gris claro, texto gris oscuro y layout de columna que ocupa toda la altura */}
      <div className="p-6 border-b border-gray-200 flex justify-center">
        {/* Contenedor para la fecha con padding, borde inferior y centrado */}
        <div className="text-center">
          <div className="font-bold text-xl mb-1">{day}</div>
          <div className="text-sm">{date}</div>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {/* Contenedor para la navegación que ocupa el espacio restante, con padding y espaciado vertical entre elementos */}
        <div className="text-sm font-medium text-gray-700 uppercase tracking-wider mb-2">Navegación</div>
        <button className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded-md">
          Panel de control
        </button>
        <button className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded-md">
          Home
        </button>
        <button className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded-md">
          Evaluación
        </button>
        <button className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded-md">
          Asignación
        </button>
        <button className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded-md">
          Verificación
        </button>
        <button className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded-md">
          Matriz de servicios
        </button>
        <button className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded-md">
          ((())) Close the loop
        </button>
        <button className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded-md">
          N Usuarios
        </button>
      </nav>
      <div className="p-6 border-t border-gray-200 text-center text-sm text-gray-500">
        {/* Contenedor para el logo con padding, borde superior y texto centrado y pequeño */}
        <div className="font-semibold">Logo</div> {/* Aquí iría tu logo */}
      </div>
    </div>
  );
};

export default Sidebar;