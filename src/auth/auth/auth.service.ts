import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../users/entities/user.entity'; // Asegúrate de la ruta correcta a tu entidad User
import { LoginDto } from '../dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt'; // Importa JwtService

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService, // Injecta JwtService
  ) {}

  async login(loginDto: LoginDto): Promise<any> {
    const { usuario, pass } = loginDto;

    const user = await this.usersRepository.findOne({
      where: [{ usuario }, { email: usuario }],
    });

    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    const isPasswordValid = await bcrypt.compare(pass, user.pass);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    // Generar el token JWT
    const payload = { sub: user.id, usuario: user.usuario, roles: [] }; // Personaliza el payload con la información que necesites
    const accessToken = await this.jwtService.signAsync(payload);

    return { access_token: accessToken };
  }
}