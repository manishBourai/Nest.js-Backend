import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getNew():object{
    return {
      name:"john",
      lname:"Do",
      age:25,
      Address:"north"
    }
  }
}
