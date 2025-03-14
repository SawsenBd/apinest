import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}
 


   @Post("create")
   create(@Body() CreatePatientDto: CreatePatientDto) {
     return this.patientService.create(CreatePatientDto);
   }

  @Get("list")
  findAll( ) {
    return this.patientService.findAll();
  }

  @Get('detail/:id')
  findOne(@Param('id') id: string) {
    return this.patientService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientService.update(+id, updatePatientDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.patientService.remove(+id);
  }

}
