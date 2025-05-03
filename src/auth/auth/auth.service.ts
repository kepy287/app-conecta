import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../users/entities/user.entity'; // Asegúrate de la ruta correcta a tu entidad User
import { LoginDto } from '../dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async login(loginDto: LoginDto): Promise<any> {
    const { usuario, pass } = loginDto;

    // Buscar al usuario por nombre de usuario o correo electrónico (ajusta tu lógica de búsqueda)
    const user = await this.usersRepository.findOne({
      where: [{ usuario }, { email: usuario }], // Intenta buscar por ambos campos
    });

    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    // Comparar la contraseña proporcionada con la contraseña hasheada en la base de datos
    const isPasswordValid = await bcrypt.compare(pass, user.pass);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    // Si las credenciales son válidas, aquí generaremos el token (lo haremos en el siguiente paso)
    // Por ahora, devolvemos el usuario
    return { access_token: 'GENERATED_TOKEN_HERE' }; // Placeholder para el token
  }
}