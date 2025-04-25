//todas las propiedades estan marcadas como @IsOptional, esto significa que al actualizar un usuario 
// no es necesario proporcionar todos los campos,solo los que se incluyan en la solicitud
import { IsString, IsEmail, IsDate, IsInt, Length, IsOptional, IsAlpha } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsInt()
  ci?: number;

  @IsOptional()
  @IsString()
  @Length(1, 100)
  nombres?: string;

  @IsOptional()
  @IsString()
  @Length(1, 100)
  apellidos?: string;

  @IsOptional()
  @IsString()
  @Length(1)
  @IsAlpha()
  sexo?: string;

  @IsOptional()
  @IsDate()
  fecha_nac?: Date;

  @IsOptional()
  @IsEmail()
  @Length(1, 100)
  email?: string;

  @IsOptional()
  @IsString()
  @Length(1, 100)
  cargo?: string;

  @IsOptional()
  @IsString()
  @Length(1, 100)
  area?: string;

  @IsOptional()
  @IsString()
  @Length(1, 100)
  superior?: string;

  @IsOptional()
  @IsString()
  @Length(1, 100)
  usuario?: string;

  @IsOptional()
  @IsString()
  @Length(1, 100)
  pass?: string;

  @IsOptional()
  @IsString()
  @Length(1)
  @IsAlpha()
  estado?: string;

  @IsOptional()
  @IsInt()
  rol_id?: number;
}