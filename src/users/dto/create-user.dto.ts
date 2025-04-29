// estos son decoradores, especifican las validaciones que deben cumplir los datos al crear un nuevo usuario
import { IsNotEmpty, IsString, IsEmail, IsDate, IsInt, Length, IsOptional, IsAlpha } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateUserDto {
  @IsNotEmpty()
  @IsInt()
  ci: number;

  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  nombres: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  apellidos: string;

  @IsNotEmpty()
  @IsString()
  @Length(1)
  @IsAlpha()
  sexo: string;

  @Transform(({ value }) => {
    console.log('Valor de fecha_nac antes de la transformación:', value);
    const date = new Date(value);
    console.log('Valor de fecha_nac después de la transformación:', date);
    return date;
  })
  @IsDate()
  fecha_nac: Date;

  @IsNotEmpty()
  @IsEmail()
  @Length(1, 100)
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  cargo: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  area: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  superior: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  usuario: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  pass: string;

  @IsNotEmpty()
  @IsString()
  @Length(1)
  @IsAlpha()
  estado: string;

  @IsNotEmpty()
  @IsInt()
  rol_id: number;
}