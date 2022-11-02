import { instruments } from "@prisma/client"
import { GetStaticPaths, InferGetStaticPropsType, GetStaticProps } from "next"
import { GetAllIds } from "../../functions/GetAllIds"
import { GetInstrument } from "../../functions/GetInstrument"

// view

const instrument = ({ instData }: InferGetStaticPropsType<GetStaticProps>) => {
    const keys = Object.keys(instData)
    return (
        <ul>
            {keys.map((k) => {
                return <li key={k}>{`${k}: ${instData[k]}`}</li>
            })}
        </ul>
    )
}

export default instrument

// data

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await GetAllIds()
    console.log(paths)
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const instData = params && (await GetInstrument(Number(params.id)))
    return {
        props: {
            instData: instData,
        },
    }
}
