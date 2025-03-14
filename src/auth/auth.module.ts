import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { PatientModule} from 'src/patient/patient.module';
import { MedecinModule } from 'src/medecin/medecin.module';
import { RendezVousModule } from 'src/rendez-vous/rendez-vous.module';
import { ConsultationModule } from 'src/consultation/consultation.module';
import { DossierMedicaleModule } from 'src/dossier-medicale/dossier-medicale.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports:[UserModule,PatientModule,MedecinModule, RendezVousModule, ConsultationModule, DossierMedicaleModule,
    JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),]
})
export class AuthModule {}
