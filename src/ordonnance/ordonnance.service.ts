import { Injectable } from '@nestjs/common';
import { CreateOrdonnanceDto } from './dto/create-ordonnance.dto';
import { UpdateOrdonnanceDto } from './dto/update-ordonnance.dto';

@Injectable()
export class OrdonnanceService {
  create(createOrdonnanceDto: CreateOrdonnanceDto) {
    return 'This action adds a new ordonnance';
  }

  findAll() {
    return `This action returns all ordonnance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ordonnance`;
  }

  update(id: number, updateOrdonnanceDto: UpdateOrdonnanceDto) {
    return `This action updates a #${id} ordonnance`;
  }

  remove(id: number) {
    return `This action removes a #${id} ordonnance`;
  }
}
