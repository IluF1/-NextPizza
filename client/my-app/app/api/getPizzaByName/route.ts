import { prisma } from '@/src/components/Helpers/prisma'
import { NextResponse } from 'next/server'

export const POST = async (req: Request) => {
    try {
        const { name } = await req.json()

        const search = await prisma.pizza.findMany({
            where: {
                name: {
                    contains: name,
                    mode: 'insensitive',
                },
            },
        })

        return NextResponse.json(search, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: String(err) }, { status: 400 })
    }
}
