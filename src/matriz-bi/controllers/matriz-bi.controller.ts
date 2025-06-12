import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Put,
  Delete,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { MatrizBIService } from '../services/matriz-bi.service';
import { CreateMatrizBiDto } from '../dto/create-matriz-bi.dto';
import { UpdateMatrizBiDto } from '../dto/update-matriz-bi.dto';
import { MatrizBI } from '../entities/matriz-bi.entity';

@Controller('api/matriz-bi') // Endpoint base para Matriz_BI
export class MatrizBIController {
  constructor(private readonly matrizBIService: MatrizBIService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED) // Código 201 para creación exitosa
  async create(@Body() createMatrizBiDto: CreateMatrizBiDto): Promise<MatrizBI> {
    return this.matrizBIService.create(createMatrizBiDto);
  }

  @Get()
  async findAll(): Promise<MatrizBI[]> {
    return this.matrizBIService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<MatrizBI> {
    return this.matrizBIService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMatrizBiDto: UpdateMatrizBiDto,
  ): Promise<MatrizBI> {
    return this.matrizBIService.update(id, updateMatrizBiDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // Código 204 para eliminación exitosa sin contenido
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.matrizBIService.remove(id);
  }
}