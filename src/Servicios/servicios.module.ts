import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Servicio } from './entities/servicio.entity';
import { ServiciosController } from './controllers/servicios.controller';
import { ServiciosService } from './services/servicios.service';
import { UsuarioServicio } from './entities/usuario-servicio.entity';
import { User } from '../users/entities/user.entity'; // Asegúrate de que esta ruta sea correcta para tu entidad Usuario
import { UsersService } from '../users/users.service'; // Si necesitas inyectar el servicio de usuarios

@Module({
  imports: [
    TypeOrmModule.forFeature([Servicio, UsuarioServicio, User]), // Importa todas las entidades relacionadas
  ],
  controllers: [ServiciosController],
  providers: [ServiciosService, UsersService], // Agrega UsuariosService si lo usas en ServiciosService
  exports: [ServiciosService], // Exporta el servicio si otros módulos necesitan usarlo
})
export class ServiciosModule {}