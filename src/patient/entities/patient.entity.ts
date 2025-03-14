import { Consultation } from 'src/consultation/entities/consultation.entity';
import { DossierMedicale } from 'src/dossier-medicale/entities/dossier-medicale.entity';
import { RendezVous } from 'src/rendez-vous/entities/rendez-vous.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany ,OneToOne } from 'typeorm';
@Entity("patient")
export class Patient {
    @PrimaryGeneratedColumn()
    id: number; // Clé primaire auto-incrémentée
  
    @Column({ length: 50,nullable:true })
    nom: string; // Nom de l'utilisateur
  
    @Column({ length: 50 ,nullable:true})
    prenom: string; // Prénom de l'utilisateur
  
    @Column({ unique: true,nullable:true })
    email: string; // Adresse e-mail unique
  
    @Column({nullable:true})
    motDePasse: string; // Mot de passe de l'utilisateur
  
    @Column({ length: 20 ,nullable:true})
    rue: string; 
    @Column({nullable:true})
    codePostale:string;
    @Column({nullable:true})
    ville: string;
    @Column({nullable:true})
    dateCreation: Date;
    @Column({nullable:true})
    dateModification: Date;
    @Column({nullable:true})
    dateSuppression: Date;
    @Column({  nullable:true })
    saltround: number;
    
    @OneToMany(() => RendezVous, (rendezVous) => rendezVous.patient)
    rendezVous: RendezVous[];
    
    
    @OneToMany(() => Consultation, (consultation) => consultation.patient)
    consultations: Consultation[];

    @OneToOne(() => DossierMedicale, (dossierMedicale) => dossierMedicale.patient)
    dossierMedicales: DossierMedicale;



}
