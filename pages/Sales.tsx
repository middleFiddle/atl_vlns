import { instruments, PrismaClient } from '@prisma/client'

import React from 'react'

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const instruments = await prisma.instruments.findMany({
    where: {
      sold: "false"
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
  sold: string
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
            <span>
              {i.sold}
            </span>
          </div>
        </li>)}
      </ul>

    </div>
  )

}

export default Sales
