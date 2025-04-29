import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Role } from '../../roles/entities/role.entity';
import { Permission } from '../../permissions/entities/permission.entity';

@Entity('Roles_Permisos')
export class RolesPermission {
  @PrimaryColumn({ name: 'rol_id' })
  rol_id: number;

  @PrimaryColumn({ name: 'permiso_id' })
  permiso_id: number;

  @ManyToOne(() => Role, (role) => role.rolesPermissions, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'rol_id' })
  role: Role;

  @ManyToOne(() => Permission, (permission) => permission.rolesPermissions, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'permiso_id' })
  permission: Permission;
}