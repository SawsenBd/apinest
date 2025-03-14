import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdonnanceService } from './ordonnance.service';
import { CreateOrdonnanceDto } from './dto/create-ordonnance.dto';
import { UpdateOrdonnanceDto } from './dto/update-ordonnance.dto';

@Controller('ordonnance')
export class OrdonnanceController {
  constructor(private readonly ordonnanceService: OrdonnanceService) {}

  @Post()
  create(@Body() createOrdonnanceDto: CreateOrdonnanceDto) {
    return this.ordonnanceService.create(createOrdonnanceDto);
  }

  @Get()
  findAll() {
    return this.ordonnanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordonnanceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdonnanceDto: UpdateOrdonnanceDto) {
    return this.ordonnanceService.update(+id, updateOrdonnanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordonnanceService.remove(+id);
  }
}
