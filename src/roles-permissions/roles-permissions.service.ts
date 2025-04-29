import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolesPermission } from './entities/roles-permission.entity';

@Injectable()
export class RolesPermissionsService {
  constructor(
    @InjectRepository(RolesPermission)
    private rolesPermissionsRepository: Repository<RolesPermission>,
  ) {}

  async assignPermissionToRole(rol_id: number, permiso_id: number): Promise<RolesPermission> {
    const association = this.rolesPermissionsRepository.create({ rol_id: rol_id, permiso_id: permiso_id }); // Corrección aquí
    return await this.rolesPermissionsRepository.save(association);
  }

  async removePermissionFromRole(rol_id: number, permiso_id: number): Promise<void> {
    await this.rolesPermissionsRepository.delete({ rol_id: rol_id, permiso_id: permiso_id });
  }

  async getPermissionsForRole(rol_id: number): Promise<RolesPermission[]> {
    return await this.rolesPermissionsRepository.find({
      where: { rol_id: rol_id },
      relations: ['permission'],
    });
  }

  async getRolesForPermission(permiso_id: number): Promise<RolesPermission[]> {
    return await this.rolesPermissionsRepository.find({
      where: { permiso_id: permiso_id },
      relations: ['role'],
    });
  }
}