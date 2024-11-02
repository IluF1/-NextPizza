import { HttpException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { GetAllPizzasDto } from './dto/getAllPizzas.dto'
import { PizzaDto } from './dto/pizza.dto'

@Injectable()
export class PizzaService {
    constructor(private prisma: PrismaService) {}

    async createPizza(dto: PizzaDto) {
        if (!dto) {
            throw new HttpException('Данные пустые', 400)
        }
        return this.prisma.pizza.create({
            data: {
                name: dto.name,
                description: dto.description,
                price: dto.price,
                imgUrl: dto.imageUrl,
                category: dto.category,
            },
        })
    }

    async getAllPizzas(dto: GetAllPizzasDto) {
        if (!dto.category) {
            throw new HttpException('Не указана категория пиццы', 400)
        }
        if (dto.category === 'all') {
            return await this.prisma.pizza.findMany()
        } else {
            return this.prisma.pizza.findMany({
                where: {
                    category: dto.category,
                },
            })
        }
    }
}
