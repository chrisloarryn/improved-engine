import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Headers,
  Delete,
} from '@nestjs/common';
import { GreetingsService } from './greetings.service';
import { CreateGreetingDto } from './dto/create-greeting.dto';
import { UpdateGreetingDto } from './dto/update-greeting.dto';

@Controller('greetings')
export class GreetingsController {
  constructor(private readonly greetingsService: GreetingsService) {}

  @Post()
  create(@Body() createGreetingDto: CreateGreetingDto) {
    return this.greetingsService.create(createGreetingDto);
  }

  // /greetings
  @Get()
  sayHello(@Headers('X-Name') name: string) {
    return this.greetingsService.sayHello(name);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.greetingsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGreetingDto: UpdateGreetingDto,
  ) {
    return this.greetingsService.update(+id, updateGreetingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.greetingsService.remove(+id);
  }
}
