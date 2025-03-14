
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { PatientService} from '../patient/patient.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import * as bcrypt from 'bcrypt';
import { MedecinService } from 'src/medecin/medecin.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private patientService: PatientService,
    private medecinService: MedecinService,
    private jwtService: JwtService
  ) {}
  async signIn(email: string, pass: string): Promise<any> {
    console.log("user",email)

    const userdata = await this.usersService.findByEmail(email);
    console.log("user",userdata)
    if (!(await bcrypt.compare(pass, String(userdata?.motDePasse))) ) {
      throw new UnauthorizedException();
    }
    const payload = { id: userdata?.id, email: userdata?.email };
    console.log()
    return {
      access_token: await this.jwtService.signAsync(payload,{secret: jwtConstants.secret}),
    };
 
 
  }
  async signInPatient(email: string, pass: string): Promise<any> {
    console.log("user",email)

    const userdata = await this.patientService.findByEmail(email);
    console.log("user",userdata)
    if (!(await bcrypt.compare(pass, String(userdata?.motDePasse))) ) {
      throw new UnauthorizedException();
    }
    const payload = { id: userdata?.id, email: userdata?.email };
    console.log()
    return {
      access_token: await this.jwtService.signAsync(payload,{secret: jwtConstants.secret}),
    };

}
async signInMedecin(email: string, pass: string): Promise<any> {
  console.log("user",email)

  const userdata = await this.medecinService.findByEmail(email);
  console.log("user",userdata)
  if (!(await bcrypt.compare(pass, String(userdata?.motDePasse))) ) {
    throw new UnauthorizedException();
  }
  const payload = { id: userdata?.id, email: userdata?.email };
  console.log()
  return {
    access_token: await this.jwtService.signAsync(payload,{secret: jwtConstants.secret}),
  };

}

}
