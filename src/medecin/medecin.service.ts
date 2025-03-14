import { Injectable } from '@nestjs/common';
import { CreateMedecinDto } from './dto/create-medecin.dto';
import { UpdateMedecinDto } from './dto/update-medecin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Medecin } from './entities/medecin.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class MedecinService {
  constructor(
    @InjectRepository(Medecin)
    private readonly medecinRepository: Repository<Medecin>, // Utilisation correcte du repository
  ) {}

  async create(createMedecinDto: CreateMedecinDto) {
    const newMedecin = this.medecinRepository.create(createMedecinDto); // Utilisez le repository ici pour créer l'entité
    
    newMedecin.saltround = 10;
    const salt = await bcrypt.genSalt(newMedecin.saltround);
    console.log(salt);
    newMedecin.motDePasse = await this.hashPassword(newMedecin.motDePasse, newMedecin.saltround); // Attendez la promesse de hashage

    return this.medecinRepository.save(newMedecin); // Sauvegarde le médecin dans la base de données
  }

  findByEmail(email: string) {
    return this.medecinRepository.findOne({ where: { email: email } }); // Recherche un médecin par email
  }

  async hashPassword(password: string, saltround: number): Promise<string> {
    const hashedPassword = await bcrypt.hash(password, saltround); // Hash du mot de passe
    return hashedPassword;
  }

  findAll(): Promise<Medecin[]> {
    return this.medecinRepository.find(); // Récupère tous les médecins
  }

  findOne(id: number) {
    return this.medecinRepository.findOne({ where: { id: id } }); // Recherche un médecin par ID
  }

  update(id: number, updateUserDto: UpdateMedecinDto) {
    return this.findOne(id); // Met à jour un médecin (logique de mise à jour à compléter)
  }

  remove(id: number) {
    return this.medecinRepository.delete(id); // Supprime un médecin par ID
  }
}
