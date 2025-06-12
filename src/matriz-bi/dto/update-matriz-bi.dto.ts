import { PartialType } from '@nestjs/mapped-types'; // O puedes usar '@nestjs/swagger' si ya lo tienes instalado
import { CreateMatrizBiDto } from './create-matriz-bi.dto';

export class UpdateMatrizBiDto extends PartialType(CreateMatrizBiDto) {}