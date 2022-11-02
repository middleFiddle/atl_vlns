import { PrismaClient } from "@prisma/client"

export const UpdateImagePath = async (id: number, img: string) => {
    console.log("function called")
    const prisma = new PrismaClient()
    console.log("prisma")
    const update = await prisma.instruments.update({
        where: {
            id: id,
        },
        data: {
            image_path: img,
        },
    })
    console.log(update)

    return update
}
