import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config'; // Importa dotenv para cargar las variables de entorno

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  //await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
