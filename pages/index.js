import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Atlanta Violins</title>
        <meta name="viewport" content="width=device-width, initial-scale-=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className="navbar bg-light ">
          <div className="container d-flex justify-content-around">
            <div className="w-25 dropdown d-flex justify-content-center">
              <button
                className="btn-sm btn-outline-dark dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Hours
              </button>
              <div className="dropdown-menu">
                <div className="dropdown-item">
                  <table className="table">
                    <tbody>
                      <tr className="table-danger">
                        <th scope="row">Monday</th>
                        <td>Closed</td>
                      </tr>
                      <tr className="table-success">
                        <th scope="row">Tuesday</th>
                        <td>11a-6p</td>
                      </tr>
                      <tr className="table-success">
                        <th scope="row">Wednesday</th>
                        <td>11a-6p</td>
                      </tr>
                      <tr className="table-success">
                        <th scope="row">Thursday</th>
                        <td>11a-6p</td>
                      </tr>
                      <tr className="table-info">
                        <th scope="row">Friday</th>
                        <td>
                          11a-<strong>5p</strong>
                        </td>
                      </tr>
                      <tr className="table-warning">
                        <th scope="row">Saturday</th>
                        <td>
                          11a-<strong>3p</strong>
                        </td>
                      </tr>
                      <tr className="table-danger">
                        <th scope="row">Sunday</th>
                        <td>Closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <a
              className="navbar-brand d-flex justify-content-center mx-auto"
              href="#"
            >
              <Image
                src="/logo.png"
                width={155}
                height={74}
                alt="Atlanta Violins Logo"
              />
            </a>
            <div className="w-25 dropdown d-flex justify-content-center">
              <button
                className="btn-sm btn-outline-dark dropdown-toggle"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-offset="parent"
              >
                Contact
              </button>
              <div
                id="dropdown-right"
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton2"
              >
                <div className="dropdown-item">Call</div>
                <div className="dropdown-item">Text</div>
                <div className="dropdown-item">Email</div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="container d-flex flex-column justify-content-center fluid bg-light">
        <h1 className="text-center">Welcome to Our Shop!</h1>
        <div className="container fluid d-flex justify-content-center">
          <Image src="/theShop.png" width={431} height={233} />
        </div>
        <div className="accordion" id="main">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Our Rental Program &rarr;
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#main"
            >
              <p className="accordion-body">
                <p>
                  Our rental program provides you a flexible and sensible path
                  towards ownership while saving you money on regular
                  maintenance and repairs.
                </p>

                <p>
                  {`Learn more about `}
                  <Link href="/Rentals/Rentals">
                    <a>how our program works</a>
                  </Link>
                  .
                </p>
              </p>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                The Sales Gallery &rarr;
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#main"
            >
              <p className="accordion-body">
                <p>
                  We carry violins, violas, cellos, double basses, and bows from
                  around the world across a wide range of prices.
                </p>
                <p>Check out our Gallery, read our Buyer's Guide, or</p>
                <p>Make an appointment</p>
              </p>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
              >
                Workshop &rarr;
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#main"
            >
              <p className="accordion-body">
                <p>
                  Our luthiers are not only masters of their craft, they value
                  the time, the budget, and the input of our customers. Whether
                  you need routine maintenance, tonal adjustments, or support
                  through a 'worst-case' scenario we always provide outstanding
                  service and take your needs into account.
                </p>
                <p>Make an appointment</p>
              </p>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="true"
                aria-controls="collapseFour"
              >
                About Our Team &rarr;
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#main"
            >
              <p className="accordion-body">
                <p>
                  Atlanta Violins has been serving the greater Atlanta community
                  from our little shop in Roswell for over 25 years. Generations
                  of orchestra students from across the region have started with
                  our rental program.
                </p>
                <p>Read more about our team here.</p>
              </p>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="true"
                aria-controls="collapseFive"
              >
                Directions &rarr;
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#main"
            >
              <p className="accordion-body ">
                <p>
                  We are located on Atlanta St. (Route 8) just north of the
                  Chattahoochee River and south of the Roswell Mill.
                </p>
                <div className="container d-flex flex-column align-items-center ">
                  <Image
                    className="mx-auto"
                    src="/map.png"
                    width={217}
                    height={151}
                    alt="an beautiful watercolor map by Matt Phillips, links to Google Maps"
                  />
                </div>
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer>
        {/* {<a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>} */}
      </footer>
    </div>
  )
}
