import { Medecin } from 'src/medecin/entities/medecin.entity';
import { Patient } from 'src/patient/entities/patient.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeInsert, BeforeUpdate, JoinTable } from 'typeorm';



@Entity('rendez_vous')
export class RendezVous {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Patient, (patient) => patient.rendezVous, { nullable: false, eager: true })

  patient: number;

  @ManyToOne(() => Medecin, (medecin) => medecin.rendezVous, { nullable: false, eager: true })

  medecin: number;

  @Column({ type: 'timestamp', nullable: false })
  date_rdv: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  statut: string;
  @Column({ type: 'varchar', length: 255, nullable: true })
  notes_medecin: string;
  @Column({ type: 'timestamp', nullable: true })
  createAt:Date
  @Column({ type: 'timestamp', nullable: true })
  updateAT:Date
  @Column({ type: 'boolean', nullable: true })
  active:boolean
  @BeforeInsert()
  dateCreate(){
    this.createAt= new Date()
  }
  @BeforeUpdate()
   dateUpdate(){
    this.updateAT= new Date()
  }
}
