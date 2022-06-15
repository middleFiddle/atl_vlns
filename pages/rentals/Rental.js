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
      body: How(),
      prompt: ``,
      linkRef: '',
      linkTxt: '',
      key: nanoid(),
      bs: 'One',
      id: 'How',
    },
    {
      header: 'Why Renting is in Your Best Interest',
      body: Why(),
      prompt: '',
      linkRef: '',
      linkTxt: '',
      key: nanoid(),
      bs: 'Two',
      id: 'Why',
    },
    {
      header: 'Our Program Grows With You',
      body: For(),
      prompt: '',
      linkRef: '',
      linkTxt: '',
      key: nanoid(),
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
        <Accordion id="accordion" accordion={accordion} />
      </main>

      <footer></footer>
    </div>
  )
}

export default Rental
