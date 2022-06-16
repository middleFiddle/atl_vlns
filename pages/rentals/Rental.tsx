import Head from 'next/head'

import Accordion from '../components/Accordion'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import How from './how.mdx'
import Why from './why.mdx'
import For from './for.mdx'
import { nanoid } from 'nanoid'

const Rental = () => {
  const accordion = [
    {
      header: 'How It Works',
      prompt: ``,
      linkRef: '',
      linkTxt: '',

      bs: 'One',
      id: 'How',
    },
    {
      header: 'Why Renting is in Your Best Interest',

      prompt: '',
      linkRef: '',
      linkTxt: '',

      bs: 'Two',
      id: 'Why',
    },
    {
      header: 'Our Program Grows With You',

      prompt: '',
      linkRef: '',
      linkTxt: '',

      bs: 'Three',
      id: 'For',
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
        <Banner title="Our Rental Program" />
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

export default Rental
