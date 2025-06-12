import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatrizBI } from './entities/matriz-bi.entity';
import { MatrizBIService } from './services/matriz-bi.service';
import { MatrizBIController } from './controllers/matriz-bi.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MatrizBI])],
  providers: [MatrizBIService],
  controllers: [MatrizBIController],
  exports: [MatrizBIService], // Exporta si otros módulos necesitan usarlo
})
export class MatrizBIModule {}