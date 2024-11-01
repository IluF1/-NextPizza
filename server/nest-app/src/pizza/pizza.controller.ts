import { Controller, Get, Post } from '@nestjs/common'
import { PizzaService } from './pizza.service'

@Controller('api/pizza')
export class PizzaController {
    constructor(private readonly pizzaService: PizzaService) {}

    @Post('/createPizza')
    async createPizza() {}

    @Get('/getAllPizzas')
    async getAllPizzas() {}
}
