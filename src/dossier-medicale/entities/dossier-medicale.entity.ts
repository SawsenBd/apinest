import { Medecin } from 'src/medecin/entities/medecin.entity';
import { Patient } from 'src/patient/entities/patient.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne ,OneToOne, JoinColumn} from 'typeorm';

@Entity('dossier_medicale')
export class DossierMedicale {
    @PrimaryGeneratedColumn()
    id: number;


    @ManyToOne(() => Medecin, (medecin) => medecin.consultations, { nullable: false, eager: true })
    medecin: Medecin;

    @Column({ length: 255, nullable: true })
    titre: string;

    @Column({ length: 255, nullable: true })
    code_matricule: string;

    @Column({ length: 255, nullable: true })
    description: string;

    @Column({ length: 255, nullable: true })
    statut: string;
     @OneToOne(() => Patient, (patient:Patient) => patient.dossierMedicales)
     @JoinColumn()
     patient: Patient;
}
