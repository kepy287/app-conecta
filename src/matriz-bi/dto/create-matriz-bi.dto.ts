import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMatrizBiDto {
  @IsString()
  @IsNotEmpty()
  tipo: string;

  @IsString()
  @IsNotEmpty()
  atributo: string;

  @IsString()
  @IsNotEmpty()
  factor_causal: string;

  @IsString()
  @IsNotEmpty()
  referencia: string;

  @IsString()
  @IsNotEmpty()
  cliente: string; // Asegúrate de que esto se refiere al nombre del cliente, no a un ID de FK
}