import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  // este metodo toma un CreateUserDto, crea una nueva instancia de la entidad user con los datos proporcionados y los guarda en la BD
  async create(createUserDto: CreateUserDto): Promise<User> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(createUserDto.pass, saltRounds);
    const user = this.usersRepository.create({ ...createUserDto, pass: hashedPassword });
    return await this.usersRepository.save(user);
  }

  // este metodo utiliza el repositorio para obtener todos los usuarios de la BD
  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  // este metodo utiliza el repositorio para buscar un usuario por su id.
  async findOne(id: number): Promise<User | undefined> {
    const user = await this.usersRepository.findOne({ where: { id } });
    return user !== null ? user : undefined; // Devolver explícitamente undefined si es null
  }

  // Este método busca un usuario por su nombre de usuario (usuario). Esto será útil para la autenticación
  async findByUsername(usuario: string): Promise<User | undefined> {
    const user: User | null = await this.usersRepository.findOne({ where: { usuario } });
    return user !== null ? user : undefined;
  }

  // este metodo toma un id y un UpdateUserDto, busca el usuario y fusiona los datos de actualizacion con el usuario exsitente
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User | undefined> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      return undefined;
    }
    if (updateUserDto.pass) {
      const saltRounds = 10;
      updateUserDto.pass = await bcrypt.hash(updateUserDto.pass, saltRounds);
    }

    // Si se proporciona una nueva contraseña, la hasheamos
    if (updateUserDto.pass) {
      const saltRounds = 10;
      updateUserDto.pass = await bcrypt.hash(updateUserDto.pass, saltRounds);
    }

    await this.usersRepository.merge(user, updateUserDto);
    return await this.usersRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}