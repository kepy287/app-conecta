import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, CreateDateColumn, OneToMany } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsuarioServicio } from '../../servicios/entities/usuario-servicio.entity'; // Asegúrate de que esta ruta sea correcta

@Entity('Servicios') // Nombre de tu tabla en la base de datos
export class Servicio {
  @PrimaryGeneratedColumn('identity') // Para SQL Server IDENTITY(1,1)
  ID: number; // La clave primaria es 'ID' en mayúsculas

  @Column({ length: 255, nullable: false })
  nombre: string;

  @Column({ length: 255, default: 'activo', nullable: false })
  estado: string; // Puede ser 'activo' o 'inactivo'

  @CreateDateColumn({ type: 'date', default: () => 'GETDATE()' }) // Para SQL Server GETDATE()
  fecha_creacion: Date;

  @Column()
  area: string;

  @Column()
  cliente: string;

  @Column()
  tipo: string;

  // Relación ManyToMany con la entidad User a través de la tabla intermedia UsuarioServicio
  @ManyToMany(() => User, (usuario) => usuario.servicios)
  @JoinTable({
    name: 'UsuarioServicio', // Nombre de la tabla intermedia
    joinColumn: {
      name: 'servicio_id', // Columna en UsuarioServicio que apunta a Servicios.ID
      referencedColumnName: 'ID', // Coincide con la PK de Servicio
    },
    inverseJoinColumn: {
      name: 'usuario_id', // Columna en UsuarioServicio que apunta a Usuarios.id
      referencedColumnName: 'id', // Asumo que la PK de Usuarios es 'id'. Ajusta si es diferente
    },
  })
  usuarios: User[];

  // NUEVA RELACIÓN: OneToMany con UsuarioServicio
  // Esta propiedad es el lado inverso de la relación ManyToOne en UsuarioServicio
  @OneToMany(() => UsuarioServicio, (usuarioServicio) => usuarioServicio.servicio)
  usuarioServicios: UsuarioServicio[]; // Propiedad que apunta de vuelta a la tabla intermedia
}
