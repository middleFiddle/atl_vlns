import { PrismaClient } from "@prisma/client"

export const GetAllIds = async () => {
    const prisma = new PrismaClient()
    const instIDs = await prisma.instruments.findMany({
        select: {
            id: true,
        },
    })

    return instIDs.map((i) => {
        return {
            params: {
                id: String(i.id),
            },
        }
    })
}
