import { Controller, Post, Delete, Param, ParseIntPipe, Get } from '@nestjs/common';
import { RolesPermissionsService } from './roles-permissions.service';

// define un controlador anidado bajo la ruta de los roles, esto permite gestionar los permisos de un rol especifico.
@Controller('roles/:roleId/permissions')
export class RolesPermissionsController {
  constructor(private readonly rolesPermissionsService: RolesPermissionsService) {}

  //@Post, asigna un permiso(permissionId) a un rol(roleId)
  @Post(':permissionId')
  async assignPermissionToRole(
    @Param('roleId', ParseIntPipe) roleId: number,
    @Param('permissionId', ParseIntPipe) permissionId: number,
  ) {
    return this.rolesPermissionsService.assignPermissionToRole(roleId, permissionId);
  }

  // elimina un permiso (permissionId) de un rol (roleId)
  @Delete(':permissionId')
  async removePermissionFromRole(
    @Param('roleId', ParseIntPipe) roleId: number,
    @Param('permissionId', ParseIntPipe) permissionId: number,
  ) {
    await this.rolesPermissionsService.removePermissionFromRole(roleId, permissionId);
    return { message: 'Permission removed from role successfully' };
  }

  // obtiene todos los permisos asociados a un rol (roleId)
  @Get()
  async getPermissionsForRole(@Param('roleId', ParseIntPipe) roleId: number) {
    return this.rolesPermissionsService.getPermissionsForRole(roleId);
  }
}

// define otro controlador anidado bajo la ruta de los permisos para obtener los roles asociados a un permiso
@Controller('permissions/:permissionId/roles')
export class PermissionsRolesController {
  constructor(private readonly rolesPermissionsService: RolesPermissionsService) {}

  // obtiene todos los roles que tienen asignado un permiso
  @Get()
  async getRolesForPermission(@Param('permissionId', ParseIntPipe) permissionId: number) {
    return this.rolesPermissionsService.getRolesForPermission(permissionId);
  }
}