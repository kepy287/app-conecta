import * as fs from 'fs';
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
import {RolesPermission} from './roles-permissions/entities/roles-permission.entity';
import { RolesPermissionsModule } from './roles-permissions/roles-permissions.module';
import { AuthModule } from './auth/auth.module';
import { ServiciosModule } from './servicios/servicios.module'; // Importa tu nuevo módulo de servicios
import { MatrizAtributoModule } from './matriz-atributo/matriz-atributo.module';
import 'dotenv/config';
import { Servicio } from './servicios/entities/servicio.entity';
import { MatrizAtributo } from './matriz-atributo/entities/matriz-atributo.entity';
import { MatrizBIModule } from './matriz-bi/matriz-bi.module';

console.log('Value of process.env.DB_PORT:', process.env.DB_PORT); // Add this line

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 1433, // Provide a default or handle undefined  
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [User, Role, Permission, RolesPermission, Servicio, MatrizAtributo, MatrizBIModule], // Ahora especificamos la entidad User aquí también (o autoLoadEntities: true funciona)
      synchronize: false, 
      autoLoadEntities: true,
      logging: ['query', 'error'], // O simplemente true para todo el log
      options: {
        encrypt: true, // Asegúrate de que el cifrado esté habilitado
        cryptoCredentialsDetails: {
          ca: [fs.readFileSync('./Certificados/server-ca.pem')] // Ajusta la ruta a tu certificado descargado
        }
      },
      extra: {
        trustServerCertificate: true, // Importante: Establecer en false para producción con el certificado CA
      },
    }),
    UsersModule,
    RolesModule,
    PermissionsModule,    
    RolesPermissionsModule, AuthModule,
    ServiciosModule,         // <--- Agregar tu módulo Servicios aquí
    MatrizAtributoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}