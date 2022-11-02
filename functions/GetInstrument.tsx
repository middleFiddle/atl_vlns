import { PrismaClient } from "@prisma/client"

export const GetInstrument = async (id: number) => {
    const prisma = new PrismaClient()

    const details = await prisma.instruments.findUnique({
        where: {
            id: id,
        },
    })
    console.log(details)

    return details
}
