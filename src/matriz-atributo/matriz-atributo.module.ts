import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatrizAtributo } from './entities/matriz-atributo.entity';
import { MatrizAtributoService } from './services/matriz-atributo.service';
import { MatrizAtributoController } from './controllers/matriz-atributo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MatrizAtributo])],
  providers: [MatrizAtributoService],
  controllers: [MatrizAtributoController],
})
export class MatrizAtributoModule {}
