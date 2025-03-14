
import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards
  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDTO } from 'src/user/dto/create-user.dto';

  
  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: SignInDTO): Promise<any> {
        console.log("user",signInDto)
      return this.authService.signIn(signInDto.email, signInDto.motDePasse);
    }
  
    @HttpCode(HttpStatus.OK)
    @Post('patient-login')
    signInPatient(@Body() signInDto: SignInDTO): Promise<any> {
        console.log("user",signInDto)
      return this.authService.signInPatient(signInDto.email, signInDto.motDePasse);
    }
    @HttpCode(HttpStatus.OK)
    @Post('medecin-login')
    signInMedecin(@Body() signInDto: SignInDTO): Promise<any> {
        console.log("user",signInDto)
      return this.authService.signInMedecin(signInDto.email, signInDto.motDePasse);
    }
  


  }
  