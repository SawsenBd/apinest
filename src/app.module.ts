import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PatientModule } from './patient/patient.module';
import { MedecinModule } from './medecin/medecin.module';
import { AuthModule } from './auth/auth.module';
import { RendezVousModule } from './rendez-vous/rendez-vous.module';
import { ConsultationModule } from './consultation/consultation.module';
import { DossierMedicaleModule } from './dossier-medicale/dossier-medicale.module';
import { OrdonnanceModule } from './ordonnance/ordonnance.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: "localhost",
      port:3306 ,
      username: "root",
      password: "",
      database: "system_medical",
      autoLoadEntities:true,
      synchronize: true, 
    }),
    UserModule,
    PatientModule,
    MedecinModule,
    AuthModule,
    RendezVousModule,
    ConsultationModule,
    DossierMedicaleModule,
    OrdonnanceModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
