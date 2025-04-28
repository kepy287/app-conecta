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

  async assignPermissionToRole(rolId: number, permisoId: number): Promise<RolesPermission> {
    const association = this.rolesPermissionsRepository.create({ rolId: rolId, permisoId: permisoId }); // Corrección aquí
    return await this.rolesPermissionsRepository.save(association);
  }

  async removePermissionFromRole(rolId: number, permisoId: number): Promise<void> {
    await this.rolesPermissionsRepository.delete({ rolId: rolId, permisoId: permisoId });
  }

  async getPermissionsForRole(rolId: number): Promise<RolesPermission[]> {
    return await this.rolesPermissionsRepository.find({
      where: { rolId: rolId },
      relations: ['permission'],
    });
  }

  async getRolesForPermission(permisoId: number): Promise<RolesPermission[]> {
    return await this.rolesPermissionsRepository.find({
      where: { permisoId: permisoId },
      relations: ['role'],
    });
  }
}