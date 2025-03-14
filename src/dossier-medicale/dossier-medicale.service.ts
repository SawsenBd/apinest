import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DossierMedicale } from './entities/dossier-medicale.entity';

@Injectable()
export class DossierMedicaleService {
  constructor(
      @InjectRepository(DossierMedicale)
      private dossierMedicaleRepository: Repository<DossierMedicale>,
    ) {}
    
    create(dossierMedicaleData: Partial<DossierMedicale>) {
      const dossier_medicale = this.dossierMedicaleRepository.create(dossierMedicaleData);
      return this.dossierMedicaleRepository.save(dossier_medicale);
    }
  
    findAll() {
      return this.dossierMedicaleRepository.findAndCount();
    }
  
    findOne(id: number) {
      return this.dossierMedicaleRepository.findOne({ where: { id } });
    }
  
    delete(id: number) {
      return this.dossierMedicaleRepository.delete(id);
    }
}

