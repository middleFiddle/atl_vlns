import { instruments, PrismaClient } from "@prisma/client"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import Image from "next/image"
import Link from "next/link"

const Sales = ({ instruments }: InferGetStaticPropsType<GetStaticProps>) => {
    const fallbackImg = "/theShop.png"
    return (
        <ul id="sales-bucket" className="container w-75 d-flex flex-column">
            {instruments.map((inst: instruments) => (
                <Link href={`/instruments/${inst.id}`} key={inst.id}>
                    <a>
                        <li className="card d-flex flex-row w-100 justify-content-around my-4">
                            <div className="card-img-center w-75">
                                <Image
                                    src={fallbackImg}
                                    alt={`This is a picture of an instrument made in ${inst.date_made} by ${inst.maker} working from ${inst.origin}`}
                                    width={431}
                                    height={233}
                                    className="blur"
                                />
                                <div className="card-text p-4 text-dark text-justify w-75 ">
                                    <p>{inst.description}</p>
                                    <p>{inst.sounds_like}</p>
                                </div>
                            </div>
                            <div className="card-body w-50">
                                <div className="card-title d-flex flex-column h-100 justify-content-around text-dark text-justify ">
                                    <div>
                                        <h5>Maker</h5>
                                        <h1>{inst.maker}</h1>
                                    </div>
                                    <div>
                                        <h5>Vintage</h5>
                                        <h2>{inst.date_made}</h2>
                                    </div>
                                    <div>
                                        <h5>City of Origin</h5>
                                        <h2>{inst.origin}</h2>
                                    </div>
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
