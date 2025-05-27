import { IsString, IsNotEmpty, IsOptional, IsIn } from 'class-validator';

export class UpdateServicioDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  nombre?: string;

  @IsOptional()
  @IsString()
  @IsIn(['activo', 'inactivo']) // Valida que el estado sea uno de estos valores
  estado?: string;
}