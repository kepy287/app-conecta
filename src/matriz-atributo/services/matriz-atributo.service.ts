import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MatrizAtributo } from '../entities/matriz-atributo.entity';
import { CreateMatrizAtributoDto } from '../dto/create-matriz-atributo.dto';
import { UpdateMatrizAtributoDto } from '../dto/update-matriz-atributo.dto';

@Injectable()
export class MatrizAtributoService {
  constructor(
    @InjectRepository(MatrizAtributo)
    private readonly matrizRepository: Repository<MatrizAtributo>,
  ) {}

  async create(dto: CreateMatrizAtributoDto): Promise<MatrizAtributo> {
    const nuevo = this.matrizRepository.create(dto);
    return this.matrizRepository.save(nuevo);
  }

  async findAll(): Promise<MatrizAtributo[]> {
    return this.matrizRepository.find({ relations: ['cliente'] });
  }

  async findOne(id: number): Promise<MatrizAtributo> {
    const item = await this.matrizRepository.findOne({ where: { ID: id }, relations: ['cliente'] });
    if (!item) throw new NotFoundException(`No se encontró matriz con ID ${id}`);
    return item;
  }

  async update(id: number, dto: UpdateMatrizAtributoDto): Promise<MatrizAtributo> {
    const item = await this.findOne(id);
    Object.assign(item, dto);
    return this.matrizRepository.save(item);
  }

  async remove(id: number): Promise<void> {
    const result = await this.matrizRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`No se encontró para eliminar la matriz con ID ${id}`);
    }
  }
}
