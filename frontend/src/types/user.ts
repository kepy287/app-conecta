// src/types/user.ts
export interface User {
    id: number;
    usuario: string;
    nombre: string;
    cargo: string;
    fechaCreacion: string;
    estado: 'activo' | 'inactivo'; // Ajusta los posibles estados según tu base de datos
    // ... otras propiedades de tu usuario
  }