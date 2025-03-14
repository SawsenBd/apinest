import { Test, TestingModule } from '@nestjs/testing';
import { DossierMedicaleService } from './dossier-medicale.service';

describe('DossierMedicaleService', () => {
  let service: DossierMedicaleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DossierMedicaleService],
    }).compile();

    service = module.get<DossierMedicaleService>(DossierMedicaleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
