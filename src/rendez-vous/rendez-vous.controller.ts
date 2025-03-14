import { Controller, Post, Get, Body, Param, Delete } from '@nestjs/common';
import { RendezVousService } from './rendez-vous.service';
import { RendezVous } from './entities/rendez-vous.entity';

@Controller('rendezvous')
export class RendezVousController {
  constructor(private readonly rendezVousService: RendezVousService) {}

  @Post('create')
  create(@Body() rdvData: Partial<RendezVous>) {
    return this.rendezVousService.create(rdvData);
  }

  @Get('list')
  findAll() {
    return this.rendezVousService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rendezVousService.findOne(+id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.rendezVousService.delete(+id);
  }
}

