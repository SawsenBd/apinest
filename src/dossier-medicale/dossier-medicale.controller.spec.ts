import { Test, TestingModule } from '@nestjs/testing';
import { DossierMedicaleController } from './dossier-medicale.controller';
import { DossierMedicaleService } from './dossier-medicale.service';

describe('DossierMedicaleController', () => {
  let controller: DossierMedicaleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DossierMedicaleController],
      providers: [DossierMedicaleService],
    }).compile();

    controller = module.get<DossierMedicaleController>(DossierMedicaleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
