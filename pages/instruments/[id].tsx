import { GetAllIds } from "../../functions/GetAllIds"
import { GetInstrument } from "../../functions/GetInstrument"

const instrument = ({ instData }) => {
    const keys = Object.keys(instData)
    return (
        <ul>
            {keys.map((k) => {
                return <li>{`${k}: ${instData[k]}`}</li>
            })}
        </ul>
    )
}

export default instrument

export async function getStaticPaths() {
    const paths = await GetAllIds()
    console.log(paths)
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const instData = await GetInstrument(Number(params.id))
    return {
        props: {
            instData,
        },
    }
}
