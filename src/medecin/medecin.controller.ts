import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedecinService} from './medecin.service';
import { CreateMedecinDto} from './dto/create-medecin.dto';
import { UpdateMedecinDto } from './dto/update-medecin.dto';

@Controller('medecin')
export class MedecinController {
  constructor(private readonly medecinService: MedecinService) {}

  @Post("create")
  create(@Body() CreateMedecinDto: CreateMedecinDto) {
    return this.medecinService.create(CreateMedecinDto);
  }

  @Get("list")
  findAll( ) {
    return this.medecinService.findAll();
  }

  @Get('detail/:id')
  findOne(@Param('id') id: string) {
    return this.medecinService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() UpdateMedecinDto: UpdateMedecinDto) {
    return this.medecinService.update(+id, UpdateMedecinDto);
  }

  @Delete('delete:id')
  remove(@Param('id') id: string) {
    return this.medecinService.remove(+id);
  }
}
