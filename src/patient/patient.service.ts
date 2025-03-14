import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';


@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
  ) {}
  async create(CreatePatientDto: CreatePatientDto) {
    const newPatient = this.patientRepository.create(CreatePatientDto);
   
    newPatient.saltround=10
    const salt = await bcrypt.genSalt(newPatient.saltround); 
    console.log(salt)
    newPatient.motDePasse = (await this.hashPassword(newPatient.motDePasse,newPatient.saltround)).toString()
    return  this.patientRepository.save(newPatient);
  
  }
      
  findByEmail(email:string){
    return this.patientRepository.findOne({where:{email:email}})
  }
async hashPassword(password: string,saltround:number): Promise<string> {
       
  const hashedPassword = await(bcrypt.hash(password, saltround))
  return hashedPassword;


}

  findAll(): Promise<Patient[]> {
    return this.patientRepository.find();
  }

  findOne(id: number) {
    return this.patientRepository.findOne({ where: { id:id } });
  }

  update(id: number, updateUserDto: UpdatePatientDto){
    return this.findOne(id);
  }

  remove(id: number) {
    return this.patientRepository.delete(id);
  }
  
}