import { instruments, PrismaClient } from "@prisma/client"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import Image from "next/image"
import Link from "next/link"

const Sales = ({ instruments }: InferGetStaticPropsType<GetStaticProps>) => {
    const fallbackImg = "/theShop.png"
    return (
        <ul id="sales-bucket" className="container">
            {instruments.map((inst: instruments) => (
                <Link href={`/instruments/${inst.id}`} key={inst.id}>
                    <a>
                        <li className="card w-25">
                            <div className="card-img-top">
                                <Image
                                    src={fallbackImg}
                                    alt={`This is a picture of an instrument made in ${inst.date_made} by ${inst.maker} working from ${inst.origin}`}
                                    width={431}
                                    height={233}
                                />
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <h1>{inst.maker}</h1>
                                    <h2>{inst.date_made}</h2>
                                    <h3>{inst.origin}</h3>
                                </div>
                                <div className="card-text">
                                    <p>{inst.description}</p>
                                    <p>{inst.sounds_like}</p>
                                </div>
                            </div>
                        </li>
                    </a>
                </Link>
            ))}
        </ul>
    )
}

export default Sales

export const getStaticProps: GetStaticProps = async () => {
    const prisma = new PrismaClient()
    const instruments = await prisma.instruments.findMany()

    return {
        props: { instruments },
    }
}
