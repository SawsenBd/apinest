import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
   
    newUser.saltround=10
    const salt = await bcrypt.genSalt(newUser.saltround); 
    console.log(salt)
    newUser.motDePasse = (await this.hashPassword(newUser.motDePasse,newUser.saltround)).toString()
    return  this.userRepository.save(newUser);
  
  }
      
  findByEmail(email:string){
    return this.userRepository.findOne({where:{email:email}})
  }
async hashPassword(password: string,saltround:number): Promise<string> {
       
  const hashedPassword = await(bcrypt.hash(password, saltround))
  return hashedPassword;


}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id:id } });
  }

  update(id: number, updateUserDto: UpdateUserDto){
    return this.findOne(id);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}