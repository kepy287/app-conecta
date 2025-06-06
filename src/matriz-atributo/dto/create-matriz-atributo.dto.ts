import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateMatrizAtributoDto {
  @IsString()
  @IsNotEmpty()
  tipo: string;

  @IsString()
  @IsNotEmpty()
  servicio: string;

  @IsInt()
  cliente_id: number;

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
  origen: string;
}
