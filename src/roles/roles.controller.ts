// este controlador definira las rutas de la API para la gestion de roles y utilizara Roles Service para realizar las operaciones necesarias
import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

// define el prefijo de la ruta para este controlador como /roles
// constructor, inyecta el RolesService
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  // @Post, ruta Post para crear un nuevo rol, utiliza VlaidateionPipe para validar el CreateRolDto.
  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  // ruta GET para obtener todos los roles
  @Get()
  findAll() {
    return this.rolesService.findAll();
  }

  // ruta Get para obtener todos los roles
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(+id);
  }

  // ruta PATCH para actualizar un rol existente por su id, 
  @Patch(':id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  // ruta DELETE para eliminar un rol por su id.
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}