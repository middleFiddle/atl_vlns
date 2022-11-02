import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

export default async function helloApi(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const stuff = GetAllIds()
    return res.json({ hello: "world" })
}
