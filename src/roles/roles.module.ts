import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { RolesPermission } from './entities/roles-permission.entity';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller'; // Importa el RolesController

@Module({
  imports: [TypeOrmModule.forFeature([Role, RolesPermission])],
  controllers: [RolesController], // Registra el RolesController
  providers: [RolesService],
  exports: [RolesService, TypeOrmModule],
})
export class RolesModule {}