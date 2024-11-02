import { Module } from '@nestjs/common';
import { PizzaModule } from './pizza/pizza.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PizzaModule, AuthModule],
})
export class AppModule {}
