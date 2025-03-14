import { PartialType } from '@nestjs/swagger';
import { CreateOrdonnanceDto } from './create-ordonnance.dto';

export class UpdateOrdonnanceDto extends PartialType(CreateOrdonnanceDto) {}
