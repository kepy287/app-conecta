import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { RolesPermission } from './entities/roles-permission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role, RolesPermission])],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class RolesModule {}