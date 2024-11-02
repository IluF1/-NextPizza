import { prisma } from '@/src/components/Helpers/prisma'
import { NextResponse } from 'next/server'

export const POST = async (req: Request) => {
    const body = await req.json()

    if (body.category.toLowerCase() === 'все' || !body.category) {
        return NextResponse.json(await prisma.pizza.findMany())
    } else {
        return NextResponse.json(
            await prisma.pizza.findMany({
                where: {
                    category: body.category.toLowerCase(),
                },
            })
        )
    }
}
