export class CreateUserDto {}
 export class SignInDTO{
    role(email: string, motDePasse: string, role: any): Promise<any> {
      throw new Error('Method not implemented.')
    }
    email:string
    motDePasse:string
  
 }