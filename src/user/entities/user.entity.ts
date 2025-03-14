import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number; // Clé primaire auto-incrémentée

  @Column({ length: 50 ,nullable:true })
  nom: string; // Nom de l'utilisateur

  @Column({ length: 50  ,nullable:true})
  prenom: string; // Prénom de l'utilisateur

  @Column({ unique: true ,nullable:true })
  email: string; // Adresse e-mail unique

  @Column({nullable:true})
  motDePasse: string; // Mot de passe de l'utilisateur

  @Column({ length: 20 , nullable:true})
  role: string; // Rôle de l'utilisateur (patient, médecin, admin
  @Column({  nullable:true })
  saltround: number;
 
}
