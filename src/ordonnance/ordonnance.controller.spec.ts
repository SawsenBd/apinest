import { Test, TestingModule } from '@nestjs/testing';
import { OrdonnanceController } from './ordonnance.controller';
import { OrdonnanceService } from './ordonnance.service';

describe('OrdonnanceController', () => {
  let controller: OrdonnanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdonnanceController],
      providers: [OrdonnanceService],
    }).compile();

    controller = module.get<OrdonnanceController>(OrdonnanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
