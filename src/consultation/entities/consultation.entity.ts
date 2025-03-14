import { Medecin } from 'src/medecin/entities/medecin.entity';
import { Patient } from 'src/patient/entities/patient.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeInsert } from 'typeorm';

@Entity('consultation')
export class Consultation {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Patient, (patient) => patient.consultations, { nullable: false, eager: true })
    patient: Patient;

    @ManyToOne(() => Medecin, (medecin) => medecin.consultations, { nullable: false, eager: true })
    medecin: Medecin;

    @Column({ length: 255, nullable: true })
    title: string;

    @Column({ length: 255, nullable: true })
    description: string;

    @Column({ length: 255, nullable: true })
    remarque: string;

    @Column({nullable:true})
    dateconsultation: Date;
    @BeforeInsert()
    datevalue(){
        this.dateconsultation= new Date()
    }

    @Column({ length: 255, nullable: true })
    medicament: string;
}


