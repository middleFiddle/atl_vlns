import { NextApiRequest, NextApiResponse } from "next"
import { UpdateImagePath } from "../../functions/UpdateImagePath"

export default async function updateImage(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const data = req.body
    console.log(data.id, data.path)
    const update = await UpdateImagePath(Number(data.id), data.path)

    return res.json({ hello: "world" })
}
