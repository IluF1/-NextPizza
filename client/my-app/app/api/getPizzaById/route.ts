import { NextResponse } from 'next/server'
import { prisma } from './../../../src/components/Helpers/prisma'

export const POST = async (req: Request) => {
    try {
        const { id } = await req.json()
        return NextResponse.json(
            await prisma.pizza.findUnique({
                where: {
                    id: id,
                },
            })
        )
    } catch (err) {
        return NextResponse.json({ message: err }, { status: 404 })
    }
}
