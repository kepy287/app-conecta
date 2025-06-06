import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servicio } from '../entities/servicio.entity';
import { User } from '../../users/entities/user.entity';
import { CreateServicioDto } from '../dto/create-servicio.dto';
import { UpdateServicioDto } from '../dto/update-servicio.dto';

@Injectable()
export class ServiciosService {
  constructor(
    @InjectRepository(Servicio)
    private readonly servicioRepository: Repository<Servicio>,
    @InjectRepository(User) // Necesitas el repositorio de Usuario para las relaciones
    private readonly usuarioRepository: Repository<User>,
  ) {}

  async create(createServicioDto: CreateServicioDto): Promise<Servicio> {
    const servicio = this.servicioRepository.create(createServicioDto);
    return this.servicioRepository.save(servicio);
  }

  async findAll(): Promise<Servicio[]> {
    return this.servicioRepository.find();
  }

  async findOne(id: number): Promise<Servicio> {
    const servicio = await this.servicioRepository.findOneBy({ ID: id });
    if (!servicio) {
      throw new NotFoundException(`Servicio con ID ${id} no encontrado.`);
    }
    return servicio;
  }

  async update(id: number, updateServicioDto: UpdateServicioDto): Promise<Servicio> {
    const servicio = await this.findOne(id); // Reutiliza findOne para verificar existencia
    Object.assign(servicio, updateServicioDto);
    return this.servicioRepository.save(servicio);
  }

  async remove(id: number): Promise<void> {
    const result = await this.servicioRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Servicio con ID ${id} no encontrado para eliminar.`);
    }
  }

  // --- Métodos para la relación Usuario-Servicio ---

  async assignServiceToUser(usuarioId: number, servicioId: number): Promise<void> {
    const usuario = await this.usuarioRepository.findOne({ where: { id: usuarioId }, relations: ['servicios'] });
    const servicio = await this.servicioRepository.findOne({ where: { ID: servicioId }, relations: ['usuarios'] });

    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${usuarioId} no encontrado.`);
    }
    if (!servicio) {
      throw new NotFoundException(`Servicio con ID ${servicioId} no encontrado.`);
    }

    // Verificar si la relación ya existe
    if (servicio.usuarios && servicio.usuarios.some(u => u.id === usuario.id)) {
      throw new ConflictException(`El servicio ${servicioId} ya está asignado al usuario ${usuarioId}.`);
    }

    if (!servicio.usuarios) {
      servicio.usuarios = [];
    }
    servicio.usuarios.push(usuario);
    await this.servicioRepository.save(servicio); // Guarda la relación a través del servicio
  }

  async removeServiceFromUser(usuarioId: number, servicioId: number): Promise<void> {
    const usuario = await this.usuarioRepository.findOne({ where: { id: usuarioId }, relations: ['servicios'] });
    const servicio = await this.servicioRepository.findOne({ where: { ID: servicioId }, relations: ['usuarios'] });

    if (!usuario || !servicio) {
      throw new NotFoundException('Usuario o servicio no encontrado.');
    }

    // Filtra la relación y guarda el servicio
    servicio.usuarios = servicio.usuarios.filter(u => u.id !== usuario.id);
    await this.servicioRepository.save(servicio);
  }

  async getServicesByUserId(usuarioId: number): Promise<Servicio[]> {
    const usuario = await this.usuarioRepository.findOne({
      where: { id: usuarioId },
      relations: ['servicios'], // Carga la relación 'servicios'
    });
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${usuarioId} no encontrado.`);
    }
    return usuario.servicios;
  }

  async getUsersByServiceId(servicioId: number): Promise<User[]> {
    const servicio = await this.servicioRepository.findOne({
      where: { ID: servicioId },
      relations: ['usuarios'], // Carga la relación 'usuarios'
    });
    if (!servicio) {
      throw new NotFoundException(`Servicio con ID ${servicioId} no encontrado.`);
    }
    return servicio.usuarios;
  }
}