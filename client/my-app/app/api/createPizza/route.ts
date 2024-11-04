import { prisma } from '@/src/components/Helpers/prisma'
import { NextResponse } from 'next/server'

export enum Categories {
    MEAT = 'MEAT',
    WITHMEAT = 'WITHMEAT',
    VEGAN = 'VEGAN',
    SPICY = 'SPICY',
}

export const POST = async (req: Request) => {
    try {
        const body = await req.json()

        if (!body) {
            return NextResponse.json({ error: 'Поля не должны быть пустыми' }, { status: 400 })
        }

        const { name, price, category, imgUrl, ingredients, testType, collected, size } = body
        const existingIngredients = await prisma.ingredients.findMany({
            where: {
                name: {
                    in: ingredients.map((ingredient: { name: string }) => ingredient.name),
                },
            },
        })

        const existingIngredientNames = existingIngredients.map((ingredient: { name: any }) => ingredient.name)
        const newIngredients = ingredients.filter((ingredient: { name: string }) => !existingIngredientNames.includes(ingredient.name))

        const createPizza = await prisma.pizza.create({
            data: {
                name: name,
                price: price,
                category: category,
                imgUrl: imgUrl,
                ingredients: {
                    connect: existingIngredients.map((ingredient: { id: any }) => ({ id: ingredient.id })),
                    create: newIngredients.map((ingredient: { name: string; price: number }) => ({
                        name: ingredient.name,
                        price: ingredient.price,
                    })),
                },
                testType: testType,
                collected: collected,
                size: size,
            },
        })

        return NextResponse.json(createPizza, { status: 201 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: 'Ошибка, создания пиццы' }, { status: 500 })
    }
}
