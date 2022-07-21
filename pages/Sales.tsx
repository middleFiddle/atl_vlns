import { PrismaClient } from '@prisma/client'
import { InferGetStaticPropsType } from 'next'

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const instruments = await prisma.instruments.findMany()

  return {
    props: { instruments }
  }
}

const Sales = ({ instruments }:InferGetStaticPropsType) => {
  return (


    <ul className="container grid">
      {instruments.map(inst => (
        <li className="card" key={inst.id}>{inst.maker}</li>
      ))}
    </ul>


  )
}

export default Sales
