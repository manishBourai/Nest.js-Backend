import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from 'src/user/dto/register.User.Dto';

@Controller('/auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}
   
    @Get()
    getauth(){
        return this.authService.getauth()
    }
    @Post()
    register( @Body() registerUserDto: RegisterDto){
        return this.authService.createUser(registerUserDto)
    }
}
