import { instruments, PrismaClient } from '@prisma/client'

import React from 'react'

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const instruments = await prisma.instruments.findMany({
    where: {
      is_sold: "false"
    }
  })
  return {
    props: { instruments }
  }
}

type InstrumentProps = {
  id: number
  maker: string
  sku: number
  description: string
  origin: string
  sounds_like: string
  date_made: string
  image_path: string
  audio_path: string
  is_sold: string
  is_setup: string
}


const Sales: React.FC<{ instruments: InstrumentProps[] }> = ({ instruments }) => {
  console.log(instruments)

  return (
    <div>
      <h3>
        Instruments for Sale
      </h3>
      <ul>
        {instruments.map((i) => <li key={i.id}>
          <div className="card">
            <span>
              {i.maker}
            </span>
            <span>
              {i.origin}
            </span>
            <span>
              {i.date_made}
            </span>
          </div>
        </li>)}
      </ul>

    </div>
  )

}

export default Sales
