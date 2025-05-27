import { Controller, Post, Get, Param, Body, Put, Delete, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { ServiciosService } from '../services/servicios.service';
import { Servicio } from '../entities/servicio.entity';
import { CreateServicioDto } from '../dto/create-servicio.dto';
import { UpdateServicioDto } from '../dto/update-servicio.dto';
import { User } from '../../users/entities/user.entity'; // Para el endpoint de usuarios por servicio

@Controller('api/servicios') // Prefijo global para todos los endpoints de servicios
export class ServiciosController {
  constructor(private readonly serviciosService: ServiciosService) {}

  // POST /api/servicios
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createServicioDto: CreateServicioDto): Promise<Servicio> {
    return this.serviciosService.create(createServicioDto);
  }

  // GET /api/servicios
  @Get()
  async findAll(): Promise<Servicio[]> {
    return this.serviciosService.findAll();
  }

  // GET /api/servicios/:id
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Servicio> {
    return this.serviciosService.findOne(id);
  }

  // PUT /api/servicios/:id
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateServicioDto: UpdateServicioDto,
  ): Promise<Servicio> {
    return this.serviciosService.update(id, updateServicioDto);
  }

  // DELETE /api/servicios/:id
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // 204 No Content para eliminación exitosa sin retorno de contenido
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.serviciosService.remove(id);
  }

  // --- Endpoints para la relación Usuario-Servicio ---

  // POST /api/usuarios/:usuarioId/servicios/:servicioId
  @Post('/usuarios/:usuarioId/:servicioId') // Ruta ajustada para tu convención
  @HttpCode(HttpStatus.CREATED)
  async assignServiceToUser(
    @Param('usuarioId', ParseIntPipe) usuarioId: number,
    @Param('servicioId', ParseIntPipe) servicioId: number,
  ): Promise<void> {
    return this.serviciosService.assignServiceToUser(usuarioId, servicioId);
  }

  // DELETE /api/usuarios/:usuarioId/servicios/:servicioId
  @Delete('/usuarios/:usuarioId/:servicioId') // Ruta ajustada para tu convención
  @HttpCode(HttpStatus.NO_CONTENT)
  async removeServiceFromUser(
    @Param('usuarioId', ParseIntPipe) usuarioId: number,
    @Param('servicioId', ParseIntPipe) servicioId: number,
  ): Promise<void> {
    return this.serviciosService.removeServiceFromUser(usuarioId, servicioId);
  }

  // GET /api/usuarios/:usuarioId/servicios
  @Get('/usuarios/:usuarioId') // Ruta ajustada para tu convención
  async getServicesByUserId(@Param('usuarioId', ParseIntPipe) usuarioId: number): Promise<Servicio[]> {
    return this.serviciosService.getServicesByUserId(usuarioId);
  }

  // GET /api/servicios/:servicioId/usuarios
  @Get('/:servicioId/usuarios') // Ruta ajustada para tu convención
  async getUsersByServiceId(@Param('servicioId', ParseIntPipe) servicioId: number): Promise<User[]> {
    return this.serviciosService.getUsersByServiceId(servicioId);
  }
}