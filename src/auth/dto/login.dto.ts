import { IsString, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  usuario: string; // O podrías llamarlo usernameOrEmail si prefieres

  @IsNotEmpty()
  @IsString()
  pass: string;
}