import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Accordion = ({ accordion }) => {
  return (
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
            {accordion[0].header} &rarr;
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#main"
        >
          <section id="Rentals" className="accordion-body">
            {accordion[0].body}
            <p>
              {`Learn more about `}
              <Link href="/rentals/Rentals">
                <a>how our program works</a>
              </Link>
              .
            </p>
          </section>
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
          <section id="Sales" className="accordion-body">
            <p>
              We carry violins, violas, cellos, double basses, and bows from
              around the world across a wide range of prices.
            </p>
            <p>{`Check out our Gallery, read our Buyer's Guide, or`}</p>
            <p>Make an appointment</p>
          </section>
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
          <section id="Workshop" className="accordion-body">
            <p>
              {`Our luthiers are not only masters of their craft, they value
                  the time, the budget, and the input of our customers. Whether
                  you need routine maintenance, tonal adjustments, or support
                  through a 'worst-case' scenario we always provide outstanding
                  service and take your needs into account.`}
            </p>
            <p>Make an appointment</p>
          </section>
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
            Who We Are &rarr;
          </button>
        </h2>
        <div
          id="collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#main"
        >
          <section id="Story" className="accordion-body">
            <p>
              Atlanta Violins has been serving the greater Atlanta community
              from our little shop in Roswell for over 25 years. Generations of
              orchestra students from across the region have started with our
              rental program.
            </p>
            <p>Read more about our team here.</p>
          </section>
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
          <section className="accordion-body ">
            <p>
              `We are located on Atlanta St. (Route 8) just north of the
              Chattahoochee River and south of the Roswell Mill.`
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
          </section>
        </div>
      </div>
    </div>
  )
}

export default Accordion
