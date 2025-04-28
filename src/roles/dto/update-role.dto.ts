// definen la estructura de los datos para actualizar un rol
import { IsString, Length, IsOptional } from 'class-validator';

// todos los campos son opcionales @IsOptional, ya que solo se actualizaran los campos proporcionados en la solicitud
export class UpdateRoleDto {
  @IsOptional()
  @IsString()
  @Length(1, 50)
  nombre_rol?: string;

  @IsOptional()
  @IsString()
  @Length(0, 255)
  descripcion?: string;
}