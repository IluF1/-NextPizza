import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class PizzaDto {
    @IsNumber()
    @ApiProperty({
        description: ' уникальный id пиццы',
        type: 'integer',
        example: 1,
    })
    readonly id: number

    @IsString()
    @ApiProperty({
        description: 'Имя пиццы',
        type: 'string',
        example: 'Маргарита',
    })
    readonly name: string

    @IsString()
    @ApiProperty({
        description: 'Описание пиццы',
        type: 'string',
        example: 'Пицца с курицей, маргаритой и томатным соусом',
    })
    readonly description: string

    @ApiProperty({
        description: 'Цена пиццы',
        type: 'integer',
        example: '100',
    })
    @IsNumber()
    readonly price: number

    @ApiProperty({
        description: 'URL изображения пиццы',
        type: 'string',
        example: 'https://example.com/image.jpg',
    })
    @IsString()
    readonly imageUrl: string

    @ApiProperty({
        description: 'Категории пиццы',
        type: 'string',
        example: 'meat',
    })
    @IsString()
    readonly category: string
}
