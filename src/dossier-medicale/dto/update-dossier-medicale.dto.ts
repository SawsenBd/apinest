import { PartialType } from '@nestjs/swagger';
import { CreateDossierMedicaleDto } from './create-dossier-medicale.dto';

export class UpdateDossierMedicaleDto extends PartialType(CreateDossierMedicaleDto) {}
