import Head from 'next/head'

import Accordion from './components/Accordion'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Rental from './home/rental.mdx'
import Sales from './home/sales.mdx'
import Workshop from './home/workshop.mdx'
import Story from './home/story.mdx'
import Directions from './home/directions.mdx'
import { nanoid } from 'nanoid'

export default function Home() {
  const accordion = [
    {
      header: 'Our Rental Program',
      body: Rental(),
      prompt: `Learn more about `,
      linkRef: '/rentals/Rental',
      linkTxt: 'how our program works',
      key: nanoid(),
      bs: 'One',
      id: 'Rentals',
    },
    {
      header: 'The Sales Gallery',
      body: Sales(),
      prompt: `Make an appointment to work with our on staff musicians `,
      linkRef: '/sales/Sale',
      linkTxt: 'to find your next instrument',
      key: nanoid(),
      bs: 'Two',
      id: 'Sales',
    },
    {
      header: 'Workshop',
      body: Workshop(),
      prompt: `Make an appointment `,
      linkRef: '/workshop/Workshop',
      linkTxt: 'to see our luthiers',
      key: nanoid(),
      bs: 'Three',
      id: 'Workshop',
    },
    {
      header: 'Who We Are',
      body: Story(),
      prompt: `Read more about our team here. `,
      linkRef: '/story/Story',
      linkTxt: 'here',
      key: nanoid(),
      bs: 'Four',
      id: 'Story',
    },
    {
      header: 'Directions',
      body: Directions(),
      prompt: `Make an appointment `,
      linkRef: '/directions/Direction',
      linkTxt: 'to see our luthiers',
      key: nanoid(),
      bs: 'Five',
      id: 'Directions',
    },
  ]

  return (
    <div>
      <Head>
        <title>Atlanta Violins</title>
        <meta name="viewport" content="width=device-width, initial-scale-=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container d-flex flex-column justify-content-center fluid bg-light">
        <Banner title="Welcome to Our Shop" />
        <Accordion accordion={accordion} />
      </main>

      <footer></footer>
    </div>
  )
}
