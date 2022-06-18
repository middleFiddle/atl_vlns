import Head from 'next/head'
import path from 'path'
import { promises as fs } from 'fs'
import Accordion from '../components/Accordion'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Rental from './home-assets/rental.mdx'
import Sales from './home-assets/sales.mdx'
import Workshop from './home-assets/workshop.mdx'
import Story from './home-assets/story.mdx'
import Directions from './home-assets/directions.mdx'

export async function getStaticProps() {
  const directory = path.join(process.cwd(), '/pages/home-assets')

  const filePath = path.join(directory, 'homeData.json')
  const accordion = await fs.readFile(filePath, 'utf8')
  return {
    props: {
      accordion,
    },
  }
}

export default function Home({ accordion }: any) {
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
        <Accordion accordion={accordion}>
          <Rental />
          <Sales />
          <Workshop />
          <Story />
          <Directions />
        </Accordion>
      </main>

      <footer></footer>
    </div>
  )
}
