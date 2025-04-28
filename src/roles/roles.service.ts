import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

// Marca la clase como un proveedor inyectable
@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
  ) {}

  // crea un nuevo rol y lo guarda en la BD
  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const role = this.rolesRepository.create(createRoleDto);
    return await this.rolesRepository.save(role);
  }

  // obtiene todos los roles
  async findAll(): Promise<Role[]> {
    return await this.rolesRepository.find();
  }
  // obtiene un rol por su rol_id
  async findOne(rol_id: number): Promise<Role | undefined> {
    return await this.rolesRepository.findOne({ where: { rol_id } });
  }

  // obtiene un rol por su nombre
  async findByName(nombre_rol: string): Promise<Role | undefined> {
    return await this.rolesRepository.findOne({ where: { nombre_rol } });
  }

  // actualiza un rol existente por su rol_id
  async update(rol_id: number, updateRoleDto: UpdateRoleDto): Promise<Role | undefined> {
    const role: Role | null = await this.rolesRepository.findOne({ where: { rol_id } });
    if (!role) {
      return undefined; // Retornamos undefined explícitamente si no se encuentra el rol
    }
    await this.rolesRepository.merge(role, updateRoleDto);
    return await this.rolesRepository.save(role);
  }

  // elimina un rol por su rol_id
  async remove(rol_id: number): Promise<void> {
    await this.rolesRepository.delete(rol_id);
  }
}