// definen la estructura de los datos necesario s para crear un nuevo rol
import { IsNotEmpty, IsString, Length, IsOptional } from 'class-validator';

// los campos nombre_rol y descripcion son obligatorios (@IsNotEmpty)
export class CreateRoleDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  nombre_rol: string;

  @IsOptional()
  @IsString()
  @Length(0, 255)
  descripcion?: string;
}