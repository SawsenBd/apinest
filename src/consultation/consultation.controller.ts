import { Controller, Post, Get, Body, Param, Delete } from '@nestjs/common';
import { ConsultationService } from './consultation.service';
import { Consultation } from './entities/consultation.entity';

@Controller('consultation')
export class ConsultationController {
  constructor(private readonly consultationService: ConsultationService) {}

  @Post('create')
  create(@Body() consultationData: Partial<Consultation>) {
    return this.consultationService.create(consultationData);
  }

  @Get('list')
  findAll() {
    return this.consultationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consultationService.findOne(+id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.consultationService.delete(+id);
  }
}


