import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController], // Los controladores irán aquí en el próximo paso
  providers: [UsersService], // Registra el UsersService como proveedor
  exports: [UsersService, TypeOrmModule], // Exporta el servicio y TypeOrmModule si otros módulos lo necesitan
})
export class UsersModule {}