import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RendezVous } from './entities/rendez-vous.entity';


@Injectable()
export class RendezVousService {
  constructor(
    @InjectRepository(RendezVous)
    private rendezVousRepository: Repository<RendezVous>,
  ) {}

  create(rdvData: Partial<RendezVous>) {
    const rdv = this.rendezVousRepository.create(rdvData);
    return this.rendezVousRepository.save(rdv);
  }

  findAll() {
    return this.rendezVousRepository.findAndCount();
  }

  findOne(id: number) {
    return this.rendezVousRepository.findOne({ where: { id } });
  }

  delete(id: number) {
    return this.rendezVousRepository.delete(id);
  }
}
