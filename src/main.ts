import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config'; // Importa dotenv para cargar las variables de entorno

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3001>', // Reemplaza con el origen de tu frontend (ej: 3001, 3002)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Si necesitas enviar cookies de sesión, etc.
    allowedHeaders: 'Content-Type, Authorization', // Lista de encabezados permitidos
  });
  await app.listen(3000);
  //await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
