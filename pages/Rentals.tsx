import Head from 'next/head'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { promises as fs } from 'fs'
import path from 'path'
import CallToAction from '../components/CallToAction'
import Accordion from '../components/Accordion'
import RentCalculator from '../components/RentCalculator'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import How from './rental-assets/how.mdx'
import Why from './rental-assets/why.mdx'
import For from './rental-assets/for.mdx'

export async function getStaticProps() {
  const directory = path.join(process.cwd(), '/pages/rental-assets')
  const filePath = path.join(directory, 'rentalData.json')
  const accordion = await fs.readFile(filePath, 'utf8')

  const prices = {
    "violin": {
      "equity": 18,
      "maintenance": 6
    },
    "viola": {
      "equity": 27,
      "maintenance": 6
    },
    "cello": {
      "equity": 33,
      "maintenance": 8
    },
    "bass": {
      "equity": 67,
      "maintenance": 9
    }
  }






  return {

    props: {
      accordion,
      prices
    },
  }
}

const Rentals = ({ accordion, prices }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(accordion)
  return (
    <div>
      <Head>
        <title>Atlanta Violins</title>
        <meta name="viewport" content="width=device-width, initial-scale-=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Navbar />
      <main className="container d-flex flex-column justify-content-center fluid ">
        <Banner title="Our Rental Program" />
        <RentCalculator priceSheet={prices} ></RentCalculator>
        <CallToAction action="Start a Rental" href="https://online.atlantaviolins.com/aerntschoolselect.aspx"
        ><></></CallToAction>
        <Accordion accordion={accordion}>
          <How />
          <Why />
          <For />
        </Accordion>
      </main>

      <footer></footer>
    </div>
  )
}

export default Rentals
