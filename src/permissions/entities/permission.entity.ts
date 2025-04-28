import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Role } from '../../roles/entities/role.entity';
import { RolesPermission } from '../../roles/entities/roles-permission.entity'; // Si crearemos la tabla de unión

@Entity('Permisos')
export class Permission {
  @PrimaryGeneratedColumn()
  permiso_id: number;

  @Column({ length: 50, unique: true })
  nombre_permiso: string;

  @Column({ length: 255, nullable: true })
  descripcion: string;

  // Relación ManyToMany con Roles a través de RolesPermission
  @OneToMany(() => RolesPermission, (rolesPermission) => rolesPermission.permission)
  rolesPermissions: RolesPermission[];
}