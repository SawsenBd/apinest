import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { DossierMedicaleService } from './dossier-medicale.service';
import { DossierMedicale } from './entities/dossier-medicale.entity';


@Controller('dossier-medicale')
export class DossierMedicaleController {
  constructor(private readonly dossierMedicaleService: DossierMedicaleService) {}
  
    @Post('create')
    create(@Body() dossierMedicaleData: Partial<DossierMedicale>) {
      return this.dossierMedicaleService.create(dossierMedicaleData);
    }
  
    @Get('list')
    findAll() {
      return this.dossierMedicaleService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.dossierMedicaleService.findOne(+id);
    }
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.dossierMedicaleService.delete(+id);
    }
}

