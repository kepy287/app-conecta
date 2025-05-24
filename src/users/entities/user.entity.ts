import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Role } from '../../roles/entities/role.entity'; // Importa la entidad Role si la vas a relacionar
import { Servicio} from '../'
import { Servicio } from '../servicios/entities/servicio.entity'; // Asegúrate de que esta ruta sea correcta
import { UsuarioServicio } from '../servicios/entities/usuario-servicio.entity'; // Asegúrate de que esta ruta sea correcta


@Entity('Usuarios') // Especifica el nombre de la tabla en la base de datos
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ci: number;

  @Column({ length: 100 })
  nombres: string;

  @Column({ length: 100 })
  apellidos: string;

  @Column({ length: 1 })
  sexo: string;

  @Column({ type: 'date' })
  fecha_nac: Date;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 100 })
  cargo: string;

  @Column({ length: 100 })
  area: string;

  @Column({ length: 100 })
  superior: string;

  @Column({ length: 100, unique: true })
  usuario: string;

  @Column({ length: 100 })
  pass: string;

  @Column({ length: 1 })
  estado: string;

  @CreateDateColumn()
  fecha_creacion: Date;

  @Column({ length: 100 })
  usuario_creacion: string;

  @UpdateDateColumn()
  fecha_modif: Date;

  @Column({ length: 100 })
  usuario_modif: string;

  @Column()
  rol_id: number;

  // Relación con la tabla Roles (si decides tenerla como ManyToOne)
  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: 'rol_id' })
  rol: Role;
}