import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Consultation } from './entities/consultation.entity';


@Injectable()
export class ConsultationService {
  constructor(
    @InjectRepository(Consultation)
    private consultationRepository: Repository<Consultation>,
  ) {}
  
  create(consultationData: Partial<Consultation>) {
    const consultation = this.consultationRepository.create(consultationData);
    return this.consultationRepository.save(consultation);
  }

  findAll() {
    return this.consultationRepository.findAndCount();
  }

  findOne(id: number) {
    return this.consultationRepository.findOne({ where: { id } });
  }

  delete(id: number) {
    return this.consultationRepository.delete(id);
  }
}

