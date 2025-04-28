import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module'; // Importa el módulo de usuarios
import { User } from './users/entities/user.entity';
import {RolesModule} from './roles/roles.module';
import {PermissionsModule} from './permissions/permissions.module';
import {Role} from './roles/entities/role.entity';
import {Permission} from './permissions/entities/permission.entity';
import {RolesPermission} from './roles/entities/roles-permission.entity';
import 'dotenv/config';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [User], // Ahora especificamos la entidad User aquí también (o autoLoadEntities: true funciona)
      synchronize: false,
      autoLoadEntities: true,
    }),
    UsersModule, // Agrega el módulo de usuarios a los imports
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}