import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesPermission } from 'src/roles-permissions/entities/roles-permission.entity';
import { RolesPermissionsService } from './roles-permissions.service';
import { RolesPermissionsController, PermissionsRolesController } from './roles-permissions.controller';
import { RolesModule } from '../roles/roles.module';
import { PermissionsModule } from '../permissions/permissions.module';

@Module({
  imports: [TypeOrmModule.forFeature([RolesPermission]), RolesModule, PermissionsModule],
  controllers: [RolesPermissionsController, PermissionsRolesController],
  providers: [RolesPermissionsService],
  exports: [RolesPermissionsService, TypeOrmModule],
})
export class RolesPermissionsModule {}