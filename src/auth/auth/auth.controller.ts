// Aquí, hemos definido una ruta POST en /auth/login que recibe un objeto LoginDto en el cuerpo de la solicitud 
// y llama al método login de nuestro AuthService
import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from '../dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK) // Establecemos el código de respuesta a 200 OK en caso de éxito
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}