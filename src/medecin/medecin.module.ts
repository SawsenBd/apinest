import { Module } from '@nestjs/common';
import { MedecinService } from './medecin.service';
import { MedecinController } from './medecin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medecin } from './entities/medecin.entity';

@Module({
  controllers: [MedecinController],
  providers: [MedecinService],
  imports:[TypeOrmModule.forFeature([Medecin])],// ajoute medecin
  exports: [MedecinService],
  
})
export class MedecinModule {}

