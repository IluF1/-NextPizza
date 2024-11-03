import { prisma } from '@/src/components/Helpers/prisma'
import { NextResponse } from 'next/server'

export const POST = async (req: Request) => {
    try {
        const body = await req.json()

        if (body.category === 'ALL' || !body.category) {
            return NextResponse.json(
                await prisma.pizza.findMany({
                    include: {
                        ingredients: true,
                    },
                }),
                { status: 200 }
            )
        } else {
            return NextResponse.json(
                await prisma.pizza.findMany({
                    where: {
                        category: body.category,
                    },
                    include: {
                        ingredients: true,
                    },
                }),
                { status: 200 }
            )
        }
    } catch (err) {
        return NextResponse.error()
    }
}
