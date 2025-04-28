// este servicio proporciona los metodos para realizar operaciones CRUD en la entidad Permission
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { Permission } from './entities/permission.entity';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectRepository(Permission)
    private permissionsRepository: Repository<Permission>,
  ) {}

  // crea un nuevo permiso y lo guarda en la BD
  async create(createPermissionDto: CreatePermissionDto): Promise<Permission> {
    const permission = this.permissionsRepository.create(createPermissionDto);
    return await this.permissionsRepository.save(permission);
  }

  // obtiene todos los permisos de la bd
  async findAll(): Promise<Permission[]> {
    return await this.permissionsRepository.find();
  }

  // obteiene un permiso por su id
  async findOne(permiso_id: number): Promise<Permission | undefined> {
    const permission = await this.permissionsRepository.findOne({ where: { permiso_id } });
    return permission !== null ? permission : undefined;
  }

  // obtiene un permioso por su name
  async findByName(nombre_permiso: string): Promise<Permission | undefined> {
    const permission = await this.permissionsRepository.findOne({ where: { nombre_permiso } });
    return permission !== null ? permission : undefined;
  }

  async update(permiso_id: number, updatePermissionDto: UpdatePermissionDto): Promise<Permission | undefined> {
    const permission: Permission | null = await this.permissionsRepository.findOne({ where: { permiso_id } });
    if (!permission) {
      return undefined;
    }
    await this.permissionsRepository.merge(permission, updatePermissionDto);
    return await this.permissionsRepository.save(permission);
  }

  async remove(id: number): Promise<void> {
    await this.permissionsRepository.delete(id);
  }
}