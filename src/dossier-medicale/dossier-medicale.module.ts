import { Module } from '@nestjs/common';
import { DossierMedicaleService } from './dossier-medicale.service';
import { DossierMedicaleController } from './dossier-medicale.controller';
import { DossierMedicale } from './entities/dossier-medicale.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DossierMedicale])],
  controllers: [DossierMedicaleController],
  providers: [DossierMedicaleService],
  exports: [DossierMedicaleService],
  
})
export class DossierMedicaleModule {}

