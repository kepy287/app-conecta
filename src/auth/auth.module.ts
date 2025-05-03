import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UsersModule, // Asegúrate de que UsersModule esté importado para que AuthService pueda acceder al repositorio de User
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET') || 'your-secret-key', // Usa una variable de entorno para el secreto
        signOptions: { expiresIn: '1h' }, // Define la expiración del token
      }),
    }),
    ConfigModule, // Asegúrate de que ConfigModule esté importado
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}