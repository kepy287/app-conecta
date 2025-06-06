import {
  Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe,
} from '@nestjs/common';
import { MatrizAtributoService } from '../services/matriz-atributo.service';
import { CreateMatrizAtributoDto } from '../dto/create-matriz-atributo.dto';
import { UpdateMatrizAtributoDto } from '../dto/update-matriz-atributo.dto';

@Controller('api/matriz-atributo')
export class MatrizAtributoController {
  constructor(private readonly service: MatrizAtributoService) {}

  @Post()
  create(@Body() dto: CreateMatrizAtributoDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateMatrizAtributoDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
