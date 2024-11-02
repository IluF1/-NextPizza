import { prisma } from '@/src/components/Helpers/prisma'
import { NextResponse } from 'next/server'

export const POST = async (req: Request) => {
    try {
        const body = await req.json()

        if (!body) {
            return NextResponse.json({ error: 'body is required' }, { status: 400 })
        }

        const createPizza = await prisma.pizza.create({
            data: {
                name: body.name,
                price: body.price,
                ingredients: body.ingredients,
                category: body.category.toLowerCase(),
                imgUrl: body.imgUrl,
            },
        })

        return NextResponse.json(createPizza, { status: 201 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: 'Failed to create pizza' }, { status: 500 })
    }
}
