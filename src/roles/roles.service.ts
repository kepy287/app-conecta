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
  async findOne(id: number): Promise<Role | undefined> {
    const role = await this.rolesRepository.findOne({ where: { id } });
    return role !== null ? role : undefined;
  }

  async findByName(nombre: string): Promise<Role | undefined> {
    const role = await this.rolesRepository.findOne({ where: { nombre } });
    return role !== null ? role : undefined;
  }

  // actualiza un rol existente por su rol_id
  async update(id: number, updateRoleDto: UpdateRoleDto): Promise<Role | undefined> {
    const role: Role | null = await this.rolesRepository.findOne({ where: { id } });
    if (!role) {
      return undefined; // Retornamos undefined explícitamente si no se encuentra el rol
    }
    await this.rolesRepository.merge(role, updateRoleDto);
    return await this.rolesRepository.save(role);
  }

  // elimina un rol por su rol_id
  async remove(id: number): Promise<void> {
    await this.rolesRepository.delete(id);
  }
}