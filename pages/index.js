import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Accordion from './components/Accordion'
import Navbar from './components/Navbar'
import rental from './home/rental.mdx'

const mdxReader = (mdx) => mdx().props.children.props.children

export default function Home() {
  const accordion = [
    {
      header: 'Our Rental Program',
      body: mdxReader(rental),
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
        <h1 className="text-center">Welcome to Our Shop!</h1>
        <div className="container fluid d-flex justify-content-center">
          <Image
            src="/theShop.png"
            width={431}
            height={233}
            alt="beautiful watercolor of our little old shop"
          />
        </div>
        <Accordion accordion={accordion} />
      </main>

      <footer></footer>
    </div>
  )
}
