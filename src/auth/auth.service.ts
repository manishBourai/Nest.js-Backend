import { Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/user/dto/register.User.Dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService){}
    getauth():string{
        return "test"
    }
    createUser( dto: RegisterDto){
        return this.userService.createUser(dto)
    }
}
