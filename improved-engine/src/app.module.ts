import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GreetingsModule } from './modules/greetings/greetings.module';

@Module({
  imports: [GreetingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
