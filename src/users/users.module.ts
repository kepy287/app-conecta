import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller'; // Importa el UsersController

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController], // Registra el UsersController
  providers: [UsersService],
  exports: [UsersService, TypeOrmModule],
})
export class UsersModule {}