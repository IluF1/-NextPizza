import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

enum Category {
    All = 'all',
    Meat = 'meat',
    Vegetarian = 'vegan',
    Spicy = 'spicy',
    Sweet = 'sweet',
}
export class GetAllPizzasDto {
    @IsString()
    @ApiProperty({
        description: 'Категория пиццы',
        enum: Category,
        example: 'all',
    })
    category?: string
}
