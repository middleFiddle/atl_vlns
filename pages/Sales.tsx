import { PrismaClient } from '@prisma/client'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const instruments = await prisma.instruments.findMany()

  return {
    props: { instruments }
  }
}

type Each = {

  id: number
  maker: string
  sku: number
  description: string
  origin: string
  sounds_like: string
  date_made: string
  image_path: string
  audio_path: string
  is_setup: string
  is_sold: string

}

const Sales = (props: InferGetStaticPropsType<GetStaticProps>) => {
  return (


    <ul className="container grid">
      {props.instruments.map((inst: Each) => (
        <li className="card" key={inst.id}>{inst.maker}</li>
      ))}
    </ul>


  )
}

export default Sales
