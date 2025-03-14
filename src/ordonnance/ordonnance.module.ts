import { Module } from '@nestjs/common';
import { OrdonnanceService } from './ordonnance.service';
import { OrdonnanceController } from './ordonnance.controller';

@Module({
  controllers: [OrdonnanceController],
  providers: [OrdonnanceService],
})
export class OrdonnanceModule {}
