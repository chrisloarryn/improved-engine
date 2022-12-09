import { Injectable } from '@nestjs/common';
import { CreateGreetingDto } from './dto/create-greeting.dto';
import { UpdateGreetingDto } from './dto/update-greeting.dto';
import { Greeting } from './entities/greeting.entity';

@Injectable()
export class GreetingsService {
  create(createGreetingDto: CreateGreetingDto) {
    return 'This action adds a new greeting';
  }

  findAll() {
    return `This action returns all greetings`;
  }

  sayHello(name = 'lolocar'): Greeting {
    return {
      message: `Hello ${name}!`,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} greeting`;
  }

  update(id: number, updateGreetingDto: UpdateGreetingDto) {
    return `This action updates a #${id} greeting`;
  }

  remove(id: number) {
    return `This action removes a #${id} greeting`;
  }
}
