// src/types/user.ts
export interface User {
    id: number;
    usuario: string;
    nombres: string;
    cargo: string;
    fecha_creacion: string;
    estado: 'A' | 'I'; // Ajusta los posibles estados según tu base de datos
    // ... otras propiedades de tu usuario
  }