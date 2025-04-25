import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// este decorador define el prefijo de la ruta para todas las rutas en este controlador, comenzaran con /users.
// en el constructor inyectamos el UsersService para utilizar sus metodos
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // este decorador @Post define una ruta POST para crear un nuevo usuario
  //
  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // este decorador define una ruta GET para obtener todos los usuarios
  // llama al metodo findAll para obtener la lista de todos los usuarios
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // @Get(':id') este decorador define una ruta GET para obtener un usuario especifico por us iD
  // @Param('id') extrae el parametro id de la URL
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  // @Patch(':id') este decorador define una ruta PATCH para actualizar un usuario existente por su ID
  //@Param('id') extrae el ID del usuario a actualizar
  // llama al metodo update del UsersService para actualizar el usuario en la base de datos
  @Patch(':id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  // @Delete(':id'): Este decorador define una ruta DELETE para eliminar un usuario por su ID
  // @Param('id') id: string: Extrae el ID del usuario a eliminar.
  // llama al metodo remove del UsersService para eliminar el usuario de la BD
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}