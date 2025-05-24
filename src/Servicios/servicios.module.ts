import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Servicio } from './entities/servicio.entity';
import { ServiciosController } from './controllers/servicios.controller';
import { ServiciosService } from './services/servicios.service';
import { UsuarioServicio } from './entities/usuario-servicio.entity';
import { Usuario } from '../usuarios/entities/usuario.entity'; // Asegúrate de que esta ruta sea correcta para tu entidad Usuario
import { UsuariosService } from '../usuarios/services/usuarios.service'; // Si necesitas inyectar el servicio de usuarios

@Module({
  imports: [
    TypeOrmModule.forFeature([Servicio, UsuarioServicio, Usuario]), // Importa todas las entidades relacionadas
  ],
  controllers: [ServiciosController],
  providers: [ServiciosService, UsuariosService], // Agrega UsuariosService si lo usas en ServiciosService
  exports: [ServiciosService], // Exporta el servicio si otros módulos necesitan usarlo
})
export class ServiciosModule {}