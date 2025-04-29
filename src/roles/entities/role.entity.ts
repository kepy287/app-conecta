import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Permission } from     '../../permissions/entities/permission.entity';
import { RolesPermission } from '../../roles-permissions/entities/roles-permission.entity'; // Si crearemos la tabla de unión

@Entity('Roles')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, unique: true })
  nombre_rol: string;

  @Column({ length: 255, nullable: true })
  descripcion: string;

  // Relación OneToMany con Usuarios (si un rol tiene muchos usuarios)
  @OneToMany(() => User, (user) => user.rol)
  users: User[];

  // Relación ManyToMany con Permisos a través de RolesPermission
  @OneToMany(() => RolesPermission, (rolesPermission) => rolesPermission.role)
  rolesPermissions: RolesPermission[];
}