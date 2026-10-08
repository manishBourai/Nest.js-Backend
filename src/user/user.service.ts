import { Body, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.User.Dto';

@Injectable()
export class UserService {
    createUser( @Body() registerDto: RegisterDto){
        const {name,lName,address,age}=registerDto
        return {
            name,
            lName,
            address,
            age
        }
    }
}
