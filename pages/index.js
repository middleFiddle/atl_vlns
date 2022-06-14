import Head from 'next/head'

import Accordion from './components/Accordion'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import rental from './home/rental.mdx'
import mdxReader from './utils/mdxReader'

export default function Home() {
  const accordion = [
    {
      header: 'Our Rental Program',
      body: mdxReader(rental),
      linkRef: '/rentals/Rental',
      linkTxt: 'how our program works',
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
