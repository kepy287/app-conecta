// este controlador define las rutas de la API para la gestion de permisos
import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { PermissionsService } from '././permissions.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';

// define el prefijo de la ruta para este controlador coom /permissions
@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  // @Post, ruta POST para crear un nuevo permiso,  utiliza ValidationPipe apra validar el CreatePermissionDto
  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createPermissionDto: CreatePermissionDto) {
    return this.permissionsService.create(createPermissionDto);
  }

  // ruta GET para obtener todos los permisos
  @Get()
  findAll() {
    return this.permissionsService.findAll();
  }

  // ruta Get para obtener un permiso por su id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.permissionsService.findOne(+id);
  }

  // ruta PATCH para actualizar un permiso existente por su id, utiliza ValidationPipe para validar el UpdatePermissionDto
  @Patch(':id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: string, @Body() updatePermissionDto: UpdatePermissionDto) {
    return this.permissionsService.update(+id, updatePermissionDto);
  }

  // ruta DELETE para eliminar un permiso por su id.
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.permissionsService.remove(+id);
  }
}