import { Body, Controller, Post } from '@nestjs/common'
import { GetAllPizzasDto } from './dto/getAllPizzas.dto'
import { PizzaDto } from './dto/pizza.dto'
import { PizzaService } from './pizza.service'

@Controller('/pizza')
export class PizzaController {
    constructor(private readonly pizzaService: PizzaService) {}

    @Post('/createPizza')
    async createPizza(@Body() dto: PizzaDto) {
        return this.pizzaService.createPizza(dto)
    }

    @Post('/getAllPizzas')
    async getAllPizzas(@Body() dto: GetAllPizzasDto) {
        return this.pizzaService.getAllPizzas(dto)
    }
}
