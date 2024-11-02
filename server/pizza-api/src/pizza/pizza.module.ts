import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma.module'
import { PizzaController } from './pizza.controller'
import { PizzaService } from './pizza.service'

@Module({
    controllers: [PizzaController],
    providers: [PizzaService],
    imports: [PrismaModule],
})
export class PizzaModule {}
