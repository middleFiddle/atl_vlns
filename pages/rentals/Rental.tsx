import Head from 'next/head'

import CallToAction from '../components/CallToAction'
import Accordion from '../components/Accordion'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import How from './how.mdx'
import Why from './why.mdx'
import For from './for.mdx'

const Rental = () => {
  const accordion = [
    {
      header: 'How It Works',
      prompt: `yo`,
      linkRef: '#',
      linkTxt: 'link',
      bs: 'One',
      id: 'How',
    },
    {
      header: 'Why Renting is in Your Best Interest',
      prompt: 'yo',
      linkRef: '#',
      linkTxt: 'link',
      bs: 'Two',
      id: 'Why',
    },
    {
      header: 'Our Program Grows With You',
      prompt: 'yo',
      linkRef: '#',
      linkTxt: 'link',
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
        <CallToAction
          txt="Start a Rental!"
          href="https://online.atlantaviolins.com/aerntschoolselect.aspx"
        ></CallToAction>
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
