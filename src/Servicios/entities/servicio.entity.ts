import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, CreateDateColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity'; // Asegúrate de que esta ruta sea correcta

@Entity('Servicios') // Nombre de tu tabla en la base de datos
export class Servicio {
  @PrimaryGeneratedColumn('identity') // Para SQL Server IDENTITY(1,1)
  ID: number;

  @Column({ length: 255, nullable: false })
  nombre: string;

  @Column({ length: 255, default: 'activo', nullable: false })
  estado: string; // Puede ser 'activo' o 'inactivo'

  @CreateDateColumn({ type: 'date', default: () => 'GETDATE()' }) // Para SQL Server GETDATE()
  fecha_creacion: Date;

  // Relación ManyToMany con la entidad Usuario a través de la tabla intermedia UsuarioServicio
  @ManyToMany(() => Usuario, (usuario) => usuario.servicios)
  @JoinTable({
    name: 'UsuarioServicio', // Nombre de la tabla intermedia
    joinColumn: {
      name: 'servicio_id', // Columna en UsuarioServicio que apunta a Servicios.ID
      referencedColumnName: 'ID',
    },
    inverseJoinColumn: {
      name: 'usuario_id', // Columna en UsuarioServicio que apunta a Usuarios.id
      referencedColumnName: 'id', // Asumo que la PK de Usuarios es 'id'. Ajusta si es diferente (ej. 'ID_usuario')
    },
  })
  usuarios: Usuario[];
}