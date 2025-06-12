import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MatrizBI } from '../entities/matriz-bi.entity';
import { CreateMatrizBiDto } from '../dto/create-matriz-bi.dto';
import { UpdateMatrizBiDto } from '../dto/update-matriz-bi.dto';

@Injectable()
export class MatrizBIService {
  constructor(
    @InjectRepository(MatrizBI)
    private readonly matrizBiRepository: Repository<MatrizBI>,
  ) {}

  async create(createMatrizBiDto: CreateMatrizBiDto): Promise<MatrizBI> {
    const nuevaMatriz = this.matrizBiRepository.create(createMatrizBiDto);
    return this.matrizBiRepository.save(nuevaMatriz);
  }

  async findAll(): Promise<MatrizBI[]> {
    return this.matrizBiRepository.find();
  }

  async findOne(id: number): Promise<MatrizBI> {
    const matriz = await this.matrizBiRepository.findOneBy({ ID: id });
    if (!matriz) {
      throw new NotFoundException(`Matriz BI con ID ${id} no encontrada.`);
    }
    return matriz;
  }

  async update(id: number, updateMatrizBiDto: UpdateMatrizBiDto): Promise<MatrizBI> {
    const matriz = await this.findOne(id); // Reutiliza findOne para asegurar que existe
    Object.assign(matriz, updateMatrizBiDto);
    return this.matrizBiRepository.save(matriz);
  }

  async remove(id: number): Promise<void> {
    const result = await this.matrizBiRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Matriz BI con ID ${id} no encontrada para eliminar.`);
    }
  }
}